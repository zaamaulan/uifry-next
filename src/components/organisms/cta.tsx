import Image from "next/image";
import { EllipseGradient } from "../atoms/icon";
import { Button } from "../ui/button";

export const CTA = () => {
  return (
    <section className="container relative mx-auto">
      <EllipseGradient className="absolute -left-60 -top-20 -z-10 max-md:hidden" />
      <section className="grid place-items-center rounded-lg bg-black py-4 max-md:p-10 md:grid-cols-2 md:pl-10">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold capitalize text-white">
            ready to get started?
          </h2>
          <p className="text-lg capitalize text-white">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <Button variant="secondary" className="capitalize">
            download app
          </Button>
        </div>
        <Image
          src="/images/cta.png"
          alt="cta"
          width={591}
          height={459.91}
          className="place-self-end max-md:hidden"
        />
      </section>
    </section>
  );
};
