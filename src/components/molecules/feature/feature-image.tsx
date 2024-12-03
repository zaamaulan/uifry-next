import { EllipseGradient, EllipseIcon } from "@/components/atoms/icon";
import Image from "next/image";

interface FeatureImageProps {
  src: string;
  alt: string;
}

export const FeatureImage = ({ src, alt }: FeatureImageProps) => (
  <div className="relative grid place-items-center max-lg:hidden">
    <EllipseGradient className="absolute -z-20 -translate-x-12 -translate-y-10 rotate-180 scale-125" />
    <EllipseIcon className="absolute -z-10" />
    <Image src={src} alt={alt} width={249.25} height={504.32} />
  </div>
);
