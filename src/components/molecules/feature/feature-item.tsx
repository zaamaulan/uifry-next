import Image from "next/image";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <div className="space-y-3">
    <div className="flex items-center gap-x-2">
      <Image src={icon} alt={title} width={24} height={24} />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-lg font-medium text-black/50">{description}</p>
  </div>
);
