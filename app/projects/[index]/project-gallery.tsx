"use client";

import Image from "next/image";
import { useState } from "react";
import "./responsive-gallery.css";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [fullscreenIdx, setFullscreenIdx] = useState<number | null>(null);

  // Gallery: main image + 4 placeholders, or use project.images if available
  const galleryImages = images?.length
    ? images
    : [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500&2",
        "/placeholder.svg?height=300&width=500&3",
        "/placeholder.svg?height=300&width=500&4",
        "/placeholder.svg?height=300&width=500&5",
      ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl mb-10">
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-xl group hover:scale-105 transition-transform duration-300 cursor-pointer responsive-gallery-image"
            onClick={() => setFullscreenIdx(idx)}
            style={{ minHeight: 0, minWidth: 0, height: "320px" }}
          >
            <Image
              src={src}
              alt={`Project image ${idx + 1}`}
              width={1280}
              height={720}
              className="object-cover group-hover:brightness-90 transition-all duration-300"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setFullscreenIdx(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              className="absolute top-8 right-8 text-white text-3xl font-bold z-10 bg-black/60 rounded-full px-4 py-2 hover:bg-black/80 transition"
              onClick={(e) => {
                e.stopPropagation();
                setFullscreenIdx(null);
              }}
              aria-label="Close fullscreen"
            >
              &times;
            </button>
            <div className="relative w-[90vw] h-[80vh] max-w-5xl max-h-[80vh]">
              <Image
                src={galleryImages[fullscreenIdx]}
                alt={`Project image fullscreen ${fullscreenIdx + 1}`}
                width={1280}
                height={720}
                className="object-contain rounded-xl shadow-2xl"
                priority
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
