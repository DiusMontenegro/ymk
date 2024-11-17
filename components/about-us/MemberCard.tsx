import Image from "next/image";
import React from "react";

interface Props {
    image: string;
    name: string;
    position: string;
}

const MemberCard = ({ image, name, position }: Props) => {
    return (
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        <div className="relative mx-auto h-[300px] w-[240px] cursor-pointer rounded-xl border border-[#916618] border-opacity-60 bg-white p-6 shadow-lg duration-75 lg:transition-transform lg:hover:scale-105 lg:hover:shadow-[0_0_2px_#916618,0_0_10px_#916618]">
            <Image
                className="absolute -top-3 left-1/2 -z-20 opacity-10 max-lg:hidden lg:-translate-x-1/2"
                src="/assets/hexagons.webp"
                alt="nano-tech"
                width={220}
                height={220}
            />
            <Image
                // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                className="z-50 mx-auto mb-4 rounded-full border-2 border-[#916618] border-opacity-50"
                src={image}
                alt={name}
                width={160}
                height={160}
            />
            <h1 className="mb-2 text-center text-[20px] font-semibold text-[#332219]">{name}</h1>
            <p className="text-center text-[15px] font-medium text-[#916618]">{position}</p>
        </div>
    );
};

export default MemberCard;
