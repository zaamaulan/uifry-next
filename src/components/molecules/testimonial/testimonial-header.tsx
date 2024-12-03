import { memo } from "react";

export const TestimonialHeader = memo(() => (
  <div className="space-y-1">
    <p className="text-lg font-medium uppercase tracking-widest text-carnation-400 md:text-center">
      testimonial
    </p>
    <h2 className="text-5xl font-bold capitalize md:mx-auto md:max-w-md md:text-center">
      what our users say about us?
    </h2>
  </div>
));
