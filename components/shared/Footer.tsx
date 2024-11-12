import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
    return (
        <footer className="font-poppins bg-[#332219] py-4 text-[16px] text-[#f0da88]">
            <div className="container flex h-full flex-col gap-3 md:gap-6 lg:px-0">
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
                        <Button
                            variant="outline"
                            className="mb-5 w-[100px] rounded-sm border-[#f0da88] bg-transparent text-[14px] hover:border-white hover:bg-transparent hover:text-white">
                            Contact Us
                        </Button>
                        <ul className="flex items-center justify-start gap-2">
                            <li>
                                <Image
                                    src="/assets/messenger-icon.png"
                                    alt="facebook-messenger-icon"
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/assets/facebook-icon.png"
                                    alt="facebook-icon"
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/assets/linkedin-icon.png"
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
                            <h5 className="text-[18px] font-semibold">Quick Links</h5>
                            <ul className="flex flex-col gap-1 text-[14px]">
                                <li>About</li>
                                <li>Product Details</li>
                                <li>Contact Us</li>
                                <li>Where to Buy</li>
                            </ul>
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                            <h5 className="text-[18px] font-semibold">Delivery</h5>
                            <ul className="flex flex-col gap-1 text-[14px]">
                                <li>How It Works</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex w-[180px] flex-col items-start gap-2 py-3 md:py-4">
                        <div>
                            <h5 className="text-[18px] font-semibold">Monday - Friday</h5>
                            <p className="text-[14px]">8am - 5pm PST</p>
                        </div>
                        <div>
                            <h5 className="text-[18px] font-semibold">Saturday</h5>
                            <p className="text-[14px]">9am - 4pm PST</p>
                        </div>
                    </div>
                    <div className="flex w-[180px] flex-col items-start gap-2 py-3 md:py-4">
                        <h5 className="text-[18px] font-semibold">Need Help?</h5>
                        <ul className="flex flex-col gap-1 text-[14px]">
                            <li>(+63) 123- 456 - 7890</li>
                            <li className="md:hidden lg:block">yui_melinda_kenji@email.com</li>
                        </ul>
                    </div>
                </div>
                <span>&copy; 2024 YMK ビューティー | All Rights Reserved | Powered by NEXTJS</span>
            </div>
        </footer>
    );
};

export default Footer;
