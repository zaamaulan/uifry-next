import Image from "next/image";

interface HeroImageProps {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export const HeroImage = ({
  alt,
  height,
  src,
  width,
  className,
  priority,
}: HeroImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
};
