"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface TestimonialCarouselProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export const TestimonialCarousel = ({
  images,
  currentIndex,
  onSelect,
}: TestimonialCarouselProps) => {
  return (
    <div className="flex items-center gap-x-2">
      {images.map((image, index) => {
        const isSelected = currentIndex === index;

        return (
          <motion.div
            key={index}
            onHoverStart={() => onSelect(index)}
            initial={{ opacity: 0.7, scale: 0.9 }}
            animate={{
              opacity: isSelected ? 1 : null,
              scale: isSelected ? 1.1 : null,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="relative size-12 flex-none rounded-full"
          >
            <Image src={image.src} alt={image.alt} fill />
          </motion.div>
        );
      })}
    </div>
  );
};
