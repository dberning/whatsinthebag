import { useState, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  width?: string;
  height?: string;
  className?: string;
}

export default function VideoPlayer({ 
  src, 
  width = "320px", 
  height = "240px", 
  className = "" 
}: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.error('Video error:', e);
    setIsLoading(false);
    setHasError(true);
  };

  const handleRetry = () => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded-t-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-gray-600 text-sm">Loading video...</p>
          </div>
        </div>
      )}
      
      {hasError ? (
        <div className="bg-gray-100 flex items-center justify-center rounded-t-lg" style={{ width, height }}>
          <div className="text-center">
            <p className="text-gray-600 mb-2">Video unavailable</p>
            <div className="space-y-2">
              <button
                onClick={handleRetry}
                className="text-blue-600 hover:text-blue-800 underline text-sm block"
              >
                Try again
              </button>
              <a 
                href={src} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline text-sm block"
              >
                Download video
              </a>
            </div>
          </div>
        </div>
      ) : (
        <video
          ref={videoRef}
          width={width}
          height={height}
          controls
          className="rounded-t-lg"
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          onError={handleError}
          preload="metadata"
          crossOrigin="anonymous"
        >
          <source src={src} type="video/quicktime" />
          <source src={src} type="video/mp4" />
          <source src={src} type="video/webm" />
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
} 