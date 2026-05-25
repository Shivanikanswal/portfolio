"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
          dragConstraints={{ left: 0, right: 0 }}
          animate={{ x: `-${index * 100}%` }}
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
          whileHover={{ scale: 1.02 }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full">
              <Image
                src={img}
                alt={`project-image-${i}`}
                width={720}
                height={600}
                className="w-full h-auto rounded-xl"
                draggable={false}
                objectFit="cover"
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
            className={`h-1 w-1 rounded-full transition-all ${
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
