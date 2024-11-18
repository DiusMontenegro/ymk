import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { sellers, steps } from "@/constants";

import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import SellerCard from "@/components/where-to-buy/SellerCard";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
    title: "Where to Buy",
};

export default function WhereToBuy() {
    return (
        <div className="text-gold font-poppins container mx-auto mb-14 px-4 py-8 lg:mt-8">
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
                            href="/where-to-buy"
                            className="hover:text-gold hover:opacity-80">
                            Where to Buy
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mb-8 text-center text-4xl font-semibold">Where to Buy</h1>

            <section className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold">Our Sellers</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {sellers.map((seller, index) => (
                        <SellerCard key={index} {...seller} />
                    ))}
                </div>
            </section>

            <section id="how-it-works" className="mb-12">
                <h2 id="contact-us" className="mb-4 text-2xl font-semibold">
                    How it Works
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="mb-2 rounded-full border border-[#916618] p-4">
                                <step.icon className="text-gold size-6" />
                            </div>
                            <p className="text-sm">{step.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-lg bg-secondary p-8">
                <h2 className="mb-4 text-2xl font-semibold">Need Assistance?</h2>
                <p className="mb-4">
                    If you have any issues or questions, please don&apos;t hesitate to contact our
                    official page. We&apos;re here to help!
                </p>
                <Button
                    className="border border-transparent bg-[#916618] text-[#fafafa] hover:border-[#916618] hover:bg-transparent hover:text-[#916618]"
                    asChild>
                    <Link href="mailto:test@email.com">Email Us</Link>
                </Button>
            </section>

            <section className="mt-12 text-center">
                <h2 className="mb-4 text-2xl font-semibold">Ready to Make a Purchase?</h2>
                <p className="mb-4">
                    Find your nearest seller and get in touch today. Our products are just a call
                    away!
                </p>
                <div className="flex items-center justify-center">
                    <AlertCircle className="mr-2 size-5 text-yellow-500" />
                    <p className="text-sm text-[#1c1c1c]">
                        Remember to verify the seller&apos;s information before making any
                        transactions.
                    </p>
                </div>
            </section>
        </div>
    );
}
