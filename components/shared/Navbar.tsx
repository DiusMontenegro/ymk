import React from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import { v4 as uuidv4 } from "uuid";

import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="font-roboto bg-[#332219] py-2 text-[12px] font-semibold text-[#f0da88]">
            {/* Mobile Navigation */}
            <div className="container flex items-center justify-between sm:hidden">
                <Link href="/">
                    <Image src="/assets/ymk-logo.webp" alt="ymk-logo" width={50} height={50} />
                </Link>

                <Sheet>
                    <SheetTrigger aria-label="Open navigation menu">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent
                        className="font-roboto max-w-[250px] border-none bg-[#332219] text-[#f0da88]"
                        side="left">
                        <SheetTitle className="flex-center mb-2 text-[#f0da88]">
                            <Image
                                src="/assets/ymk-logo.webp"
                                alt="ymk-logo"
                                width={90}
                                height={90}
                            />
                        </SheetTitle>
                        <ul className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <li key={uuidv4()}>
                                    <SheetClose asChild>
                                        <Link href={link.href}>{link.label}</Link>
                                    </SheetClose>
                                </li>
                            ))}
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Navigation */}
            <ul className="container flex items-center justify-between text-[14px] max-sm:hidden sm:font-light lg:font-normal">
                {navLinks.slice(0, 2).map((link) => (
                    <li key={uuidv4()}>
                        <Link
                            href={link.href}
                            className="rounded border border-transparent px-3 py-1.5 hover:border-[#fafafa] hover:text-[#fafafa]">
                            {link.label.toUpperCase()}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link href="/" aria-label="ymk-logo">
                        <Image
                            src="/assets/ymk-logo.webp"
                            aria-label="ymk-logo"
                            alt="ymk-logo"
                            width={60}
                            height={60}
                        />
                    </Link>
                </li>
                {navLinks.slice(2).map((link) => (
                    <li key={uuidv4()}>
                        <Link
                            href={link.href}
                            className="rounded border border-transparent px-3 py-1.5 hover:border-[#fafafa] hover:text-[#fafafa]">
                            {link.label.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
