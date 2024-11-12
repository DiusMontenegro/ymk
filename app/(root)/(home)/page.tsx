import React from "react";

import Hero from "@/components/home/Hero";
import Quote from "@/components/home/Quote";
import SkinProtection from "@/components/home/SkinProtection";
import SkinHighlights from "@/components/home/SkinHighlights";
import QuoteSection from "@/components/home/QuoteSection";

const Home = () => (
    <main className="bg-[#fafafa]">
        <Hero />
        <Quote />
        <SkinProtection />
        <SkinHighlights />
        <QuoteSection />
    </main>
);

export default Home;
