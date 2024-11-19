import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { quickLinks } from "@/constants";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="font-poppins bg-[#332219] py-4 text-[16px] text-[#f0da88]">
            <div className="container flex h-full flex-col gap-3 md:gap-6">
                <div className="flex flex-1 flex-col md:flex-row md:gap-1">
                    <div className="flex w-[180px] flex-col">
                        <Image
                            src="/assets/ymk-logo.webp"
                            alt="ymk-logo"
                            width={100}
                            height={100}
                            className="mb-2"
                        />
                        <span className="mb-4 text-[16px]">Unveiling Your Most Radiant Self.</span>
                        <Link href="mailto:melinda_.0102@icloud.com">
                            <Button
                                variant="outline"
                                className="mb-5 w-[100px] rounded-sm border-[#f0da88] bg-transparent text-[14px] hover:border-white hover:bg-transparent hover:text-white">
                                Contact Us
                            </Button>
                        </Link>
                        <ul className="flex items-center justify-start gap-2">
                            <li>
                                <Image
                                    src="/assets/messenger-icon.webp"
                                    alt="facebook-messenger-icon"
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/assets/facebook-icon.webp"
                                    alt="facebook-icon"
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/assets/linkedin-icon.webp"
                                    alt="linkedin-icon"
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-start justify-between gap-6 py-3 md:w-[180px] md:flex-col md:py-4">
                        <div className="flex flex-1 flex-col gap-2">
                            <h2 className="text-[18px] font-semibold">Quick Links</h2>
                            <ul className="flex flex-col gap-1 text-[14px]">
                                {quickLinks.map(({ name, url }) => (
                                    <li key={name}>
                                        <Link href={url}>{name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                            <h3 className="text-[18px] font-semibold">Delivery</h3>
                            <ul className="flex flex-col gap-1 text-[14px]">
                                <li>
                                    <Link href="/where-to-buy/#how-it-works">How it Works</Link>
                                </li>
                                <li>
                                    <Link href="/product-details/#faq">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex w-[180px] flex-col items-start gap-2 py-3 md:py-4">
                        <div>
                            <h4 className="text-[18px] font-semibold">Monday - Friday</h4>
                            <p className="text-[14px]">8am - 5pm PST</p>
                        </div>
                        <div>
                            <h4 className="text-[18px] font-semibold">Saturday</h4>
                            <p className="text-[14px]">9am - 4pm PST</p>
                        </div>
                    </div>
                    <div className="flex w-[180px] flex-col items-start gap-2 py-3 md:py-4">
                        <h3 className="text-[18px] font-semibold">Need Help?</h3>
                        <ul className="flex flex-col gap-1 text-[14px]">
                            <li>(+81) 080-3824-3485</li>
                            <li className="md:hidden lg:block">melinda_.0102@icloud.com</li>
                        </ul>
                    </div>
                </div>
                <span>
                    &copy; {currentYear} YMK ビューティー | All Rights Reserved | Powered by NEXTJS
                </span>
            </div>
        </footer>
    );
};

export default Footer;
