import { ComponentType } from "react";

interface IconWithTextProps {
  text: string;
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const IconWithText = ({ Icon, text }: IconWithTextProps) => (
  <div className="flex items-center gap-x-4">
    <div className="grid size-12 place-items-center rounded-full bg-carnation-400">
      <Icon className="text-white" />
    </div>
    <h3 className="text-[1.75rem] font-semibold capitalize">{text}</h3>
  </div>
);
