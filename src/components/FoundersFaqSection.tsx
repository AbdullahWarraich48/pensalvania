import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMemo } from "react";

type QaItem = {
  question: string;
  answer: string;
};

const FoundersFaqSection = () => {
  const qaItems = useMemo<QaItem[]>(
    () => [
      {
        question: "Why did you start the Pennsylvania Furniture Mission?",
        answer:
          "We believe in the dignity and worth of the person. Everyone deserves to have a bed to sleep in at night, and a table to eat dinner on. Each person on this earth has intrinsic value and worth. We wish to empower everyone we meet to purse their passions and achieve their dreams.",
      },
      {
        question: "What is your desired impact?",
        answer:
          "If we could accomplish anything, our goal would be to put a smile on others’ faces. This is the smallest difference, however, it is the first step toward change.",
      },
      {
        question: "How does furniture change lives?",
        answer:
          "Furniture is just one piece of the puzzle when it comes to setting up a home and starting down a new path, however, we believe that furniture helps turn houses into homes! Receiving gently-used free furniture enables families and individuals to use their limited financial resources and time in other places such as purchasing backpacks for their children for school, or receiving needed medical services.",
      },
      {
        question: "Why a furniture bank for South Central PA?",
        answer:
          "Amanda grew up in Berks County, PA and went to Millersville University in Lancaster County, PA. Amanda was knowledgeable about the many small to medium-sized cities in the area, the challenges that face these communities, as well as the ability of others to donate furniture. This provided the essential ingredients to launching a furniture bank for South Central PA.",
      },
    ],
    [],
  );

  return (
    <section className="py-16 bg-background" aria-label="Founders FAQ">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">
              Q&amp;A
            </p>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-foreground italic">
              Q&amp;A with The Founders
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed md:text-lg">
              Quick answers to the questions people ask most often.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-primary/10 bg-background px-5 md:px-8">
            <Accordion type="single" collapsible className="w-full">
              {qaItems.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="text-left text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-7">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersFaqSection;

