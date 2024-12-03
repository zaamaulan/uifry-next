import * as motion from "motion/react-client";
import Image from "next/image";

interface TestimonialAvatarProps {
  src: string;
  alt: string;
  size: number;
  className?: string;
}

export const TestimonialAvatar = ({
  src,
  alt,
  size,
  className = "",
}: TestimonialAvatarProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ scale: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={`rounded-full border-2 border-black ${className}`}
      />
    </motion.div>
  );
};
