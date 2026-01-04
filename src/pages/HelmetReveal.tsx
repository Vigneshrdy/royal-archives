import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const LawAIHero = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    /* -------------------- SCENE -------------------- */
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#F5F2EC");

    /* -------------------- CAMERA -------------------- */
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 2.5, 10);

    /* -------------------- RENDERER -------------------- */
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    /* -------------------- LIGHTING -------------------- */
    scene.add(new THREE.AmbientLight(0xfff4dc, 1.2));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2);
    keyLight.position.set(5, 10, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xc9a55c, 1.5);
    rimLight.position.set(-5, 5, -5);
    scene.add(rimLight);

    /* -------------------- AI CORE -------------------- */
    const aiCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 64, 64),
      new THREE.MeshStandardMaterial({
        color: 0x4da3ff,
        emissive: 0x1b4cff,
        emissiveIntensity: 1.2,
        metalness: 0.4,
        roughness: 0.2,
      })
    );
    aiCore.position.y = 1.4;
    scene.add(aiCore);

    /* -------------------- DOCUMENT RINGS -------------------- */
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xc9a55c,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });

    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(1.2 + i * 0.3, 1.3 + i * 0.3, 128),
        ringMat
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 1.4;
      scene.add(ring);
      rings.push(ring);
    }

    /* -------------------- JUSTICE SCALES -------------------- */
    const loader = new GLTFLoader();
    loader.load(
      "https://raw.githubusercontent.com/AlaricTheFool/Scales-of-Justice-GLTF/main/ScalesofJustice.gltf",
      (gltf) => {
        const scales = gltf.scene;
        scales.scale.setScalar(2.2);
        scales.position.y = -0.2;
        scales.traverse((obj: THREE.Object3D) => {
          if ((obj as THREE.Mesh).isMesh) {
            (obj as THREE.Mesh).material = new THREE.MeshStandardMaterial({
              color: 0xc9a55c,
              metalness: 0.8,
              roughness: 0.35,
            });
          }
        });
        scene.add(scales);
      },
      undefined,
      (error) => {
        console.log("Scales model not available, using fallback geometry");
        // Fallback: Create simple scales geometry
        const scalesGroup = new THREE.Group();
        
        // Base pillar
        const pillar = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1, 0.15, 2, 32),
          new THREE.MeshStandardMaterial({ color: 0xc9a55c, metalness: 0.8, roughness: 0.35 })
        );
        pillar.position.y = 0;
        scalesGroup.add(pillar);
        
        // Top beam
        const beam = new THREE.Mesh(
          new THREE.BoxGeometry(2.5, 0.08, 0.08),
          new THREE.MeshStandardMaterial({ color: 0xc9a55c, metalness: 0.8, roughness: 0.35 })
        );
        beam.position.y = 1;
        scalesGroup.add(beam);
        
        // Left pan
        const leftPan = new THREE.Mesh(
          new THREE.CylinderGeometry(0.4, 0.35, 0.1, 32),
          new THREE.MeshStandardMaterial({ color: 0xc9a55c, metalness: 0.8, roughness: 0.35 })
        );
        leftPan.position.set(-1.1, 0.3, 0);
        scalesGroup.add(leftPan);
        
        // Right pan
        const rightPan = new THREE.Mesh(
          new THREE.CylinderGeometry(0.4, 0.35, 0.1, 32),
          new THREE.MeshStandardMaterial({ color: 0xc9a55c, metalness: 0.8, roughness: 0.35 })
        );
        rightPan.position.set(1.1, 0.3, 0);
        scalesGroup.add(rightPan);
        
        // Chains (simplified as lines)
        const chainMat = new THREE.MeshBasicMaterial({ color: 0xc9a55c });
        const leftChain = new THREE.Mesh(
          new THREE.CylinderGeometry(0.02, 0.02, 0.7, 8),
          chainMat
        );
        leftChain.position.set(-1.1, 0.65, 0);
        scalesGroup.add(leftChain);
        
        const rightChain = new THREE.Mesh(
          new THREE.CylinderGeometry(0.02, 0.02, 0.7, 8),
          chainMat
        );
        rightChain.position.set(1.1, 0.65, 0);
        scalesGroup.add(rightChain);
        
        scalesGroup.position.y = -0.5;
        scene.add(scalesGroup);
      }
    );

    /* -------------------- INTERACTION -------------------- */
    const mouse = new THREE.Vector2(99, 99);
    const onPointerMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onPointerMove);

    /* -------------------- ANIMATION -------------------- */
    const clock = new THREE.Clock();
    let animationId: number;
    
    const animate = () => {
      const t = clock.getElapsedTime();

      aiCore.rotation.y += 0.01;
      aiCore.position.y = 1.4 + Math.sin(t * 2) * 0.05;

      rings.forEach((r, i) => {
        r.rotation.z += 0.002 + i * 0.001;
      });

      camera.position.x = Math.sin(t * 0.1) * 0.5;
      camera.lookAt(0, 1.2, 0);

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    /* -------------------- RESIZE -------------------- */
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-full bg-parchment overflow-hidden">
      <div ref={mountRef} className="absolute inset-0" />
      
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10">
        <a 
          href="/" 
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border shadow-book text-foreground hover:bg-card transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-serif font-medium">Back</span>
        </a>
      </div>

      {/* UI Overlay */}
      <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 max-w-lg bg-card/90 backdrop-blur-md p-6 rounded-xl border border-border shadow-elevated z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
          <h1 className="text-3xl font-serif font-semibold text-foreground">
            Nyaya AI
          </h1>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          An AI-powered legal assistant that analyzes statutes, case law, and
          precedents — instantly and accurately.
        </p>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm text-accent italic font-serif">
            "Where law meets intelligence."
          </p>
        </div>
      </div>

      {/* Right side info */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 max-w-xs hidden md:block z-10">
        <div className="space-y-4">
          <div className="bg-card/70 backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-medium text-foreground">AI Core</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Neural processing center analyzing legal frameworks
            </p>
          </div>
          <div className="bg-card/70 backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-sm font-medium text-foreground">Justice Scales</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Symbolizing balanced legal analysis
            </p>
          </div>
          <div className="bg-card/70 backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-gold-light" />
              <span className="text-sm font-medium text-foreground">Document Rings</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Orbiting statutes, precedents & case law
            </p>
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-accent/30 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-accent/30 rounded-br-lg pointer-events-none" />
    </div>
  );
};

export default LawAIHero;
