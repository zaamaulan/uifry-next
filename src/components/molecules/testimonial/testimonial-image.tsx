import Image from "next/image";

interface TestimonialImageProps {
  src: string;
  alt: string;
}

export const TestimonialImage = ({ src, alt }: TestimonialImageProps) => (
  <Image src={src} alt={alt} width={713} height={713} />
);
