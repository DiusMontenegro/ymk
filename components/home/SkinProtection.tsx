import Image from "next/image";
import React from "react";

import { Button } from "../ui/button";

const SkinProtection = () => {
    return (
        <section className="relative mb-16 h-[80vh] md:h-[50vh] lg:h-[91vh]">
            <div className="absolute left-0 top-0 h-1/2 w-full bg-[#ffd6d8]"></div>
            <div className="absolute bottom-0 left-0 h-1/2 w-full bg-[#fafafa]"></div>
            <div className="flex-center container relative mx-auto h-full">
                <h3 className="font-bodoni-moda absolute left-0 top-0 text-[80px] font-bold leading-none text-white md:text-[180px] lg:text-[230px]">
                    YMK
                </h3>
                <h3 className="font-bodoni-moda absolute bottom-0 right-0 text-[80px] font-bold leading-none text-black opacity-10 md:text-[180px] lg:text-[230px]">
                    YMK
                </h3>
                <div className="z-10 flex h-[480px] w-[270px] flex-col bg-[#fafafa] text-[#916618] shadow-lg md:h-[350px] md:w-[600px] md:flex-row-reverse lg:h-[450px] lg:w-[900px]">
                    <Image
                        className="h-1/2 flex-1 object-cover object-top md:h-full md:w-1/2 md:object-cover md:object-right"
                        src="/assets/protection-poster.webp"
                        alt="skin-protection-poster"
                        width={2000}
                        height={2000}
                    />
                    <div className="flex-1 px-4 py-6 text-center lg:px-8 lg:py-20 lg:text-start">
                        <h4 className="font-bodoni-moda mb-3 text-xl font-semibold tracking-wider md:text-3xl lg:mb-[25px] lg:text-[34px]">
                            Protection & Defense
                        </h4>
                        <p className="font-roboto mb-6 text-[12px] md:px-3 md:text-justify md:text-[14px] md:tracking-normal lg:mb-12 lg:p-0 lg:text-start lg:text-[16px] lg:font-light lg:tracking-wider">
                            SPF 30+++ and Fullerene RS Vitamin C offers comprehensive protection
                            against environmental damage and aging. SPF 30+++ shields the skin from
                            UVA and UVB rays, preventing sun damage and premature aging.
                        </p>
                        <Button
                            size="sm"
                            className="mx-auto h-[30px] w-[75px] rounded-sm border border-[#916618] font-semibold text-[#916618] hover:bg-[#bb9044] hover:text-[#fafafa] md:h-[35px] md:w-[85px] md:text-[14px]"
                            variant="outline">
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkinProtection;
