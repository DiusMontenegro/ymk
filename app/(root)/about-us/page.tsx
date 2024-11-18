import React from "react";
import Image from "next/image";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MemberCard from "@/components/about-us/MemberCard";
import { team } from "@/constants";

const AboutUs = () => {
    return (
        <main className="font-poppins text-gold container tracking-wider lg:my-8">
            <Breadcrumb className="font-poppins mb-4 mt-6 lg:mt-0">
                <BreadcrumbList className="text-gold text-[15px]">
                    <BreadcrumbItem>
                        <BreadcrumbLink className="hover:text-gold hover:opacity-80" href="/">
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            href="/about-us"
                            className="hover:text-gold hover:opacity-80">
                            About Us
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Image
                className="mx-auto mb-10 shadow-lg"
                src="/assets/about-bg.webp"
                alt="ymk-model"
                width={1500}
                height={1500}
            />

            <h1 className="mb-4 text-center text-4xl font-semibold md:text-start lg:text-3xl">
                Radiant Beauty, Exceptional Care
            </h1>
            <p className="mb-4 tracking-widest md:tracking-normal">
                At <span className="font-semibold underline underline-offset-2">YMK Beauty</span>,
                we don&apos;t just enhance your skin, we take care of it.
            </p>
            <p className="mb-4 tracking-widest md:tracking-normal">
                Our products are meticulously formulated in Japan, combining advanced skincare
                technology like{" "}
                <span className="font-semibold underline underline-offset-2">Nano⁺ Stem Cells</span>
                , <span className="font-semibold underline underline-offset-2">Vitamin C</span>, and{" "}
                <span className="font-semibold underline underline-offset-2">Fullerene R.S.</span>,
                ensuring world-class quality. Assembled with care in the Philippines, each product
                reflects our commitment to delivering excellence and innovation.
            </p>
            <p className="mb-6 tracking-widest md:tracking-normal">
                We blend advanced skincare technology with a heartfelt commitment to quality. Our
                products, like the All-In-One Whitening Shots Facial Lotion, deliver hydration,
                protection, and rejuvenation in every drop.
            </p>
            <p className="mb-2 tracking-widest md:tracking-normal">
                At <span className="font-semibold">YMK Beauty</span>, we promise skincare
                that&apos;s:
            </p>
            <ul className="mb-2 list-disc pl-8 tracking-widest md:tracking-normal">
                <li>Effective yet gentle, with skin-loving ingredients.</li>
                <li>Cruelty-free and accessible to all.</li>
                <li>Globally inspired, locally assembled.</li>
            </ul>

            <section className="mb-20 mt-16">
                <h2 className="mb-2 text-center text-4xl font-semibold md:text-3xl">
                    Meet Our Team
                </h2>
                <p className="mx-auto mb-10 w-[320px] text-center md:w-[600px]">
                    A passionate group dedicated to bringing you innovative skincare solutions with
                    care and expertise.
                </p>
                <div className="mx-auto grid grid-cols-1 gap-4 md:w-[500px] md:grid-cols-2 lg:w-[650px]">
                    {team.map(({ name, position, image }) => (
                        <MemberCard key={name} name={name} position={position} image={image} />
                    ))}
                </div>
            </section>

            <p className="mx-auto mb-10 max-w-5xl tracking-widest md:text-center md:tracking-normal">
                <span className="font-semibold">Glow with YMK Beauty</span>. Unveil your beauty with
                YMK where Japanese innovation meets Filipino craftsmanship because you deserve the
                best.
            </p>
        </main>
    );
};

export default AboutUs;
