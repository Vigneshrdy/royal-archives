import { useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CardShowcase = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card) => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0) scale(1)';
        });
      }
    });

    return () => {
      cards.forEach((card) => {
        if (card) {
          card.removeEventListener('mouseenter', () => {});
          card.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);

  const changeCardStyle = (cardIndex: number, hue: number, invert: number = 0) => {
    const card = cardsRef.current[cardIndex];
    if (card) {
      const img = card.querySelector('img');
      if (img) {
        img.style.filter = `hue-rotate(${hue}deg) invert(${invert})`;
      }
    }
  };

  const cardData = [
    {
      title: "LeafKey",
      description: "A keyboard that brings the tranquility of the forest to your fingertips.",
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=500&fit=crop",
      colors: ["#7da072", "#5a8a4f", "#8cb580"],
      bgColor: "hsl(var(--primary))",
      textColor: "hsl(var(--primary-foreground))"
    },
    {
      title: "TopoKey",
      description: "Custom illuminated keyboard with neon topology mapped out in every key.",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=500&fit=crop",
      colors: ["#2e2e2e", "#1a1a1a", "#404040"],
      bgColor: "hsl(var(--card))",
      textColor: "hsl(var(--card-foreground))"
    },
    {
      title: "PandaKey",
      description: "Panda, panda, panda, panda, panda, panda... panda",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=500&fit=crop",
      colors: ["#ffffff", "#f0f0f0", "#e0e0e0"],
      bgColor: "hsl(var(--secondary))",
      textColor: "hsl(var(--secondary-foreground))"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              3D Card Showcase
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Interactive 3D cards with hover animations and customizable styles
            </p>
          </div>

          <div className="flex flex-row flex-wrap justify-center items-center gap-6 md:gap-12">
            {cardData.map((card, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`
                  relative w-[clamp(200px,22vw,300px)] h-[364px] min-w-[200px]
                  rounded-lg cursor-pointer transition-all duration-300 ease-out
                  flex flex-col justify-end items-center
                  ${index === 2 ? 'hidden md:flex' : ''}
                  ${index === 0 ? 'hidden sm:flex' : ''}
                `}
                style={{
                  background: card.bgColor,
                  boxShadow: `
                    -8px -8px 24px 0 hsl(var(--background) / 0.8),
                    1px 1px 3px 0px hsl(var(--foreground) / 0.1),
                    12px 42px 24px -8px hsl(var(--foreground) / 0.05),
                    10px 24px 42px 0 hsl(var(--foreground) / 0.05),
                    1px 4px 12px 0 hsl(var(--foreground) / 0.1)
                  `
                }}
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-all duration-400"
                  />
                </div>

                {/* Gradient Overlay */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-4/5 rounded-b-lg pointer-events-none"
                  style={{
                    background: `linear-gradient(transparent, ${card.bgColor} 80%)`
                  }}
                />

                {/* Gradient Blur Effect */}
                <div className="gradient-blur absolute z-10 h-full inset-x-0 bottom-0 pointer-events-none">
                  <div className="blur-layer-1" />
                  <div className="blur-layer-2" />
                  <div className="blur-layer-3" />
                  <div className="blur-layer-4" />
                  <div className="blur-layer-5" />
                  <div className="blur-layer-6" />
                </div>

                {/* Content */}
                <div className="relative z-20 p-4 pb-6 w-full">
                  <h2 
                    className="text-xl font-bold mb-2"
                    style={{ color: card.textColor }}
                  >
                    {card.title}
                  </h2>
                  <p 
                    className="text-sm font-medium mb-4 leading-tight"
                    style={{ color: card.textColor, opacity: 0.9 }}
                  >
                    {card.description}
                  </p>

                  {/* Color Options */}
                  <div className="absolute bottom-2 right-3 flex gap-1">
                    {card.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        onClick={() => changeCardStyle(index, colorIndex * 60, colorIndex === 2 ? 1 : 0)}
                        className="w-6 h-4 rounded cursor-pointer border border-border/50 hover:border-foreground/50 transition-colors"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        .gradient-blur > div,
        .gradient-blur::before,
        .gradient-blur::after {
          position: absolute;
          inset: 0;
        }

        .gradient-blur::before {
          content: "";
          z-index: 1;
          backdrop-filter: blur(0.5px);
          mask: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%);
        }

        .blur-layer-1 {
          z-index: 2;
          backdrop-filter: blur(1px);
          mask: linear-gradient(to bottom, rgba(0,0,0,0) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,0) 50%);
        }

        .blur-layer-2 {
          z-index: 3;
          backdrop-filter: blur(2px);
          mask: linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 62.5%);
        }

        .blur-layer-3 {
          z-index: 4;
          backdrop-filter: blur(4px);
          mask: linear-gradient(to bottom, rgba(0,0,0,0) 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,0) 75%);
        }

        .blur-layer-4 {
          z-index: 5;
          backdrop-filter: blur(8px);
          mask: linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 87.5%);
        }

        .blur-layer-5 {
          z-index: 6;
          backdrop-filter: blur(16px);
          mask: linear-gradient(to bottom, rgba(0,0,0,0) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%);
        }

        .blur-layer-6 {
          z-index: 7;
          backdrop-filter: blur(32px);
          mask: linear-gradient(to bottom, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,1) 100%);
        }

        .gradient-blur::after {
          content: "";
          z-index: 8;
          backdrop-filter: blur(64px);
          mask: linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%);
        }
      `}</style>
    </div>
  );
};

export default CardShowcase;
