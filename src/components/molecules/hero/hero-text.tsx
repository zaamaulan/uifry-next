import { EllipseGradient } from "@/components/atoms/icon";

export const HeroText = () => {
  return (
    <hgroup className="relative space-y-6">
      <EllipseGradient className="absolute -z-20 -top-full translate-x-14 max-md:hidden" />
      <h1 className="text-[4rem] font-extrabold capitalize leading-none">
        make the best financial decisions
      </h1>
      <p className="text-lg font-medium capitalize text-black/50">
        Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
        faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
      </p>
    </hgroup>
  );
};
