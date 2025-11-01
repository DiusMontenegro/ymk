"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    images: string[];
    alt: string;
}

export function ProductCard({ images, alt }: ProductCardProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePrevious = () => {
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleThumbnailClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="mx-auto w-full max-w-2xl">
            {/* Main Image Container */}
            <div className="relative mb-4 w-full overflow-hidden rounded-lg bg-muted">
                <div className="relative aspect-square">
                    <Image
                        src={images[selectedIndex] || "/placeholder.svg"}
                        alt={`${alt} - Image ${selectedIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="cursor-zoom-in object-cover transition-transform duration-300 ease-out md:hover:scale-110"
                        priority
                    />
                </div>

                {/* Navigation Buttons */}
                {images.length > 1 && (
                    <>
                        <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                            onClick={handlePrevious}
                            aria-label="Previous image">
                            <svg
                                className="size-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                            onClick={handleNext}
                            aria-label="Next image">
                            <svg
                                className="size-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </>
                )}

                {/* Image Counter */}
                {images.length > 1 && (
                    <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-sm font-medium text-white">
                        {selectedIndex + 1} / {images.length}
                    </div>
                )}
            </div>

            {/* Thumbnails Container */}
            {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                            className={cn(
                                "relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 transition-all duration-200",
                                selectedIndex === index
                                    ? "border-primary ring-2 ring-primary/50"
                                    : "border-border hover:border-primary/50"
                            )}
                            aria-label={`View image ${index + 1}`}
                            aria-current={selectedIndex === index}>
                            <Image
                                src={image || "/placeholder.svg"}
                                alt={`${alt} thumbnail ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-300 ease-out md:hover:scale-110"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
