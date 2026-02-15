"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SLIDE_WIDTH = 720;
const AUTO_DELAY = 2000;

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, AUTO_DELAY);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  return (
    <div
      className="w-full max-w-180"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      {/* Carousel */}
      <div className="overflow-hidden rounded-xl">
        <motion.div
          drag="x"
          dragConstraints={{
            left: -SLIDE_WIDTH * (images.length - 1),
            right: 0,
          }}
          animate={{ x: -index * SLIDE_WIDTH }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex"
          onDragStart={stopAutoScroll}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100 && index < images.length - 1) {
              setIndex(index + 1);
            } else if (info.offset.x > 100 && index > 0) {
              setIndex(index - 1);
            }
            startAutoScroll();
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-180">
              <Image
                src={img}
                alt={`project-image-${i}`}
                width={720}
                height={800}
                className="h-90 w-full rounded-xl object-cover"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              startAutoScroll();
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              index === i
                ? "w-6 bg-neutral-800"
                : "bg-neutral-300 hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
