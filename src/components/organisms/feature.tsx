import { FeatureHeader } from "../molecules/feature/feature-header";
import { FeatureImage } from "../molecules/feature/feature-image";
import { FeatureList } from "../molecules/feature/feature-list";

export const Feature = () => {
  return (
    <section className="container mx-auto grid place-items-center gap-10 lg:grid-cols-2">
      <FeatureImage src="/images/mock-phone-2.png" alt="mock-phone" />

      <article className="flex flex-col gap-y-8">
        <FeatureHeader />
        <FeatureList />
      </article>
    </section>
  );
};
