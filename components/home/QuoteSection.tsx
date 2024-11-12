import Image from "next/image";
import React from "react";

const QuoteSection = () => {
    return (
        <section className="h-[48dvh] bg-[#ffd6d8] md:h-[36dvh] lg:h-[48dvh] lg:py-0">
            <div className="flex-center container relative h-full">
                <Image
                    src="/assets/flower-left.webp"
                    alt="flower-left"
                    width={100}
                    height={100}
                    className="absolute left-0 top-3 w-[72px] md:top-5 md:w-[100px] lg:left-0 lg:top-3"
                />
                <Image
                    src="/assets/flower-right.webp"
                    alt="flower-left"
                    width={100}
                    height={100}
                    className="absolute bottom-3 right-0 w-[72px] md:bottom-5 md:w-[100px] lg:bottom-3 lg:right-0"
                />
                <p className="font-poppins mx-auto my-4 w-[280px] text-center text-[21px] md:my-0 md:w-[650px] md:text-[22px] lg:w-[800px] lg:text-[20px] lg:font-normal">
                    &quot;Embrace the science of beauty and let these innovations bring out your
                    skin&apos;s true radiance, resilience, and protection every day.&quot;
                </p>
            </div>
        </section>
    );
};

export default QuoteSection;
