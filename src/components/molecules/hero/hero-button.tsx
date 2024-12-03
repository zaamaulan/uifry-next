import { ArrowRightIcon, PlayCircleIcon } from "@/components/atoms/icon";
import { Button } from "@/components/ui/button";

export const HeroButton = () => {
  return (
    <div className="inline-grid md:grid-cols-2">
      <Button className="capitalize">
        get started <ArrowRightIcon className="!size-8 text-white" />
      </Button>
      <Button variant="ghost" className="capitalize">
        <PlayCircleIcon className="!size-8" /> watch video
      </Button>
    </div>
  );
};
