import React, { ComponentType } from "react";
import { IconWithText } from "./icon-with-text";

interface AdvantageItemProps {
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export const AdvantageItem = ({
  icon,
  title,
  description,
}: AdvantageItemProps) => (
  <div className="space-y-6">
    <IconWithText Icon={icon} text={title} />
    <p className="text-lg font-medium text-black/50">{description}</p>
  </div>
);
