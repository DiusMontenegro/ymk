import React from "react";
import Image from "next/image";
import { features, reviews } from "@/constants";
import { v4 as uuidv4 } from "uuid";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Card from "@/components/product-details/Card";
import Link from "next/link";
import ReviewCard from "@/components/product-details/ReviewCard";
import FAQ from "@/components/product-details/FAQ";

const ProductDetailsPage = () => {
    return (
        <>
            <main className="container lg:my-8">
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
                                href="/product-details"
                                className="hover:text-gold hover:opacity-80">
                                Product Details
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="mb-[20px] flex flex-col lg:flex-row">
                    <div className="relative flex-1">
                        <Image
                            className="left-3 top-0 mt-8 lg:absolute lg:mt-0 lg:w-[500px] xl:left-0 xl:top-2 xl:w-[900px]"
                            src="/assets/ymk-bottle.webp"
                            alt="ymk-bottle"
                            width={900}
                            height={900}
                        />
                    </div>
                    <div className="text-gold flex-1 p-2 pb-0 lg:py-4">
                        <div className="font-bodoni-moda mb-4 text-[24px] font-semibold lg:text-[31.2px]">
                            <h1 className="lg:hidden">
                                All In One Whitening Shots Facial Lotion - Nano⁺ Stem Cells + SPF
                                30+++, Fullerene R.S. Vitamin C.
                            </h1>

                            <div className="max-lg:hidden">
                                <h1>All In One Whitening Shots</h1>
                                <h1>Facial Lotion - Nano⁺ Stem Cells</h1>
                                <h1>+ SPF 30+++, Fullerene R.S.</h1>
                                <h1>Vitamin C.</h1>
                            </div>
                        </div>
                        <div className="mb-3 flex items-center justify-start gap-3">
                            <h2>₱ 299.00</h2>
                            <h2 className="line-through">₱ 599.00</h2>
                            <h2 className="bg-[#e61e3e] px-2 py-0.5 text-[14px] text-white">
                                Sale · Save up to 50%
                            </h2>
                        </div>
                        <div className="mb-1 flex items-center justify-start">
                            <Image src="/assets/dot.webp" alt="bullet" width={32} height={32} />
                            <h3 className="text-[12px]">Hurry! Limited Stocks Only</h3>
                        </div>
                        <div className="mb-2 flex items-center justify-start gap-2">
                            <h4 className="mb-1">Size:</h4>
                            <span className="border border-[#916618] px-1.5 text-[13px]">50ML</span>
                        </div>
                        <div className="my-3">
                            <Link
                                href="/where-to-buy"
                                className="block w-[120px] rounded-full bg-[#916618] p-1 px-2 text-center font-semibold text-[#fafafa]">
                                Buy Now
                            </Link>
                        </div>
                        <div className="mb-3 flex flex-col items-start justify-start">
                            <h4 className="mb-1">Ingredients:</h4>
                            <span className="text-[14px] md:text-justify">
                                Water, Propylene Glycol, Glycerin, Polyglyceryl-10 Dilaurate, (and)
                                DicaprylylEther (and) Sodium Polyacryloyldimethyl Taurate,
                                EthylHexyl Methocinnamate, Octocrylene, Aloe Barbadensis Leaf
                                Extract, Zinc Oxide, Titanium Dioxide, Water (and) EthylHexyl
                                Methocinnamate (and) Butyl Methoxydibenzoyl methane (and)
                                Benzophenone-3 (and) 1, 3-Butylene Glycol (and) Phospholipids (and)
                                Phenoxyethanol, Triethanolamine, Phenoxyethanol, Carbomer,
                                Niacinamide, Sodium Hyaluronate, Water (and) Butylene Glycol (and)
                                Soluble Proteoglycan, Stem Cell, Glutathione, Fullerenes, Ascorbic
                                Acid, Fragrance.
                            </span>
                        </div>
                    </div>
                </div>
            </main>
            <section className="container mb-4 space-y-4 lg:my-10">
                <div className="font-poppins text-gold space-y-2">
                    <h2 className="text-[18px] font-semibold">Product Details:</h2>
                    <p className="text-[14px] tracking-wider md:text-justify">
                        The All In One Whitening Shots Facial Lotion combines Nano⁺ Stem Cells and
                        SPF 30+++ with Fullerene R.S. Vitamin C to create a powerful skincare
                        solution in a convenient 50 ML bottle. This facial lotion is formulated with
                        a rich blend of ingredients, including hydrating agents like glycerin,
                        sodium hyaluronate, and aloe extract, as well as brightening agents such as
                        niacinamide, ascorbic acid, and glutathione to promote an even, radiant
                        complexion. With the added protection of zinc oxide and titanium dioxide,
                        the lotion shields the skin from harmful UV rays, while the antioxidant
                        properties of fullerene and stem cells target aging and skin renewal.
                    </p>
                </div>
                <div className="font-poppins text-gold space-y-2">
                    <h2 className="text-[18px] font-semibold">How to Use:</h2>
                    <p className="text-[14px] tracking-wider md:text-justify">
                        Wash your face first before applying this product, before bed and rinse it
                        in the morning, You can use it morning and night for the best results. Do a
                        skin test before using this product. Avoid areas very near in the eyes.
                    </p>
                </div>
            </section>
            <section className="bg-brown font-roboto my-2 py-12 text-[#f0da88]">
                <div className="container">
                    <h2 className="mx-auto mb-2 text-center text-4xl font-semibold">Features</h2>
                    <p className="mx-auto mb-8 text-center text-[14px] md:mb-14 md:w-[550px]">
                        Rejuvenate Skin with Stem Cells and Advanced Nano+ Technology
                    </p>
                    <div className="flex h-full flex-col items-center justify-evenly gap-4 md:flex-row">
                        {features.map(({ imgSrc, title }) => (
                            <Card key={uuidv4()} imgSrc={imgSrc} title={title} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="text-gold font-roboto flex flex-col py-20">
                    <h2 className="mb-2 text-center text-4xl font-semibold">
                        What Our Customers Say
                    </h2>
                    <p className="mx-auto mb-14 text-center text-[14px] md:w-[550px]">
                        Don&apos;t just take our word for it. Here&apos;s what some of our satisfied
                        customers have to say about their experience with our product.
                    </p>
                    <ul className="mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {reviews.map(({ name, title, image, description, location }) => (
                            <ReviewCard
                                key={name}
                                name={name}
                                title={title}
                                image={image}
                                description={description}
                                location={location}
                            />
                        ))}
                    </ul>
                </div>
            </section>
            <FAQ />
        </>
    );
};

export default ProductDetailsPage;
