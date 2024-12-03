import { EllipseGradient, EllipseIcon } from "@/components/atoms/icon";
import { TestimonialAvatar } from "./testimonial-avatar";

export const TestimonialGrid = () => {
  return (
    <div className="relative max-lg:hidden">
      <EllipseGradient className="absolute -z-20 translate-y-32" />
      <EllipseIcon className="absolute -z-10" />
      <div className="size-[713px]">
        <div className="absolute translate-x-28 translate-y-28 transform">
          <TestimonialAvatar
            src="/images/testimonial/avatar-1.png"
            alt="Avatar 1"
            size={87}
          />
        </div>
        <div className="absolute right-0 top-32 -translate-x-40 transform">
          <TestimonialAvatar
            src="/images/testimonial/avatar-2.png"
            alt="Avatar 2"
            size={110}
          />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <TestimonialAvatar
            src="/images/testimonial/avatar-4.png"
            alt="Avatar 4"
            size={213}
          />
        </div>
        <div className="absolute bottom-40 left-32 transform">
          <TestimonialAvatar
            src="/images/testimonial/avatar-3.png"
            alt="Avatar 3"
            size={100}
          />
        </div>
        <div className="absolute bottom-40 right-40 transform">
          <TestimonialAvatar
            src="/images/testimonial/avatar-5.png"
            alt="Avatar 5"
            size={76}
          />
        </div>
      </div>
    </div>
  );
};
