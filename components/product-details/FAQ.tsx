import React from "react";
import { faq } from "@/constants";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    return (
        <div className="text-gold font-roboto container mb-10">
            <h2 className="mb-2 text-3xl font-semibold">
                FAQ <span className="text-[24px] font-normal">(Frequently asked questions)</span>
            </h2>
            {faq.map(({ id, question, answer }) => (
                <Accordion key={id} type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg">{question}</AccordionTrigger>
                        <AccordionContent className="text-[15px]">{answer}</AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </div>
    );
};

export default FAQ;
