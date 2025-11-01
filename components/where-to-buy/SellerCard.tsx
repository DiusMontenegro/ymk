import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { MapPin, Phone, User } from "lucide-react";
import GetInTouchButton from "./GetInTouchButton";

interface Props {
    image: string;
    location: string;
    contactNumber: string;
    personName: string;
    fbProfile: string;
}

const SellerCard = ({ image, location, contactNumber, personName, fbProfile }: Props) => {
    return (
        <Card className="group flex h-full flex-col overflow-hidden border border-[#d6b97a] bg-white shadow-md transition-all duration-300 hover:border-[#916618] hover:shadow-lg">
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden bg-[#f7edd5]">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={location}
                    fill
                    className="object-cover transition-transform duration-300 lg:group-hover:scale-105" // only lg+
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100"></div>
            </div>

            {/* Content */}
            <CardContent className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-4">
                    {/* Location */}
                    <div className="flex items-start gap-3">
                        <MapPin className="mt-1 size-5 text-[#916618]" />
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#916618]">
                                Location
                            </p>
                            <p className="font-semibold text-[#916618]">{location}</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                        <Phone className="mt-1 size-5 text-[#916618]" />
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#916618]">
                                Phone
                            </p>
                            <a
                                href={`tel:${contactNumber}`}
                                className="font-semibold text-amber-900 transition-colors hover:text-[#7b5612]">
                                {contactNumber}
                            </a>
                        </div>
                    </div>

                    {/* Contact Person */}
                    <div className="flex items-start gap-3">
                        <User className="mt-1 size-5 text-[#916618]" />
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#916618]">
                                Contact Person
                            </p>
                            <p className="font-semibold text-[#916618]">{personName}</p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="mt-6">
                    <GetInTouchButton fbProfile={`${fbProfile}`} />
                </div>
            </CardContent>
        </Card>
    );
};

export default SellerCard;
