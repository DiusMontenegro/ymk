import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";

interface Props {
    id?: number;
    name: string;
    title: string;
    location: string;
    image: string;
    description: string;
}

const ReviewCard = ({ name, image, title, location, description }: Props) => {
    return (
        <li className="font-roboto relative flex h-[320px] w-[280px] flex-col items-start rounded-lg border border-[#916618] p-6 shadow-lg">
            <Image
                className="absolute -top-5 right-4"
                src="/assets/quote.webp"
                alt="quote"
                width={45}
                height={45}
            />
            <div className="mb-1.5 flex justify-start gap-3">
                <Image
                    className="mx-auto mb-4 rounded-full border-2 border-[#916618]"
                    src={image}
                    alt={name}
                    height={70}
                    width={70}
                />
                <div className="flex flex-col py-2.5">
                    <h2 className="text-[18px] font-semibold">{name}</h2>
                    <span className="text-[13px]">{location}</span>
                </div>
            </div>
            <div className="flex gap-1">
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
            </div>
            <h3 className="mb-2 font-semibold italic">{title}</h3>
            <p className="text-[14px]">{description}</p>
        </li>
    );
};

export default ReviewCard;
