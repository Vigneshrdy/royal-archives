import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const GhibliCastle = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const castleRef = useRef<HTMLDivElement>(null);
  const [mouseControl, setMouseControl] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = 43;

  useEffect(() => {
    if (loadedImages >= totalImages) {
      setLoading(false);
    }
  }, [loadedImages]);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (!mouseControl || !containerRef.current || !castleRef.current) return;

    const container = containerRef.current;
    const castle = castleRef.current;
    let mouseX = 0;
    let mouseDown = false;

    const handleMouseDown = (e: MouseEvent) => {
      mouseDown = true;
      mouseX = e.pageX;
      container.classList.add("active");
    };

    const handleMouseUp = () => {
      mouseDown = false;
      container.classList.remove("active");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseDown) return;
      const diff = e.pageX - mouseX;
      const currentTransform = castle.style.transform || "translate(-50%, -70%) rotateZ(9deg)";
      const match = currentTransform.match(/rotateZ\(([-\d.]+)deg\)/);
      const currentAngle = match ? parseFloat(match[1]) : 9;
      const newAngle = Math.max(-20, Math.min(30, currentAngle + diff * 0.1));
      castle.style.transform = `translate(-50%, -70%) rotateZ(${newAngle}deg)`;
      mouseX = e.pageX;
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseControl]);

  // Animation loop
  useEffect(() => {
    if (loading) return;

    const castle = castleRef.current;
    if (!castle) return;

    let frame = 0;
    let animationId: number;

    const animate = () => {
      frame++;
      const time = frame * 0.02;

      // Leg animations
      const legs = {
        brleg: castle.querySelector(".brleg") as HTMLElement,
        frleg: castle.querySelector(".frleg") as HTMLElement,
        blleg: castle.querySelector(".blleg") as HTMLElement,
        flleg: castle.querySelector(".flleg") as HTMLElement,
      };

      if (legs.brleg) legs.brleg.style.transform = `rotateZ(${Math.sin(time) * 8}deg)`;
      if (legs.frleg) legs.frleg.style.transform = `rotateZ(${Math.sin(time + 1) * 8}deg)`;
      if (legs.blleg) legs.blleg.style.transform = `rotateZ(${Math.sin(time + 2) * 8}deg)`;
      if (legs.flleg) legs.flleg.style.transform = `rotateZ(${Math.sin(time + 3) * 8}deg)`;

      // Foot animations
      const feet = castle.querySelectorAll(".brfoot, .frfoot, .blfoot, .flfoot") as NodeListOf<HTMLElement>;
      feet.forEach((foot, i) => {
        foot.style.transform = `rotateZ(${Math.sin(time + i) * -12}deg)`;
      });

      // Bottom group animations
      const bottomGroups = castle.querySelectorAll(".blbottom-group, .flbottom-group") as NodeListOf<HTMLElement>;
      bottomGroups.forEach((group, i) => {
        group.style.transform = `rotateZ(${Math.sin(time + i * 2) * 5}deg)`;
      });

      // Wing animation
      const wing = castle.querySelector(".wing") as HTMLElement;
      if (wing) wing.style.transform = `rotateZ(${Math.sin(time * 2) * 15}deg)`;

      // Antenna animation
      const antenna = castle.querySelector(".antenna") as HTMLElement;
      if (antenna) antenna.style.transform = `rotateZ(${Math.sin(time * 1.5) * 8}deg)`;

      // Chimney animations
      const chimneys = castle.querySelectorAll(".chimney1, .chimney2, .chimney3") as NodeListOf<HTMLElement>;
      chimneys.forEach((chimney, i) => {
        chimney.style.transform = `rotateZ(${Math.sin(time + i) * 3}deg)`;
      });

      // Houses group sway
      const housesGroup = castle.querySelector(".houses-group") as HTMLElement;
      if (housesGroup) housesGroup.style.transform = `rotateZ(${1 + Math.sin(time * 0.5) * 2}deg)`;

      // Mound group sway
      const moundGroup = castle.querySelector(".mound-group") as HTMLElement;
      if (moundGroup) moundGroup.style.transform = `rotateZ(${Math.sin(time * 0.5) * 1.5}deg)`;

      // Points animation
      const points = castle.querySelectorAll(".point1, .point2, .point3, .point4, .point5, .point6") as NodeListOf<HTMLElement>;
      points.forEach((point, i) => {
        point.style.transform = `rotateZ(${Math.sin(time + i * 0.5) * 4}deg)`;
      });

      // Knob animation
      const knob = castle.querySelector(".knob") as HTMLElement;
      if (knob) knob.style.transform = `rotateZ(${Math.sin(time * 3) * 10}deg)`;

      // Tele animation
      const tele = castle.querySelector(".tele") as HTMLElement;
      if (tele) tele.style.transform = `rotateZ(${Math.sin(time * 0.8) * 5}deg)`;

      // Wind animation
      const wind = castle.querySelector(".wind") as HTMLElement;
      if (wind) wind.style.transform = `rotateZ(${Math.sin(time * 4) * 3}deg)`;

      // Cannon animation
      const cannon = castle.querySelector(".cannon") as HTMLElement;
      if (cannon) cannon.style.transform = `rotateZ(${Math.sin(time * 0.3) * 2}deg)`;

      // Treehouse animation
      const treehouse = castle.querySelector(".treehouse") as HTMLElement;
      if (treehouse) treehouse.style.transform = `rotateZ(${Math.sin(time * 0.7) * 3}deg)`;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [loading]);

  // Cloud animation
  useEffect(() => {
    if (loading) return;

    let animationId: number;
    let cloudPos = 0;

    const animateClouds = () => {
      cloudPos += 0.02;

      const clouds = document.querySelectorAll(".cloud1, .cloud2, .cloud3, .cloud4, .cloud5, .cloud-bg, .cloud-bg2") as NodeListOf<HTMLElement>;
      clouds.forEach((cloud, i) => {
        const speed = 0.1 + i * 0.02;
        const currentLeft = parseFloat(cloud.style.left || "0") || (i % 2 === 0 ? -30 : 40);
        let newLeft = currentLeft + speed * 0.1;
        if (newLeft > 150) newLeft = -80;
        cloud.style.left = `${newLeft}%`;
      });

      const shadows = document.querySelectorAll(".cloud-shadow1, .cloud-shadow2, .cloud-shadow3") as NodeListOf<HTMLElement>;
      shadows.forEach((shadow, i) => {
        const speed = 0.1 + i * 0.02;
        const currentLeft = parseFloat(shadow.style.left || "0") || (i % 2 === 0 ? -30 : 36);
        let newLeft = currentLeft + speed * 0.1;
        if (newLeft > 150) newLeft = -80;
        shadow.style.left = `${newLeft}%`;
      });

      animationId = requestAnimationFrame(animateClouds);
    };

    animateClouds();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [loading]);

  const baseUrl = "https://assets.codepen.io/721952/";

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
        <div className="absolute inset-0 bg-white flex items-center justify-center z-50">
          <span className="text-xs uppercase tracking-widest">
            Loading... {Math.round((loadedImages / totalImages) * 100)}%
          </span>
        </div>
      )}

      {/* Container */}
      <div
        ref={containerRef}
        className="absolute w-full bottom-0 left-0"
        style={{ paddingTop: "62.5%" }}
      >
        {/* Background clouds */}
        <img className="cloud-bg absolute" style={{ bottom: "17%", width: "80%", right: "100%" }} src={`${baseUrl}cloud-bg.svg`} onLoad={handleImageLoad} alt="" />
        <img className="cloud-bg2 absolute" style={{ bottom: "17%", width: "80%", right: "100%" }} src={`${baseUrl}cloud-bg.svg`} onLoad={handleImageLoad} alt="" />

        {/* Cloud shadows */}
        <img className="cloud-shadow1 absolute" style={{ bottom: "43%", right: "100%", width: "80%", transform: "rotate(5deg)" }} src={`${baseUrl}cloud-shadow.svg`} onLoad={handleImageLoad} alt="" />
        <img className="cloud-shadow2 absolute" style={{ bottom: "12%", left: "36%", width: "80%", transform: "rotate(5deg)" }} src={`${baseUrl}cloud-shadow.svg`} onLoad={handleImageLoad} alt="" />
        <img className="cloud-shadow3 absolute" style={{ bottom: "31%", left: "-30%", width: "80%", transform: "rotate(5deg)" }} src={`${baseUrl}cloud-shadow.svg`} onLoad={handleImageLoad} alt="" />

        {/* Clouds */}
        <img className="cloud1 absolute" style={{ bottom: "30%", right: "100%", width: "80%" }} src={`${baseUrl}cloud.svg`} onLoad={handleImageLoad} alt="" />
        <img className="cloud2 absolute" style={{ bottom: "46%", left: "-29%", width: "80%" }} src={`${baseUrl}cloud.svg`} onLoad={handleImageLoad} alt="" />
        <img className="cloud3 absolute" style={{ bottom: "38%", left: "17%", width: "80%" }} src={`${baseUrl}cloud.svg`} onLoad={handleImageLoad} alt="" />
        <img className="cloud4 absolute" style={{ bottom: "18%", left: "-18%", width: "80%" }} src={`${baseUrl}cloud.svg`} onLoad={handleImageLoad} alt="" />
        <img className="cloud5 absolute" style={{ bottom: "8%", left: "40%", width: "80%" }} src={`${baseUrl}cloud.svg`} onLoad={handleImageLoad} alt="" />

        {/* Background */}
        <img className="background absolute" style={{ bottom: "25.5%", left: 0, width: "100%" }} src={`${baseUrl}background.svg`} onLoad={handleImageLoad} alt="" />

        {/* Castle container */}
        <div className="castle-container absolute" style={{ left: "100%", bottom: "0%" }}>
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
              <img src={`${baseUrl}brleg.svg`} onLoad={handleImageLoad} alt="" />
              <img className="brfoot absolute" style={{ left: "-18px", top: "82px", transformOrigin: "56% 44%" }} src={`${baseUrl}brfoot.svg`} onLoad={handleImageLoad} alt="" />
            </div>

            {/* Front right leg */}
            <div className="frleg absolute" style={{ left: "240px", top: "653px", transformOrigin: "8px -10px", transformStyle: "preserve-3d" }}>
              <img src={`${baseUrl}frleg.svg`} onLoad={handleImageLoad} alt="" />
              <img className="frfoot absolute" style={{ left: "-18px", top: "51px", transformOrigin: "56% 44%" }} src={`${baseUrl}frfoot.svg`} onLoad={handleImageLoad} alt="" />
            </div>

            {/* Chimney 3 */}
            <img className="chimney3 absolute" style={{ left: "400px", top: "30px", transformOrigin: "45% 120%" }} src={`${baseUrl}chimney3.svg`} onLoad={handleImageLoad} alt="" />

            {/* Houses group */}
            <div className="houses-group absolute" style={{ left: "305px", top: "130px", transformOrigin: "-50px 300px", transformStyle: "preserve-3d" }}>
              <img className="point6 absolute" style={{ left: "84px", top: "19px", transformOrigin: "40% 120%" }} src={`${baseUrl}point6.svg`} onLoad={handleImageLoad} alt="" />
              <img className="point5 absolute" style={{ left: "70px", top: "-23px", transformOrigin: "-40% 200%" }} src={`${baseUrl}point5.svg`} onLoad={handleImageLoad} alt="" />
              <img className="point4 absolute" style={{ left: "40px", top: "-17px", transformOrigin: "0% 100%" }} src={`${baseUrl}point4.svg`} onLoad={handleImageLoad} alt="" />
              <img className="houses" src={`${baseUrl}houses.svg`} onLoad={handleImageLoad} alt="" />
              <img className="treehouse absolute" style={{ left: "220px", top: "10px", transformOrigin: "50% 150%" }} src={`${baseUrl}treehouse.svg`} onLoad={handleImageLoad} alt="" />
            </div>

            {/* Chimneys */}
            <img className="chimney2 absolute" style={{ left: "430px", top: "120px", transformOrigin: "0% 90%" }} src={`${baseUrl}chimney2.svg`} onLoad={handleImageLoad} alt="" />
            <img className="chimney1 absolute" style={{ left: "420px", top: "90px", transformOrigin: "-10% 90%" }} src={`${baseUrl}chimney1.svg`} onLoad={handleImageLoad} alt="" />

            {/* Wing */}
            <img className="wing absolute" style={{ left: "420px", top: "370px", transformOrigin: "0% 50%" }} src={`${baseUrl}wing.svg`} onLoad={handleImageLoad} alt="" />

            {/* Antenna */}
            <img className="antenna absolute" style={{ left: "-100px", top: "90px", transformOrigin: "100% 65%" }} src={`${baseUrl}antenna.svg`} onLoad={handleImageLoad} alt="" />

            {/* Mound group */}
            <div className="mound-group absolute" style={{ left: "115px", top: "110px", transformOrigin: "110px 220px", transformStyle: "preserve-3d" }}>
              <img className="point3 absolute" style={{ left: "125px", top: "-13px", transformOrigin: "50% 400%" }} src={`${baseUrl}point3.svg`} onLoad={handleImageLoad} alt="" />
              <img className="point2 absolute" style={{ left: "50px", top: "-22px", transformOrigin: "120% 200%" }} src={`${baseUrl}point2.svg`} onLoad={handleImageLoad} alt="" />
              <img className="point1 absolute" style={{ left: "4px", top: "55px", transformOrigin: "150% 150%" }} src={`${baseUrl}point1.svg`} onLoad={handleImageLoad} alt="" />
              <img className="mound" src={`${baseUrl}mound.svg`} onLoad={handleImageLoad} alt="" />
            </div>

            {/* Wind */}
            <img className="wind absolute" style={{ left: "400px", top: "260px", transformOrigin: "0% 90%" }} src={`${baseUrl}wind.svg`} onLoad={handleImageLoad} alt="" />

            {/* Cannon */}
            <img className="cannon absolute" style={{ left: "30px", top: "460px", transformOrigin: "100% 60%" }} src={`${baseUrl}cannon.svg`} onLoad={handleImageLoad} alt="" />

            {/* Main */}
            <img className="main absolute" style={{ left: "80px", top: "230px", transformOrigin: "50% 50%" }} src={`${baseUrl}main.svg`} onLoad={handleImageLoad} alt="" />

            {/* Back left leg */}
            <div className="blleg absolute" style={{ left: "410px", top: "615px", transformOrigin: "10px 15px", transformStyle: "preserve-3d" }}>
              <div className="blbottom-group absolute" style={{ left: "0px", top: "60px", transformOrigin: "10px 0px", transformStyle: "preserve-3d" }}>
                <img className="blfoot absolute" style={{ left: "-19px", top: "68px", transformOrigin: "56% 44%" }} src={`${baseUrl}blfoot.svg`} onLoad={handleImageLoad} alt="" />
                <img className="blbottom" src={`${baseUrl}blbottom.svg`} onLoad={handleImageLoad} alt="" />
              </div>
              <img className="bltop" src={`${baseUrl}bltop.svg`} onLoad={handleImageLoad} alt="" />
            </div>

            {/* BL Cover */}
            <img className="blcover absolute" style={{ left: "360px", top: "573px" }} src={`${baseUrl}blcover.svg`} onLoad={handleImageLoad} alt="" />

            {/* Knob */}
            <img className="knob absolute" style={{ left: "214px", top: "524px", transformOrigin: "30% 63%" }} src={`${baseUrl}knob.svg`} onLoad={handleImageLoad} alt="" />

            {/* Tele */}
            <img className="tele absolute" style={{ left: "90px", top: "430px", transformOrigin: "90% 50%" }} src={`${baseUrl}tele.svg`} onLoad={handleImageLoad} alt="" />

            {/* Tele cover */}
            <img className="telecover absolute" style={{ left: "161px", top: "399px" }} src={`${baseUrl}telecover.svg`} onLoad={handleImageLoad} alt="" />

            {/* Front left leg */}
            <div className="flleg absolute" style={{ left: "250px", top: "615px", transformOrigin: "10px 15px", transformStyle: "preserve-3d" }}>
              <div className="flbottom-group absolute" style={{ left: "0px", top: "60px", transformOrigin: "10px 0px", transformStyle: "preserve-3d" }}>
                <img className="flfoot absolute" style={{ left: "-19px", top: "68px", transformOrigin: "56% 44%" }} src={`${baseUrl}flfoot.svg`} onLoad={handleImageLoad} alt="" />
                <img className="flbottom" src={`${baseUrl}flbottom.svg`} onLoad={handleImageLoad} alt="" />
              </div>
              <img className="fltop" src={`${baseUrl}fltop.svg`} onLoad={handleImageLoad} alt="" />
            </div>

            {/* FL Cover */}
            <img className="flcover absolute" style={{ left: "244px", top: "567px" }} src={`${baseUrl}flcover.svg`} onLoad={handleImageLoad} alt="" />
          </div>
        </div>

        {/* Foreground */}
        <img className="foreground absolute" style={{ bottom: 0, left: 0, width: "100%" }} src={`${baseUrl}foreground.svg`} onLoad={handleImageLoad} alt="" />
      </div>
    </div>
  );
};

export default GhibliCastle;
