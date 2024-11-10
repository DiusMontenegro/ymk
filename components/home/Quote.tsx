import Image from "next/image";
import React from "react";

const Quote = () => {
    return (
        <section className="flex-center container relative my-1 h-[25dvh] flex-col sm:h-[30dvh] md:h-[35dvh] lg:h-[40dvh]">
            <p className="font-poppins mx-auto text-center text-xs italic leading-relaxed tracking-wider text-[#916618] sm:w-[480px] sm:text-[14px] sm:font-semibold md:w-[615px] md:text-[16px] lg:w-[750px] lg:text-lg lg:leading-7">
                &quot;Brighten up with YMK Whitening Shots—All-in-One formula powered by
                Nano-technology + Stem Cells, Niacinamide, Glutathione, SPF 30+++ and Fullerene RS
                Vitamin C. Radiance in every shot!&quot;
            </p>

            <div className="mx-auto mt-2 h-2 w-[80px] border-b-2 border-b-[#916618] sm:mt-3 sm:w-[95px] md:mt-4 md:w-[105px] lg:mt-6"></div>
            <Image
                className="absolute left-0 top-0 -z-0 max-sm:hidden sm:w-[80px] md:w-[90px] lg:w-[120px]"
                src="/assets/qsbg1.webp"
                alt="qoute-section-element1"
                width={200}
                height={200}
            />
            <Image
                className="absolute bottom-0 right-0 -z-0 w-[70px] sm:w-[80px] md:w-[90px] lg:w-[120px]"
                src="/assets/qsbg2.webp"
                alt="qoute-section-element1"
                width={200}
                height={200}
            />
        </section>
    );
};

export default Quote;
