"use client";
import { ExternalLink } from "lucide-react";
import React from "react";

interface GetInTouchButtonProps {
    fbProfile: string;
}

const GetInTouchButton = ({ fbProfile }: GetInTouchButtonProps) => {
    const handleMessage = () => {
        const message = encodeURIComponent("I want to buy YMK all in one lotion");
        const messengerUrl = `https://m.me/${fbProfile}?text=${message}`;
        const fbProfileUrl = `https://www.facebook.com/${fbProfile}`;

        // try messenger first
        window.location.href = messengerUrl;

        // fallback if messenger link fails
        setTimeout(() => {
            window.location.href = fbProfileUrl;
        }, 1500);
    };

    return (
        <button
            onClick={handleMessage}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#916618] px-4 py-2 font-semibold text-white transition-all hover:bg-[#7b5612] hover:shadow-lg">
            Get in Touch
            <ExternalLink className="size-4" />
        </button>
    );
};

export default GetInTouchButton;
