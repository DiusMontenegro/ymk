import React from "react";
import Image from "next/image";

const SkinHighlights = () => {
    return (
        <section className="container relative py-12 text-[#916618] lg:px-10 lg:py-28">
            <div className="mx-auto flex flex-col items-start justify-between p-4 md:flex-row lg:mb-28 lg:gap-2 lg:p-0">
                <Image
                    className="z-10 mx-auto mb-6 flex-1 object-contain md:w-[300px] lg:w-[500px]"
                    src="/assets/anti-aging.webp"
                    alt="anti-aging-poster"
                    width={500}
                    height={500}
                />
                <div className="flex-1 lg:pr-12">
                    <h4 className="font-bodoni-moda mb-3 text-2xl font-semibold leading-tight lg:mb-[25px] lg:text-[34px] lg:tracking-[1.27px]">
                        Advanced Anti-Aging & Regeneration
                    </h4>
                    <p className="font-roboto mb-2 text-[12px] leading-relaxed md:text-justify md:text-[14px] lg:mb-6 lg:text-start lg:text-[18px] lg:font-light lg:tracking-wider">
                        <span className="font-semibold">Stem Cells</span> and{" "}
                        <span className="font-semibold">Nano+ Technology</span> combine to enhance
                        skin renewal and anti-aging. Stem cells promote cell turnover, collagen
                        production, and elasticity, reducing fine lines and wrinkles for a more
                        youthful look.
                    </p>
                    <p className="font-roboto mb-6 text-[12px] leading-relaxed md:text-justify md:text-[14px] lg:text-start lg:text-[18px] lg:font-light lg:tracking-wider">
                        <span className="font-semibold">Nano+ Technology</span> boosts this effect
                        by breaking down active ingredients into ultra-fine particles, allowing
                        deeper absorption and maximizing results. Together, they help restore a
                        smoother, firmer, and more radiant complexion.
                    </p>
                </div>
            </div>

            <div className="mx-auto flex flex-col-reverse items-start justify-between p-4 md:flex-row md:pl-10 lg:gap-2 lg:p-0">
                <div className="flex-1 lg:pl-12">
                    <h4 className="font-bodoni-moda mb-3 text-2xl font-semibold leading-tight lg:mb-[25px] lg:text-[34px] lg:tracking-[1.27px]">
                        Skin Brightening & Radiance Boosters
                    </h4>
                    <p className="font-roboto mb-2 text-[12px] leading-relaxed md:text-justify md:text-[14px] lg:mb-6 lg:text-start lg:text-[18px] lg:font-light lg:tracking-wider">
                        <span className="font-semibold">Glutathione</span> and{" "}
                        <span className="font-semibold">Niacinamide</span> are powerful antioxidants
                        that work together to brighten the skin, reduce pigmentation, and enhance
                        radiance. Glutathione defends against oxidative stress, helping to even out
                        skin tone and prevent premature aging.
                    </p>
                    <p className="font-roboto mb-6 text-[12px] leading-relaxed md:text-justify md:text-[14px] lg:text-start lg:text-[18px] lg:font-light lg:tracking-wider">
                        <span className="font-semibold">Niacinamide</span> strengthens the skin
                        barrier, which improves moisture retention, minimizes pores, and smooths
                        texture. Together, these ingredients create a balanced, radiant complexion
                        that&apos;s protected and revitalized.
                    </p>
                </div>
                <Image
                    className="z-10 mx-auto mb-6 flex-1 object-contain md:w-[300px] lg:w-[500px]"
                    src="/assets/radiance-booster.webp"
                    alt="radiance-boost-poster"
                    width={500}
                    height={500}
                />
            </div>

            <Image
                src="/assets/nano-tech.webp"
                className="absolute left-0 top-0 z-0 w-[200px] opacity-80 lg:left-56 lg:top-0 lg:w-[300px]"
                alt="nano-icon"
                width={300}
                height={300}
            />
            <Image
                src="/assets/nano-tech.webp"
                className="absolute bottom-2/4 right-0 z-0 w-[180px] opacity-80 lg:bottom-1/4 lg:right-0 lg:w-[420px]"
                alt="nano-icon"
                width={420}
                height={420}
            />
            <Image
                src="/assets/nano-tech.webp"
                className="absolute bottom-0 left-0 z-0 overflow-hidden opacity-70 lg:bottom-10 lg:left-0"
                alt="nano-icon"
                width={280}
                height={280}
            />
        </section>
    );
};

export default SkinHighlights;
