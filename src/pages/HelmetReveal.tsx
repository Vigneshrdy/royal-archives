import { useState } from "react";

const HelmetReveal = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-background">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            <p className="text-muted-foreground">Loading 3D Model...</p>
          </div>
        </div>
      )}
      
      {/* Sketchfab Embed */}
      <iframe
        title="Lady Justice Sculpture"
        className="w-full h-full border-0"
        src="https://sketchfab.com/models/3f0a0054b1714a8490f37c58dc847a01/embed?autostart=1&internal=1&tracking=0&ui_ar=0&ui_infos=0&ui_snapshots=1&ui_stop=0&ui_theatre=1&ui_watermark=0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        onLoad={() => setIsLoading(false)}
      />
      
      {/* Overlay UI */}
      <div className="absolute top-6 left-6 z-10">
        <a href="/" className="flex items-center gap-2 text-foreground bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-background/90 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back</span>
        </a>
      </div>
      
      <div className="absolute bottom-6 left-6 z-10 bg-background/80 backdrop-blur-sm p-4 rounded-lg">
        <h1 className="font-serif text-2xl font-bold mb-1 text-foreground">Lady Justice</h1>
        <p className="text-muted-foreground text-sm">Interactive 3D Sculpture</p>
      </div>
    </div>
  );
};

export default HelmetReveal;
