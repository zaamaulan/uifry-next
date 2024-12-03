"use client";

import { useCallback, useEffect, useState } from "react";
import { TestimonialCarousel } from "../molecules/testimonial/testimonial-carousel";
import { TestimonialGrid } from "../molecules/testimonial/testimonial-grid";
import { TestimonialHeader } from "../molecules/testimonial/testimonial-header";
import { TestimonialQuote } from "../molecules/testimonial/testimonial-quote";

const testimonials = [
  {
    name: "John Smith",
    image: "/images/testimonial/avatar-1.png",
    testimonial: {
      title: "Outstanding Experience!",
      quote:
        "“Sint consequat enim proident deserunt incididunt anim non sit elit consequat sunt esse voluptate. Consectetur et ea sit eu in velit incididunt incididunt aliquip culpa exercitation adipisicing excepteur eiusmod. Enim sit aliquip consectetur est dolore ipsum sit tempor laboris reprehenderit eu qui.”",
    },
  },
  {
    name: "Jane Doe",
    image: "/images/testimonial/avatar-2.png",
    testimonial: {
      title: "Incredible Service!",
      quote:
        "“Excepteur nisi consectetur duis ad Lorem enim sit mollit ex Lorem exercitation adipisicing. Consequat Lorem sit sit nisi consequat ea mollit voluptate do ipsum do amet esse. Ullamco proident laborum sit voluptate sint nisi eu magna nostrud. Ipsum commodo enim ullamco amet reprehenderit enim eu commodo do sit aute.”",
    },
  },
  {
    name: "Bob Johnson",
    image: "/images/testimonial/avatar-3.png",
    testimonial: {
      title: "Highly Recommended!",
      quote:
        "“Velit est do culpa irure nostrud. Reprehenderit ex ea laboris ea et qui anim exercitation pariatur. Laboris id reprehenderit in commodo anim. Esse nostrud minim deserunt voluptate laborum occaecat quis dolore in ut fugiat. Adipisicing minim proident eu proident culpa quis anim Lorem sit consequat aliqua laboris.”",
    },
  },
  {
    name: "Alice Williams",
    image: "/images/testimonial/avatar-4.png",
    testimonial: {
      title: "Exceptional Quality!",
      quote:
        "“Labore minim enim officia eiusmod anim minim laborum nostrud fugiat. Incididunt amet voluptate reprehenderit eu anim anim esse. Id excepteur pariatur nulla commodo sit magna magna duis Lorem voluptate officia non.”",
    },
  },
  {
    name: "Michael Brown",
    image: "/images/testimonial/avatar-5.png",
    testimonial: {
      title: "Fantastic Support!",
      quote:
        "“Proident eu elit et quis exercitation Lorem sint excepteur cupidatat veniam est ex esse. Magna enim enim amet et culpa ullamco in veniam ut in. Consequat exercitation occaecat sunt amet laboris qui eiusmod adipisicing. Dolor quis irure ea eu. Dolore sunt irure Lorem aliquip commodo quis incididunt culpa.”",
    },
  },
];

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectTestimonial = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto max-lg:space-y-10">
      <TestimonialHeader />
      <div className="grid place-items-center gap-10 lg:grid-cols-2">
        <TestimonialGrid />
        <div className="space-y-6">
          <TestimonialQuote
            title={testimonials[currentIndex].testimonial.title}
            quote={testimonials[currentIndex].testimonial.quote}
            name={testimonials[currentIndex].name}
          />
          <TestimonialCarousel
            currentIndex={currentIndex}
            onSelect={handleSelectTestimonial}
            images={testimonials.map((testimonial) => ({
              src: testimonial.image,
              alt: testimonial.name,
            }))}
          />
        </div>
      </div>
    </section>
  );
};
