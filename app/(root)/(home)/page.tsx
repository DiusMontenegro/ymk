import React from "react";

import Hero from "@/components/home/Hero";
import Quote from "@/components/home/Quote";
import SkinProtection from "@/components/home/SkinProtection";

const Home = () => (
    <main className="bg-[#fafafa]">
        <Hero />
        <Quote />
        <SkinProtection />
    </main>
);

export default Home;
