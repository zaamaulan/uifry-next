import { FeatureItem } from "./feature-item";

const features = [
  {
    icon: "/icons/star-05.svg",
    title: "Budgeting Interval",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    icon: "/icons/cube-02.svg",
    title: "Budgeting Interval",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    icon: "/icons/cube-04.svg",
    title: "Budgeting Interval",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
];

export const FeatureList = () => (
  <div className="space-y-8">
    {features.map((feature, index) => (
      <FeatureItem
        key={index}
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
      />
    ))}
  </div>
);
