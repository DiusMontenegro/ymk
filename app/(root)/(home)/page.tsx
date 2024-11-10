import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => (
    <main className="bg-[#fafafa]">
        <section className="hero container relative grid h-full justify-evenly bg-cover bg-center bg-no-repeat sm:grid-cols-2 sm:py-14 lg:mb-8 lg:grid-cols-3 lg:bg-contain lg:py-20">
            {/* Hero Text Left Section */}
            <div className="flex flex-1 flex-col gap-2 pl-12 text-[#bb9044] max-sm:hidden lg:pl-9">
                <div className="font-bodoni-moda text-[50px] leading-[1.27] lg:text-[60px]">
                    <h1>All in One</h1>
                    <h1>WHITENING</h1>
                    <h1>SHOTS</h1>
                </div>
                <div className="font-roboto mb-6 lg:text-[18px]">
                    <h2>with Advanced Nano⁺ Technology</h2>
                </div>
                <Button
                    className="w-[80px] rounded-sm border border-[#916618] text-[#916618] hover:bg-[#bb9044] hover:text-[#fafafa]"
                    variant="outline">
                    Buy Now
                </Button>
            </div>

            {/* Image Section */}
            <section className="flex-center">
                <Image
                    className="-z-0 sm:w-[320px] md:w-[385px] lg:absolute lg:left-72 lg:top-10 lg:w-[520px]"
                    src="/assets/ymk-bottle.webp"
                    alt="ymk-bottle"
                    width={500}
                    height={500}
                    sizes="(max-width: 640px) 320px, (max-width: 768px) 385px, 520px"
                    priority
                />
            </section>

            {/* Hero Text Center Section */}
            <div className="flex flex-1 flex-col gap-2 py-3 text-center text-[#bb9044] sm:hidden sm:py-14 lg:py-20">
                <div className="font-bodoni-moda text-[40px] leading-[1.27] sm:text-[45px] lg:text-[60px]">
                    <h1>All in One</h1>
                    <h1>WHITENING SHOTS</h1>
                </div>
                <div className="font-roboto mb-2 lg:text-[18px]">
                    <h2>with Advanced Nano⁺ Technology</h2>
                </div>
                <Button
                    className="mx-auto w-[80px] rounded-sm border border-[#916618] text-[#916618] hover:bg-[#bb9044] hover:text-[#fafafa]"
                    variant="outline">
                    Buy Now
                </Button>
            </div>

            {/* Additional Product Info Section */}
            <div className="text-[#bb9044] sm:col-span-2 lg:col-span-1">
                <div className="font-roboto my-4 text-center text-[16px] font-light sm:my-10 sm:text-lg md:text-xl lg:hidden">
                    <h3>
                        Nano⁺ Technology & Stem Cells with Fullerene R.S., Vitamin C, SPF30+++,
                        Niacinamide, and Glutathione
                    </h3>
                </div>

                <div className="font-bodoni-moda max-lg:hidden">
                    <div className="mb-2 text-6xl">
                        <h3>Nano⁺ Technology</h3>
                        <h3>Stem Cells</h3>
                    </div>
                    <h3 className="mb-6 text-lg">with Fullerene R.S. & Vitamin C</h3>
                    <h3 className="mb-2 text-end text-2xl">SPF30+++</h3>
                    <h3 className="mb-6 text-4xl">Niacinamide</h3>
                    <h3 className="text-end text-3xl">Glutathione</h3>
                </div>
            </div>
        </section>

        {/* Quote Section */}
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

        {/* Feature Section - Protection and Defense */}
        <section className="relative h-[80vh] md:h-[50vh] lg:h-[91vh]">
            <div className="absolute left-0 top-0 h-1/2 w-full bg-[#ffd6d8]"></div>
            <div className="absolute bottom-0 left-0 h-1/2 w-full bg-[#fafafa]"></div>
            <div className="flex-center container relative mx-auto h-full">
                <h3 className="font-bodoni-moda absolute left-0 top-0 text-[80px] font-bold leading-none text-white md:text-[180px] lg:text-[230px]">
                    YMK
                </h3>
                <h3 className="font-bodoni-moda absolute bottom-0 right-0 text-[80px] font-bold leading-none text-black opacity-10 md:text-[180px] lg:text-[230px]">
                    YMK
                </h3>
                <div className="z-10 flex h-[480px] w-[270px] flex-col bg-[#fafafa] text-[#916618] shadow-lg md:h-[350px] md:w-[600px] md:flex-row-reverse">
                    <Image
                        className="h-1/2 flex-1 object-cover object-top md:h-full md:w-1/2 md:object-cover md:object-right"
                        src="/assets/protection-poster.webp"
                        alt="skin-protection-poster"
                        width={2000}
                        height={2000}
                    />
                    <div className="flex-1 px-4 py-6 text-center">
                        <h4 className="font-bodoni-moda mb-3 text-xl font-semibold tracking-wider md:text-3xl">
                            Protection & Defense
                        </h4>
                        <p className="font-roboto mb-6 text-[12px] md:px-3 md:text-justify md:text-[14px] md:tracking-normal">
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
    </main>
);

export default Home;
