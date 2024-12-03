import { EllipseGradient, EllipseIcon } from "../atoms/icon";
import { HeroButton } from "../molecules/hero/hero-button";
import { HeroImage } from "../molecules/hero/hero-image";
import { HeroText } from "../molecules/hero/hero-text";

export const Hero = () => {
  return (
    <section className="container mx-auto mt-10 grid place-items-center gap-10 md:grid-cols-2">
      <div className="space-y-6">
        <HeroText />
        <HeroButton />
        <HeroImage
          src="/images/ribbon.png"
          alt="ribbon"
          width={569}
          height={357.74}
          priority
          className="max-md:hidden"
        />
      </div>
      <div className="relative max-md:hidden">
        <EllipseGradient className="absolute -z-20 bottom-4 scale-150 translate-x-10" />
        <EllipseIcon className="absolute -z-10 -translate-y-8 translate-x-24 scale-110" />
        <HeroImage
          src="/images/hero.png"
          alt="hero"
          width={720}
          height={696.65}
          priority
        />
      </div>
    </section>
  );
};
