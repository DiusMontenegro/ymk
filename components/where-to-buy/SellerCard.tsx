import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { MapPin, Phone, User } from "lucide-react";

interface Props {
    image: string;
    location: string;
    contactNumber: string;
    personName: string;
}

const SellerCard = ({ image, location, contactNumber, personName }: Props) => {
    return (
        <Card className="text-gold overflow-hidden">
            <Image
                src={image}
                alt={location}
                width={400}
                height={200}
                className="h-48 w-full object-cover"
            />
            <CardContent className="p-4">
                <div className="mb-2 flex items-center">
                    <MapPin className="text-gold mr-2 size-5" />
                    <span className="font-semibold">{location}</span>
                </div>
                <div className="mb-2 flex items-center">
                    <Phone className="text-gold mr-2 size-5" />
                    <span>{contactNumber}</span>
                </div>
                <div className="flex items-center">
                    <User className="text-gold mr-2 size-5" />
                    <span>{personName}</span>
                </div>
            </CardContent>
        </Card>
    );
};

export default SellerCard;
