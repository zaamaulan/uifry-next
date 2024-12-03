import { cn } from "@/lib/utils";

import * as motion from "motion/react-client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the best way to manage my finances?",
    answer:
      "Using a comprehensive financial app that tracks expenses, budgets, and investments effectively.",
  },
  {
    question: "How can I save more money each month?",
    answer:
      "Create a realistic budget, cut unnecessary expenses, and set savings goals.",
  },
  {
    question: "What features should I look for in a financial app?",
    answer:
      "Look for budgeting tools, expense tracking, and investment insights.",
  },
  {
    question: "How do I ensure my financial data is secure?",
    answer: "Choose apps with strong encryption and two-factor authentication.",
  },
  {
    question: "Can a financial app help with investment tracking?",
    answer:
      "Absolutely, many apps offer features to monitor and analyze your investment portfolio.",
  },
  {
    question: "What is the importance of setting financial goals?",
    answer:
      "Financial goals provide direction and motivation for saving and investing.",
  },
];

export const FAQ = () => {
  return (
    <section className="container mx-auto">
      <article className="space-y-10">
        <div className="space-y-1">
          <p className="text-lg font-medium uppercase tracking-widest text-carnation-400">
            faq
          </p>
          <h2 className="text-5xl font-bold capitalize">
            Frequently asked questions
          </h2>
        </div>

        <div className="grid gap-5 max-md:hidden md:grid-cols-2">
          {faqs.map((faq, index) => {
            const bgCarnation = [0, 3, 4].includes(index);

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={cn(
                  "space-y-2 rounded-lg md:p-8",
                  bgCarnation ? "md:bg-carnation-400" : "bg-white",
                )}
              >
                <h3
                  className={cn(
                    "text-[1.75rem] font-semibold",
                    bgCarnation ? "md:text-white" : "text-black",
                  )}
                >
                  {faq.question}
                </h3>
                <p
                  className={cn(
                    "text-lg font-medium",
                    bgCarnation ? "md:text-white" : "text-black",
                  )}
                >
                  {faq.answer}
                </p>
              </motion.div>
            );
          })}
        </div>

        <Accordion type="single" collapsible className="md:hidden">
          {faqs.map((faq, index) => {
            return (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-[1.75rem] font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </article>
    </section>
  );
};
