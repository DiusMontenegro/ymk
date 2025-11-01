import React from "react";

import { ymkBottle } from "@/constants";
import { ProductCard } from "./ProductCard";

const ProductCarousel = () => {
    return (
        <div>
            {ymkBottle.map((product) => (
                <div key={product.id} className="flex flex-col gap-4 ">
                    <ProductCard images={product.images} alt={product.name} />
                </div>
            ))}
        </div>
    );
};

export default ProductCarousel;
