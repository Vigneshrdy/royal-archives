import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

const GhibliCastle = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const castleRef = useRef<HTMLDivElement>(null);
  const castleContainerRef = useRef<HTMLDivElement>(null);
  const [mouseControl, setMouseControl] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = 35;
  const speedRef = useRef(0.9);
  const progressRef = useRef(0);
  const scaleRef = useRef(1);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages >= totalImages) {
      setTimeout(() => setLoading(false), 500);
    }
  }, [loadedImages]);

  // Resize handler
  useEffect(() => {
    const resize = () => {
      const WIDTH = window.innerWidth;
      scaleRef.current = WIDTH / 1440;
      
      if (castleRef.current) {
        gsap.set(castleRef.current, { scale: scaleRef.current * 0.85 });
      }
    };
    
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Main animation loop for castle movement
  useEffect(() => {
    if (loading) return;

    let animationId: number;
    const WIDTH = window.innerWidth;
    
    const draw = () => {
      progressRef.current += 0.0012 * speedRef.current;
      if (progressRef.current > 1) progressRef.current = 0;
      if (progressRef.current < 0) progressRef.current = 1;

      const scale = scaleRef.current;
      const castleWidth = 600 * scale * 0.85;

      if (castleContainerRef.current) {
        gsap.set(castleContainerRef.current, {
          x: (1440 * scale + castleWidth) * -progressRef.current + castleWidth / 2,
          y: 900 * scale * -(0.36 + progressRef.current * 0.35)
        });
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, [loading]);

  // Mouse control
  useEffect(() => {
    if (!mouseControl) return;

    const handleMouseMove = (e: MouseEvent) => {
      const WIDTH = window.innerWidth;
      speedRef.current = (1 - (e.clientX / WIDTH) * 2) * 2;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [mouseControl]);

  // GSAP Timeline animations
  useEffect(() => {
    if (loading) return;

    gsap.defaults({ ease: "power1.inOut" });

    // Front left leg animation
    const flleg = document.querySelector(".flleg");
    const flbottomGroup = document.querySelector(".flbottom-group");
    const flfoot = document.querySelector(".flfoot");

    if (flleg && flbottomGroup && flfoot) {
      gsap.set(flleg, { rotationZ: 45, x: -5 });
      gsap.set(flbottomGroup, { rotationZ: 5 });
      gsap.set(flfoot, { rotationZ: -50 });

      const tl1 = gsap.timeline({ repeat: -1 });
      tl1.to(flleg, { duration: 1.0, rotationZ: -45, force3D: true }, 0)
         .to(flleg, { duration: 0.2, x: 0, ease: "power1.out", force3D: true }, 0)
         .to(flleg, { duration: 0.55, scaleY: 0.8, force3D: true }, 0)
         .to(flbottomGroup, { duration: 0.55, scaleY: 0.8, force3D: true }, 0)
         .to(flbottomGroup, { duration: 0.6, rotationZ: 20, ease: "power3.in", force3D: true }, 0)
         .to(flfoot, { duration: 0.55, scaleY: 1.5, force3D: true }, 0)
         .to(flfoot, { duration: 0.6, rotationZ: 10, ease: "power2.in", force3D: true }, 0)
         .to(flleg, { duration: 0.4, scaleY: 1.0, force3D: true }, 0.6)
         .to(flbottomGroup, { duration: 0.4, scaleY: 0.7, force3D: true }, 0.6)
         .to(flbottomGroup, { duration: 0.4, rotationZ: 50, force3D: true }, 0.6)
         .to(flfoot, { duration: 0.4, scaleY: 1.5, force3D: true }, 0.6)
         .to(flleg, { duration: 0.6, x: 20, force3D: true }, 0.7)
         .to(flleg, { duration: 0.5, rotationZ: 0, ease: "power1.in", force3D: true }, 1.0)
         .to(flleg, { duration: 0.5, scaleY: 0.8, force3D: true }, 1.0)
         .to(flbottomGroup, { duration: 0.5, scaleY: 0.5, force3D: true }, 1.0)
         .to(flfoot, { duration: 0.5, scaleX: 1.8, scaleY: 1.7, ease: "power1.in", force3D: true }, 1.0)
         .to(flbottomGroup, { duration: 0.5, rotationZ: 40, force3D: true }, 1.0)
         .to(flfoot, { duration: 0.5, rotationZ: -70, force3D: true }, 1.0)
         .to(flleg, { duration: 0.5, rotationZ: 45, ease: "power1.out", force3D: true }, 1.5)
         .to(flleg, { duration: 0.5, scaleY: 1.0, force3D: true }, 1.5)
         .to(flbottomGroup, { duration: 0.5, scaleY: 1.0, force3D: true }, 1.5)
         .to(flbottomGroup, { duration: 0.5, rotationZ: 5, force3D: true }, 1.5)
         .to(flfoot, { duration: 0.5, rotationZ: -50, force3D: true }, 1.5)
         .to(flfoot, { duration: 0.5, scaleX: 1.0, scaleY: 1.0, force3D: true }, 1.5)
         .to(flleg, { duration: 0.5, x: -10, force3D: true }, 1.3)
         .to(flleg, { duration: 0.2, x: -5, ease: "power1.in", force3D: true }, 1.8);
    }

    // Back left leg animation (similar timing, delayed)
    const blleg = document.querySelector(".blleg");
    const blbottomGroup = document.querySelector(".blbottom-group");
    const blfoot = document.querySelector(".blfoot");

    if (blleg && blbottomGroup && blfoot) {
      gsap.set(blleg, { rotationZ: 45, x: -5 });
      gsap.set(blbottomGroup, { rotationZ: 5 });
      gsap.set(blfoot, { rotationZ: -50 });

      const tl2 = gsap.timeline({ repeat: -1, delay: 0.7 });
      tl2.to(blleg, { duration: 1.0, rotationZ: -45, force3D: true }, 0)
         .to(blleg, { duration: 0.2, x: 0, ease: "power1.out", force3D: true }, 0)
         .to(blleg, { duration: 0.55, scaleY: 0.8, force3D: true }, 0)
         .to(blbottomGroup, { duration: 0.55, scaleY: 0.8, force3D: true }, 0)
         .to(blbottomGroup, { duration: 0.6, rotationZ: 20, ease: "power3.in", force3D: true }, 0)
         .to(blfoot, { duration: 0.55, scaleY: 1.5, force3D: true }, 0)
         .to(blfoot, { duration: 0.6, rotationZ: 10, ease: "power2.in", force3D: true }, 0)
         .to(blleg, { duration: 0.4, scaleY: 1.0, force3D: true }, 0.6)
         .to(blbottomGroup, { duration: 0.4, scaleY: 0.7, force3D: true }, 0.6)
         .to(blbottomGroup, { duration: 0.4, rotationZ: 50, force3D: true }, 0.6)
         .to(blfoot, { duration: 0.4, scaleY: 1.5, force3D: true }, 0.6)
         .to(blleg, { duration: 0.6, x: 20, force3D: true }, 0.7)
         .to(blleg, { duration: 0.5, rotationZ: 0, ease: "power1.in", force3D: true }, 1.0)
         .to(blleg, { duration: 0.5, scaleY: 0.8, force3D: true }, 1.0)
         .to(blbottomGroup, { duration: 0.5, scaleY: 0.5, force3D: true }, 1.0)
         .to(blfoot, { duration: 0.5, scaleX: 1.8, scaleY: 1.7, ease: "power1.in", force3D: true }, 1.0)
         .to(blbottomGroup, { duration: 0.5, rotationZ: 40, force3D: true }, 1.0)
         .to(blfoot, { duration: 0.5, rotationZ: -70, force3D: true }, 1.0)
         .to(blleg, { duration: 0.5, rotationZ: 45, ease: "power1.out", force3D: true }, 1.5)
         .to(blleg, { duration: 0.5, scaleY: 1.0, force3D: true }, 1.5)
         .to(blbottomGroup, { duration: 0.5, scaleY: 1.0, force3D: true }, 1.5)
         .to(blbottomGroup, { duration: 0.5, rotationZ: 5, force3D: true }, 1.5)
         .to(blfoot, { duration: 0.5, rotationZ: -50, force3D: true }, 1.5)
         .to(blfoot, { duration: 0.5, scaleX: 1.0, scaleY: 1.0, force3D: true }, 1.5)
         .to(blleg, { duration: 0.5, x: -10, force3D: true }, 1.3)
         .to(blleg, { duration: 0.2, x: -5, ease: "power1.in", force3D: true }, 1.8);
    }

    // Front right leg
    const frleg = document.querySelector(".frleg");
    const frfoot = document.querySelector(".frfoot");

    if (frleg && frfoot) {
      gsap.set(frleg, { rotationZ: 35, x: -40 });
      gsap.set(frfoot, { rotationZ: -35 });

      const tl3 = gsap.timeline({ repeat: -1, delay: 1.0 });
      tl3.to(frleg, { duration: 0.9, rotationZ: -35, force3D: true }, 0)
         .to(frleg, { duration: 1.2, x: 40, ease: "power1.out", force3D: true }, 0)
         .to(frfoot, { duration: 0.9, rotationZ: 35, force3D: true }, 0)
         .to(frleg, { duration: 0.4, y: -15, ease: "power1.in", force3D: true }, 0)
         .to(frleg, { duration: 0.4, y: 0, ease: "power1.out", force3D: true }, 0.5)
         .to(frleg, { duration: 1.1, rotationZ: 35, force3D: true }, 0.9)
         .to(frleg, { duration: 0.6, x: -50, force3D: true }, 1.2)
         .to(frfoot, { duration: 0.5, rotationZ: -50, force3D: true }, 0.9)
         .to(frfoot, { duration: 0.3, rotationZ: -35, force3D: true }, 1.7)
         .to(frleg, { duration: 0.6, y: -40, force3D: true }, 0.9)
         .to(frleg, { duration: 0.5, y: 0, force3D: true }, 1.5)
         .to(frleg, { duration: 0.2, x: -40, ease: "power1.in", force3D: true }, 1.8);
    }

    // Back right leg
    const brleg = document.querySelector(".brleg");
    const brfoot = document.querySelector(".brfoot");

    if (brleg && brfoot) {
      gsap.set(brleg, { rotationZ: 35, x: -40 });
      gsap.set(brfoot, { rotationZ: -35 });

      const tl4 = gsap.timeline({ repeat: -1, delay: 1.7 });
      tl4.to(brleg, { duration: 0.9, rotationZ: -35, force3D: true }, 0)
         .to(brleg, { duration: 1.2, x: 40, ease: "power1.out", force3D: true }, 0)
         .to(brfoot, { duration: 0.9, rotationZ: 35, force3D: true }, 0)
         .to(brleg, { duration: 0.4, y: -15, ease: "power1.in", force3D: true }, 0)
         .to(brleg, { duration: 0.4, y: 0, ease: "power1.out", force3D: true }, 0.5)
         .to(brleg, { duration: 1.1, rotationZ: 35, force3D: true }, 0.9)
         .to(brleg, { duration: 0.6, x: -50, force3D: true }, 1.2)
         .to(brfoot, { duration: 0.5, rotationZ: -50, force3D: true }, 0.9)
         .to(brfoot, { duration: 0.3, rotationZ: -35, force3D: true }, 1.7)
         .to(brleg, { duration: 0.6, y: -40, force3D: true }, 0.9)
         .to(brleg, { duration: 0.5, y: 0, force3D: true }, 1.5)
         .to(brleg, { duration: 0.2, x: -40, ease: "power1.in", force3D: true }, 1.8);
    }

    // Castle body sway
    const castle = castleRef.current;
    if (castle) {
      gsap.set(castle, { rotationZ: 9 });
      const scale = scaleRef.current;

      const tl5 = gsap.timeline({ repeat: -1 });
      tl5.to(castle, { duration: 1.0, rotationZ: 7, force3D: true }, 0)
         .to(castle, { duration: 1.0, rotationZ: 9, force3D: true }, 1.0)
         .to(castle, { duration: 0.5, x: `+=${2 * scale}`, y: `-=${4 * scale}`, force3D: true }, 0)
         .to(castle, { duration: 0.5, x: `-=${4 * scale}`, y: `+=${4 * scale}`, force3D: true }, 0.5)
         .to(castle, { duration: 0.5, x: `+=${4 * scale}`, y: `-=${5 * scale}`, force3D: true }, 1.0)
         .to(castle, { duration: 0.5, x: `-=${2 * scale}`, y: `+=${5 * scale}`, force3D: true }, 1.5);
    }

    // Mound group sway
    const mound = document.querySelector(".mound-group");
    if (mound) {
      gsap.set(mound, { rotationZ: 2 });
      const tl6 = gsap.timeline({ repeat: -1, delay: 0.2 });
      tl6.to(mound, { duration: 1.0, rotationZ: -1, force3D: true }, 0)
         .to(mound, { duration: 1.0, rotationZ: 2, force3D: true }, 1.0);
    }

    // Wing animation
    const wing = document.querySelector(".wing");
    if (wing) {
      gsap.set(wing, { rotationZ: 2 });
      const tl7 = gsap.timeline({ repeat: -1, delay: 0.8 });
      tl7.to(wing, { duration: 1.0, rotationZ: -1, x: -5, force3D: true }, 0)
         .to(wing, { duration: 1.0, rotationZ: 2, x: 0, force3D: true }, 1.0);
    }

    // Chimney animations
    const chimney1 = document.querySelector(".chimney1");
    const chimney2 = document.querySelector(".chimney2");
    const chimney3 = document.querySelector(".chimney3");

    [chimney1, chimney2, chimney3].forEach((chimney, i) => {
      if (chimney) {
        gsap.set(chimney, { rotationZ: -10 });
        const tl = gsap.timeline({ repeat: -1, delay: i * 0.5 });
        tl.to(chimney, { duration: 1.5, rotationZ: 5, force3D: true }, 0)
          .to(chimney, { duration: 1.5, rotationZ: -10, force3D: true }, 1.5)
          .to(chimney, { duration: 0.5, y: 5, x: 0, force3D: true }, 0.1)
          .to(chimney, { duration: 0.1, y: -15, x: 4, ease: "power1.out", force3D: true }, 0.6)
          .to(chimney, { duration: 0.9, y: 0, x: 0, force3D: true }, 0.7);
      }
    });

    // Houses group
    const houses = document.querySelector(".houses-group");
    const point1 = document.querySelector(".point1");
    const point2 = document.querySelector(".point2");
    if (houses && point1) {
      gsap.set(houses, { rotationZ: 2, x: -4 });
      gsap.set(point1, { rotationZ: 2, x: -2 });
      const tl11 = gsap.timeline({ repeat: -1, delay: 0.5 });
      tl11.to(houses, { duration: 1.0, rotationZ: -1, y: 5, x: 0, force3D: true }, 0)
          .to(houses, { duration: 1.0, rotationZ: 2, y: 0, x: -4, force3D: true }, 1.0)
          .to(point1, { duration: 1.0, rotationZ: -10, y: 2, x: 0, force3D: true }, 0)
          .to(point1, { duration: 1.0, rotationZ: 2, y: 0, x: -2, force3D: true }, 1.0);
      if (point2) {
        tl11.to(point2, { duration: 1.0, rotationZ: -5, y: 5, x: 2, force3D: true }, 0)
            .to(point2, { duration: 1.0, rotationZ: 0, y: 0, x: 0, force3D: true }, 1.0);
      }
    }

    // Treehouse
    const treehouse = document.querySelector(".treehouse");
    if (treehouse) {
      gsap.set(treehouse, { rotationZ: -5, y: 20, x: 4 });
      const tl13 = gsap.timeline({ repeat: -1, delay: 1.4 });
      tl13.to(treehouse, { duration: 1.0, rotationZ: 10, force3D: true }, 0)
          .to(treehouse, { duration: 1.0, rotationZ: -5, force3D: true }, 1.0)
          .to(treehouse, { duration: 0.4, y: -5, x: -2, force3D: true }, 0.2)
          .to(treehouse, { duration: 1.6, y: 20, x: 4, force3D: true }, 0.8);
    }

    // Antenna & Wind
    const antenna = document.querySelector(".antenna");
    const wind = document.querySelector(".wind");
    const knob = document.querySelector(".knob");
    const tele = document.querySelector(".tele");
    const cannon = document.querySelector(".cannon");

    if (antenna) {
      gsap.set(antenna, { rotationZ: 10 });
      const tl = gsap.timeline({ repeat: -1, delay: 0.65 });
      tl.to(antenna, { duration: 1.0, rotationZ: -5, x: 0, force3D: true }, 0)
        .to(antenna, { duration: 1.0, rotationZ: 10, x: 5, force3D: true }, 1.0)
        .to(antenna, { duration: 1.0, rotationZ: -10, x: -5, force3D: true }, 2.0)
        .to(antenna, { duration: 1.0, rotationZ: 10, x: 0, force3D: true }, 3.0);
    }

    if (wind) {
      gsap.set(wind, { rotationZ: -10 });
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(wind, { duration: 1.1, rotationZ: 5, force3D: true }, 0)
        .to(wind, { duration: 1.0, rotationZ: -15, force3D: true }, 1.1)
        .to(wind, { duration: 1.0, rotationZ: 10, force3D: true }, 2.1)
        .to(wind, { duration: 0.9, rotationZ: -10, force3D: true }, 3.1);
    }

    if (knob) {
      gsap.set(knob, { rotationZ: -20 });
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(knob, { duration: 0.2, rotationZ: 50, force3D: true }, 0)
        .to(knob, { duration: 0.2, rotationZ: -20, force3D: true }, 0.3)
        .to(knob, { duration: 0.2, rotationZ: 45, force3D: true }, 0.7)
        .to(knob, { duration: 0.2, rotationZ: -25, force3D: true }, 1.0)
        .to(knob, { duration: 0.2, rotationZ: 30, force3D: true }, 1.5)
        .to(knob, { duration: 0.2, rotationZ: 0, force3D: true }, 1.9)
        .to(knob, { duration: 0.2, rotationZ: -20, force3D: true }, 2.2);
    }

    if (tele) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(tele, { duration: 1.0, rotationZ: -3, force3D: true }, 0)
        .to(tele, { duration: 1.0, rotationZ: 2, force3D: true }, 1.0)
        .to(tele, { duration: 0.25, x: 25, y: 4, force3D: true }, 0.6)
        .to(tele, { duration: 2.5, x: 0, y: 0, force3D: true }, 0.9);
    }

    if (cannon) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(cannon, { duration: 0.9, rotationZ: -7, force3D: true }, 0)
        .to(cannon, { duration: 0.9, rotationZ: 2, force3D: true }, 0.9)
        .to(cannon, { duration: 1.1, rotationZ: -5, force3D: true }, 1.8)
        .to(cannon, { duration: 1.1, rotationZ: 0, force3D: true }, 2.9)
        .to(cannon, { duration: 0.25, x: 30, y: 4, force3D: true }, 0.85)
        .to(cannon, { duration: 2.6, x: 0, y: 0, force3D: true }, 1.4);
    }

    // Cloud intro animation
    const WIDTH = window.innerWidth;
    const scale = scaleRef.current;

    gsap.to(".cloud1", { duration: 20, x: WIDTH * 2, y: 300 * scale, opacity: 0.3, ease: "none", force3D: true });
    gsap.to(".cloud-shadow1", { duration: 20, x: WIDTH * 2 + 50 * scale, y: 450 * scale, opacity: 0.2, ease: "none", force3D: true });
    gsap.to(".cloud-shadow2", { duration: 20, x: WIDTH * 2 + 50 * scale, y: 450 * scale, ease: "none", force3D: true });
    gsap.to(".cloud-shadow3", { duration: 20, x: WIDTH * 2 + 50 * scale, y: 450 * scale, ease: "none", force3D: true });
    gsap.to(".cloud2", { duration: 20, x: WIDTH * 2, y: 300 * scale, opacity: 0.5, ease: "none", force3D: true });
    gsap.to(".cloud3", { duration: 20, x: WIDTH * 2, y: 300 * scale, ease: "none", force3D: true });
    gsap.to(".cloud4", { duration: 20, x: WIDTH * 2, y: 300 * scale, ease: "none", force3D: true });
    gsap.to(".cloud5", { duration: 20, x: WIDTH * 2, y: 300 * scale, ease: "none", force3D: true });

    // Repeating background clouds
    gsap.to(".cloud-bg", {
      duration: 40,
      x: WIDTH * 2,
      y: 200 * scale,
      ease: "none",
      repeat: -1,
      force3D: true,
      onRepeat: function() {
        gsap.set(".cloud-bg", {
          y: Math.random() * 200 - 100,
          rotationZ: Math.round(Math.random() * 60) - 30,
          scaleX: Math.random() > 0.5 ? 1 : -1
        });
      }
    });

    gsap.to(".cloud-bg2", {
      duration: 40,
      x: WIDTH * 2,
      y: 200 * scale,
      ease: "none",
      delay: 10,
      repeat: -1,
      force3D: true,
      onRepeat: function() {
        gsap.set(".cloud-bg2", {
          y: Math.random() * 200 - 100,
          rotationZ: Math.round(Math.random() * 60) - 30,
          scaleX: Math.random() > 0.5 ? 1 : -1
        });
      }
    });

    return () => {
      gsap.killTweensOf("*");
    };
  }, [loading]);

  const basePath = "/ghibli/";

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: "#2294b3" }}>
      {/* Back button */}
      <Link to="/" className="absolute top-4 left-4 z-50">
        <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </Link>

      {/* Toggle control */}
      <div
        className="absolute top-4 right-4 z-50 px-4 py-2 bg-white rounded text-xs uppercase tracking-wider cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => setMouseControl(!mouseControl)}
      >
        {mouseControl ? "Disable" : "Enable"} mouse controls
      </div>

      {/* Loading gate */}
      {loading && (
        <div className="absolute inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-500">
          <span className="text-xs uppercase tracking-widest">
            Loading... {Math.round((loadedImages / totalImages) * 100)}%
          </span>
        </div>
      )}

      {/* Container */}
      <div
        ref={containerRef}
        className={`absolute w-full bottom-0 left-0 ${mouseControl ? "cursor-ew-resize" : ""}`}
        style={{ paddingTop: "62.5%" }}
      >
        {/* Background clouds */}
        <img className="cloud-bg absolute" style={{ bottom: "17%", width: "80%", right: "100%" }} src={`${basePath}cloud-bg.png`} onLoad={handleImageLoad} alt="" />
        <img className="cloud-bg2 absolute" style={{ bottom: "17%", width: "80%", right: "100%" }} src={`${basePath}cloud-bg.png`} onLoad={handleImageLoad} alt="" />

        {/* Cloud shadows */}
        <img className="cloud-shadow1 absolute" style={{ bottom: "43%", right: "100%", width: "80%", transform: "rotate(5deg)" }} src={`${basePath}cloud-shadow.png`} onLoad={handleImageLoad} alt="" />
        <img className="cloud-shadow2 absolute" style={{ bottom: "12%", left: "36%", width: "80%", transform: "rotate(5deg)" }} src={`${basePath}cloud-shadow.png`} onLoad={handleImageLoad} alt="" />
        <img className="cloud-shadow3 absolute" style={{ bottom: "31%", left: "-30%", width: "80%", transform: "rotate(5deg)" }} src={`${basePath}cloud-shadow.png`} onLoad={handleImageLoad} alt="" />

        {/* Clouds */}
        <img className="cloud1 absolute" style={{ bottom: "30%", right: "100%", width: "80%" }} src={`${basePath}cloud.png`} onLoad={handleImageLoad} alt="" />
        <img className="cloud2 absolute" style={{ bottom: "46%", left: "-29%", width: "80%" }} src={`${basePath}cloud2.png`} onLoad={handleImageLoad} alt="" />
        <img className="cloud3 absolute" style={{ bottom: "38%", left: "17%", width: "80%" }} src={`${basePath}cloud.png`} onLoad={handleImageLoad} alt="" />
        <img className="cloud4 absolute" style={{ bottom: "18%", left: "-18%", width: "80%" }} src={`${basePath}cloud2.png`} onLoad={handleImageLoad} alt="" />
        <img className="cloud5 absolute" style={{ bottom: "8%", left: "40%", width: "80%" }} src={`${basePath}cloud.png`} onLoad={handleImageLoad} alt="" />

        {/* Background */}
        <img className="background absolute" style={{ bottom: "25.5%", left: 0, width: "100%" }} src={`${basePath}background.jpg`} onLoad={handleImageLoad} alt="" />

        {/* Castle container */}
        <div ref={castleContainerRef} className="castle-container absolute" style={{ left: "100%", bottom: "0%" }}>
          <div
            ref={castleRef}
            className="castle absolute"
            style={{
              top: 0,
              left: 0,
              width: "600px",
              height: "750px",
              perspective: "1000px",
              transformOrigin: "50% 70%",
              transform: "translate(-50%, -70%) rotateZ(9deg)",
            }}
          >
            {/* Back right leg */}
            <div className="brleg absolute" style={{ left: "400px", top: "625px", transformOrigin: "10px -10px", transformStyle: "preserve-3d" }}>
              <img src={`${basePath}brbottom.png`} onLoad={handleImageLoad} alt="" />
              <img className="brfoot absolute" style={{ left: "-18px", top: "82px", transformOrigin: "56% 44%" }} src={`${basePath}brfoot.png`} onLoad={handleImageLoad} alt="" />
            </div>

            {/* Front right leg */}
            <div className="frleg absolute" style={{ left: "240px", top: "653px", transformOrigin: "8px -10px", transformStyle: "preserve-3d" }}>
              <img src={`${basePath}frbottom.png`} onLoad={handleImageLoad} alt="" />
              <img className="frfoot absolute" style={{ left: "-18px", top: "51px", transformOrigin: "56% 44%" }} src={`${basePath}frfoot.png`} onLoad={handleImageLoad} alt="" />
            </div>

            {/* Chimney 3 */}
            <img className="chimney3 absolute" style={{ left: "400px", top: "30px", transformOrigin: "45% 120%" }} src={`${basePath}chimney3.png`} onLoad={handleImageLoad} alt="" />

            {/* Houses group */}
            <div className="houses-group absolute" style={{ left: "305px", top: "130px", transformOrigin: "-50px 300px", transformStyle: "preserve-3d" }}>
              <img className="point6 absolute" style={{ left: "84px", top: "19px", transformOrigin: "40% 120%" }} src={`${basePath}point6.png`} onLoad={handleImageLoad} alt="" />
              <img className="point5 absolute" style={{ left: "70px", top: "-23px", transformOrigin: "-40% 200%" }} src={`${basePath}point5.png`} onLoad={handleImageLoad} alt="" />
              <img className="point4 absolute" style={{ left: "40px", top: "-17px", transformOrigin: "0% 100%" }} src={`${basePath}point4.png`} onLoad={handleImageLoad} alt="" />
              <img className="houses" src={`${basePath}houses.png`} onLoad={handleImageLoad} alt="" />
              <img className="treehouse absolute" style={{ left: "220px", top: "10px", transformOrigin: "50% 150%" }} src={`${basePath}treehouse.png`} onLoad={handleImageLoad} alt="" />
            </div>

            {/* Chimneys */}
            <img className="chimney2 absolute" style={{ left: "430px", top: "120px", transformOrigin: "0% 90%" }} src={`${basePath}chimney2.png`} onLoad={handleImageLoad} alt="" />
            <img className="chimney1 absolute" style={{ left: "420px", top: "90px", transformOrigin: "-10% 90%" }} src={`${basePath}chimney1.png`} onLoad={handleImageLoad} alt="" />

            {/* Wing */}
            <img className="wing absolute" style={{ left: "420px", top: "370px", transformOrigin: "0% 50%" }} src={`${basePath}wing.png`} onLoad={handleImageLoad} alt="" />

            {/* Antenna */}
            <img className="antenna absolute" style={{ left: "-100px", top: "90px", transformOrigin: "100% 65%" }} src={`${basePath}antenna.png`} onLoad={handleImageLoad} alt="" />

            {/* Mound group */}
            <div className="mound-group absolute" style={{ left: "115px", top: "110px", transformOrigin: "110px 220px", transformStyle: "preserve-3d" }}>
              <img className="point3 absolute" style={{ left: "125px", top: "-13px", transformOrigin: "50% 400%" }} src={`${basePath}point3.png`} onLoad={handleImageLoad} alt="" />
              <img className="point2 absolute" style={{ left: "50px", top: "-22px", transformOrigin: "120% 200%" }} src={`${basePath}point2.png`} onLoad={handleImageLoad} alt="" />
              <img className="point1 absolute" style={{ left: "4px", top: "55px", transformOrigin: "150% 150%" }} src={`${basePath}point1.png`} onLoad={handleImageLoad} alt="" />
              <img className="mound" src={`${basePath}mound.png`} onLoad={handleImageLoad} alt="" />
            </div>

            {/* Wind */}
            <img className="wind absolute" style={{ left: "400px", top: "260px", transformOrigin: "0% 90%" }} src={`${basePath}wind.png`} onLoad={handleImageLoad} alt="" />

            {/* Cannon */}
            <img className="cannon absolute" style={{ left: "30px", top: "460px", transformOrigin: "100% 60%" }} src={`${basePath}cannon.png`} onLoad={handleImageLoad} alt="" />

            {/* Main */}
            <img className="main absolute" style={{ left: "80px", top: "230px", transformOrigin: "50% 50%" }} src={`${basePath}main.png`} onLoad={handleImageLoad} alt="" />

            {/* Back left leg */}
            <div className="blleg absolute" style={{ left: "410px", top: "615px", transformOrigin: "10px 15px", transformStyle: "preserve-3d" }}>
              <div className="blbottom-group absolute" style={{ left: "0px", top: "60px", transformOrigin: "10px 0px", transformStyle: "preserve-3d" }}>
                <img className="blfoot absolute" style={{ left: "-19px", top: "68px", transformOrigin: "56% 44%" }} src={`${basePath}blfoot.png`} onLoad={handleImageLoad} alt="" />
                <img className="blbottom" src={`${basePath}blbottom.png`} onLoad={handleImageLoad} alt="" />
              </div>
              <img className="bltop" src={`${basePath}bltop.png`} onLoad={handleImageLoad} alt="" />
            </div>

            {/* BL Cover */}
            <img className="blcover absolute" style={{ left: "360px", top: "573px" }} src={`${basePath}blcover.png`} onLoad={handleImageLoad} alt="" />

            {/* Knob */}
            <img className="knob absolute" style={{ left: "214px", top: "524px", transformOrigin: "30% 63%" }} src={`${basePath}knob.png`} onLoad={handleImageLoad} alt="" />

            {/* Tele */}
            <img className="tele absolute" style={{ left: "90px", top: "430px", transformOrigin: "90% 50%" }} src={`${basePath}tele.png`} onLoad={handleImageLoad} alt="" />

            {/* Tele cover */}
            <img className="telecover absolute" style={{ left: "161px", top: "399px" }} src={`${basePath}telecover.png`} onLoad={handleImageLoad} alt="" />

            {/* Front left leg */}
            <div className="flleg absolute" style={{ left: "250px", top: "615px", transformOrigin: "10px 15px", transformStyle: "preserve-3d" }}>
              <div className="flbottom-group absolute" style={{ left: "0px", top: "60px", transformOrigin: "10px 0px", transformStyle: "preserve-3d" }}>
                <img className="flfoot absolute" style={{ left: "-19px", top: "68px", transformOrigin: "56% 44%" }} src={`${basePath}flfoot.png`} onLoad={handleImageLoad} alt="" />
                <img className="flbottom" src={`${basePath}flbottom.png`} onLoad={handleImageLoad} alt="" />
              </div>
              <img className="fltop" src={`${basePath}fltop.png`} onLoad={handleImageLoad} alt="" />
            </div>

            {/* FL Cover */}
            <img className="flcover absolute" style={{ left: "244px", top: "567px" }} src={`${basePath}flcover.png`} onLoad={handleImageLoad} alt="" />
          </div>
        </div>

        {/* Foreground */}
        <img className="foreground absolute" style={{ bottom: 0, left: 0, width: "100%" }} src={`${basePath}foreground.png`} onLoad={handleImageLoad} alt="" />
      </div>
    </div>
  );
};

export default GhibliCastle;
