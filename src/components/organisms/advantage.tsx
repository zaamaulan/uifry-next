import { cn } from "@/lib/utils";
import { BellIcon, StarIcon } from "../atoms/icon";
import { AdvantageHeader } from "../molecules/advantage/advantage-header";
import { AdvantageImage } from "../molecules/advantage/advantage-image";
import { AdvantageItem } from "../molecules/advantage/advantage-item";

const advantagesData = [
  {
    imageSrc: "/images/mock-phone.png",
    imageAlt: "mock-phone",
    icon: BellIcon,
    title: "clever notifications",
    description:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
  },
  {
    imageSrc: "/images/mock-phone-2.png",
    imageAlt: "mock-phone",
    icon: StarIcon,
    title: "fully customizable",
    description:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
  },
];

export const Advantage = () => {
  return (
    <section className="flex flex-col gap-y-20">
      {advantagesData.map((advantage, index) => (
        <section
          key={index}
          className="container mx-auto grid place-items-center gap-10 lg:grid-cols-2"
        >
          <AdvantageImage src={advantage.imageSrc} alt={advantage.imageAlt} />
          <article
            className={cn(
              "flex flex-col gap-y-8",
              index === 0 && "-order-last",
            )}
          >
            {index === 0 && <AdvantageHeader />}
            <div className="space-y-8">
              <AdvantageItem
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
              />
            </div>
          </article>
        </section>
      ))}
    </section>
  );
};
