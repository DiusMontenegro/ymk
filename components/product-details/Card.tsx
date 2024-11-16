import Image from "next/image";
import React from "react";

interface Props {
    imgSrc: string;
    title: string;
}

const Card = ({ imgSrc, title }: Props) => {
    return (
        <div className="font-roboto flex h-[250px] w-[200px] cursor-pointer flex-col items-center justify-center rounded-md border border-[#f0da88] px-2 py-8 text-[15px] text-[#f0da88] hover:border-dashed hover:border-[#f0da88] md:h-[200px] md:w-[170px]">
            <Image className="mb-4" src={imgSrc} alt={title} width={48} height={48} />
            <h2 className="text-center text-[16px] font-semibold">{title}</h2>
        </div>
    );
};

export default Card;
