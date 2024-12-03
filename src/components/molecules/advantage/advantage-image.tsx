import { EllipseGradient, EllipseIcon } from "@/components/atoms/icon";
import Image from "next/image";

interface AdvantageImageProps {
  src: string;
  alt: string;
}

export const AdvantageImage = ({ src, alt }: AdvantageImageProps) => (
  <div className="relative grid place-items-center max-lg:hidden">
    <EllipseGradient className="absolute -z-20 translate-y-10" />
    <EllipseIcon className="absolute -z-10" />
    <Image src={src} alt={alt} width={249.25} height={504.32} />
  </div>
);
