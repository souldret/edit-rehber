"use client";

import { useState, useEffect, useRef } from "react";

interface VideoCardProps {
  src: string;
  title: string;
  caption: string;
}

// Extract YouTube video ID for thumbnail
function getYouTubeId(src: string): string | null {
  const match = src.match(/embed\/([^?&]+)/);
  return match ? match[1] : null;
}

export default function VideoCard({ src, title, caption }: VideoCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoId = getYouTubeId(src);

  // Intersection Observer — only load iframe when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" } // preload 200px before viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-wrapper" ref={containerRef}>
      <div className="video-container">
        {isVisible ? (
          <>
            {!isLoaded && videoId && (
              <div
                className="video-placeholder"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg) center/cover no-repeat`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-hidden="true"
              >
                <div style={{
                  width: 60, height: 60,
                  background: "rgba(0,0,0,0.7)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "10px 0 10px 20px", borderColor: "transparent transparent transparent #fff", marginLeft: 4 }} />
                </div>
              </div>
            )}
            <iframe
              src={`${src}?loading=lazy`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              style={{
                position: "absolute",
                top: 0, left: 0,
                width: "100%", height: "100%",
                border: "none",
                opacity: isLoaded ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            />
          </>
        ) : (
          // Placeholder while not visible — prevents CLS
          videoId ? (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg) center/cover no-repeat`,
                borderRadius: "inherit",
              }}
              aria-label={title}
            />
          ) : (
            <div style={{ position: "absolute", inset: 0, background: "var(--bg-3)" }} />
          )
        )}
      </div>
      <p className="video-caption">{caption}</p>
    </div>
  );
}