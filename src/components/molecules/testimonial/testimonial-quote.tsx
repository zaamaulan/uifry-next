interface TestimonialQuoteProps {
  title: string;
  quote: string;
  name: string;
}

export const TestimonialQuote = ({
  title,
  quote,
  name,
}: TestimonialQuoteProps) => {
  return (
    <article className="space-y-6">
      <h3 className="text-[1.75rem] font-semibold capitalize">{title}</h3>
      <p className="text-lg font-medium text-black/50">{quote}</p>
      <p className="text-lg font-semibold">{name}</p>
    </article>
  );
};
