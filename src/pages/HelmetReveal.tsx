import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const HelmetReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const gu = {
      time: { value: 0 },
      dTime: { value: 0 },
      aspect: { value: window.innerWidth / window.innerHeight }
    };

    class Blob {
      renderer: THREE.WebGLRenderer;
      fbTexture: { value: THREE.FramebufferTexture };
      rtOutput: THREE.WebGLRenderTarget;
      uniforms: {
        pointer: { value: THREE.Vector2 };
        pointerDown: { value: number };
        pointerRadius: { value: number };
        pointerDuration: { value: number };
      };
      rtScene: THREE.Mesh;
      rtCamera: THREE.Camera;

      constructor(renderer: THREE.WebGLRenderer) {
        this.renderer = renderer;
        this.fbTexture = { value: new THREE.FramebufferTexture(window.innerWidth, window.innerHeight) };
        this.rtOutput = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
        this.uniforms = {
          pointer: { value: new THREE.Vector2().setScalar(10) },
          pointerDown: { value: 1 },
          pointerRadius: { value: 0.375 },
          pointerDuration: { value: 2.5 }
        };

        const handlePointerMove = (event: PointerEvent) => {
          this.uniforms.pointer.value.x = (event.clientX / window.innerWidth) * 2 - 1;
          this.uniforms.pointer.value.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        const handlePointerLeave = () => {
          this.uniforms.pointer.value.setScalar(10);
        };

        window.addEventListener("pointermove", handlePointerMove);
        renderer.domElement.addEventListener("pointerleave", handlePointerLeave);

        const material = new THREE.MeshBasicMaterial({
          color: 0x213448, // Royal blue from design system
        });

        material.onBeforeCompile = (shader) => {
          shader.uniforms.dTime = gu.dTime;
          shader.uniforms.aspect = gu.aspect;
          shader.uniforms.pointer = this.uniforms.pointer;
          shader.uniforms.pointerDown = this.uniforms.pointerDown;
          shader.uniforms.pointerRadius = this.uniforms.pointerRadius;
          shader.uniforms.pointerDuration = this.uniforms.pointerDuration;
          shader.uniforms.fbTexture = this.fbTexture;
          shader.fragmentShader = `
            uniform float dTime;
            uniform float aspect;
            uniform vec2 pointer;
            uniform float pointerDown;
            uniform float pointerRadius;
            uniform float pointerDuration;
            uniform sampler2D fbTexture;
            
            ${shader.fragmentShader}
          `.replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
            
            float duration = pointerDuration;
            
            float rVal = texture2D(fbTexture, vUv).r;
            
            rVal -= clamp(dTime / duration, 0., 0.1);
            rVal = clamp(rVal, 0., 1.);
            
            float f = 0.;
            if (pointerDown > 0.5){
              vec2 uv = (vUv - 0.5) * 2. * vec2(aspect, 1.);
              vec2 mouse = pointer * vec2(aspect, 1);
              
              f = 1. - smoothstep(pointerRadius * 0.1, pointerRadius, distance(uv, mouse));
            }
            rVal += f * 0.1;
            rVal = clamp(rVal, 0., 1.);
            diffuseColor.rgb = vec3(rVal);
            `
          );
        };

        material.defines = { "USE_UV": "" };

        this.rtScene = new THREE.Mesh(
          new THREE.PlaneGeometry(2, 2),
          material
        );
        this.rtCamera = new THREE.Camera();
      }

      render() {
        this.renderer.setRenderTarget(this.rtOutput);
        this.renderer.render(this.rtScene, this.rtCamera);
        this.renderer.copyFramebufferToTexture(this.fbTexture.value);
        this.renderer.setRenderTarget(null);
      }

      setSize(w: number, h: number) {
        this.rtOutput.setSize(w, h);
      }
    }

    // Scene setup with parchment-inspired background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf7f4ef);
    
    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(-1, 0, 0).setLength(15);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      gu.aspect.value = camera.aspect;
    };

    window.addEventListener("resize", handleResize);

    const camShift = new THREE.Vector3(0, 1, 0);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.object.position.add(camShift);
    controls.target.add(camShift);

    // Warm ambient light for legal/library atmosphere
    const ambientLight = new THREE.AmbientLight(0xfff5e6, Math.PI * 0.6);
    scene.add(ambientLight);
    
    // Add directional light with warm tone
    const directionalLight = new THREE.DirectionalLight(0xffecd2, Math.PI * 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    const blob = new Blob(renderer);
    const loader = new GLTFLoader();

    const clock = new THREE.Clock();
    let t = 0;
    let animationId: number;

    const loadModels = async () => {
      try {
        // Load head model with classical statue aesthetic
        const headGltf = await loader.loadAsync("https://threejs.org/examples/models/gltf/LeePerrySmith/LeePerrySmith.glb");
        const head = headGltf.scene.children[0] as THREE.Mesh;
        head.geometry.rotateY(Math.PI * 0.01);
        head.material = new THREE.MeshMatcapMaterial({ color: 0xf5f0e8 });
        scene.add(head);

        // Load helmet model with gold/bronze legal aesthetic
        const helmetGltf = await loader.loadAsync("https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf");
        const helmet = helmetGltf.scene.children[0] as THREE.Mesh;
        
        const helmetMaterial = helmet.material as THREE.MeshStandardMaterial;
        helmetMaterial.color = new THREE.Color(0xc9a55c);
        helmetMaterial.metalness = 0.8;
        helmetMaterial.roughness = 0.3;
        
        helmetMaterial.onBeforeCompile = (shader) => {
          shader.uniforms.texBlob = { value: blob.rtOutput.texture };
          shader.vertexShader = `
            varying vec4 vPosProj;
            ${shader.vertexShader}
          `.replace(
            `#include <project_vertex>`,
            `#include <project_vertex>
              vPosProj = gl_Position;
            `
          );
          shader.fragmentShader = `
            uniform sampler2D texBlob;
            varying vec4 vPosProj;
            ${shader.fragmentShader}
          `.replace(
            `#include <clipping_planes_fragment>`,
            `
            vec2 blobUV = ((vPosProj.xy / vPosProj.w) + 1.) * 0.5;
            vec4 blobData = texture(texBlob, blobUV);
            if (blobData.r < 0.01) discard;
            #include <clipping_planes_fragment>
            `
          );
        };
        
        helmet.scale.setScalar(3.5);
        helmet.position.set(0, 1.5, 0.75);
        scene.add(helmet);

        // Create wireframe helmet with gold accent
        const helmetWire = new THREE.Mesh(
          helmet.geometry.clone().rotateX(Math.PI * 0.5),
          new THREE.MeshBasicMaterial({
            color: 0xc9a55c,
            wireframe: true,
            transparent: true,
            opacity: 0.35,
          })
        );
        
        (helmetWire.material as THREE.MeshBasicMaterial).onBeforeCompile = (shader) => {
          shader.uniforms.time = gu.time;
          shader.vertexShader = `
            varying float vYVal;
            ${shader.vertexShader}
          `.replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
              vYVal = position.y;
            `
          );
          shader.fragmentShader = `
            uniform float time;
            varying float vYVal;
            ${shader.fragmentShader}
          `.replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
              float y = fract(vYVal * 0.25 + time * 0.5);
              float fY = smoothstep(0., 0.01, y) - smoothstep(0.02, 0.1, y);
              diffuseColor.a *= fY * 0.9 + 0.1;
            `
          );
        };
        
        helmetWire.scale.setScalar(3.5);
        helmetWire.position.set(0, 1.5, 0.75);
        scene.add(helmetWire);

        const animate = () => {
          animationId = requestAnimationFrame(animate);
          const dt = clock.getDelta();
          t += dt;
          gu.time.value = t;
          gu.dTime.value = dt;
          controls.update();
          blob.render();
          renderer.render(scene, camera);
        };

        animate();
      } catch (error) {
        console.error("Error loading models:", error);
      }
    };

    loadModels();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      controls.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <div ref={containerRef} className="w-full h-full" />
      
      {/* Parchment texture overlay */}
      <div className="absolute inset-0 pointer-events-none parchment-texture opacity-50" />
      
      {/* Back button with legal theme */}
      <div className="absolute top-6 left-6 z-10">
        <a 
          href="/" 
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border shadow-book text-foreground hover:bg-card transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-serif font-medium">Return to Nyaya AI</span>
        </a>
      </div>
      
      {/* Legal-themed content panel */}
      <div className="absolute bottom-8 left-8 z-10 max-w-md">
        <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 border border-border shadow-elevated">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h1 className="font-serif text-2xl font-semibold text-foreground">Justice Revealed</h1>
          </div>
          <p className="text-muted-foreground leading-relaxed font-sans">
            Move your cursor across the screen to unveil the face of justice. 
            Like the law itself, truth is revealed through careful examination.
          </p>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground italic font-serif">
              "Justice is truth in action." — Benjamin Disraeli
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative corner ornaments */}
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-accent/30 rounded-tr-lg" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-accent/30 rounded-br-lg" />
    </div>
  );
};

export default HelmetReveal;
