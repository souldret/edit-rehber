"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ImageZoomProps {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}

export default function ImageZoom({
  src,
  alt,
  caption,
  width = 800,
  height = 600,
}: ImageZoomProps) {
  const [zoomed, setZoomed] = useState(false);

  const close = useCallback(() => setZoomed(false), []);

  useEffect(() => {
    if (!zoomed) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [zoomed, close]);

  return (
    <>
      <div className="image-example">
        <button
          className="image-zoom-trigger"
          onClick={() => setZoomed(true)}
          aria-label={`Görseli büyüt: ${alt}`}
          title="Büyütmek için tıklayın"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <span className="image-zoom-hint">
            <i className="fas fa-search-plus" aria-hidden="true" />
          </span>
        </button>
        <p className="image-caption">{caption}</p>
      </div>

      {zoomed && (
        <div
          className="zoom-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Büyütülmüş görsel"
        >
          <div className="zoom-modal" onClick={(e) => e.stopPropagation()}>
            <button className="zoom-close" onClick={close} aria-label="Kapat">
              <i className="fas fa-times" aria-hidden="true" />
            </button>
            <div className="zoom-image-wrap">
              <Image
                src={src}
                alt={alt}
                width={width * 2}
                height={height * 2}
                style={{ maxWidth: "90vw", maxHeight: "85vh", width: "auto", height: "auto", objectFit: "contain" }}
                priority
              />
            </div>
            {caption && <p className="zoom-caption">{caption}</p>}
          </div>
        </div>
      )}
    </>
  );
}