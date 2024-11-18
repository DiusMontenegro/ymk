import { Search, MessageCircle, CreditCard, CheckCircle, Truck } from "lucide-react";

// Navlinks
export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/product-details", label: "Product Details" },
    { href: "/about-us", label: "About" },
    { href: "/where-to-buy", label: "Where to Buy" },
];

export const features = [
    {
        imgSrc: "/assets/droplets.webp",
        title: "Deep Hydration and Enhanced Skin Moisture",
    },
    {
        imgSrc: "/assets/microscope.webp",
        title: "Advanced Nano⁺ Technology",
    },
    {
        imgSrc: "/assets/sprout.webp",
        title: "Stem Cells for Youthful Skin with Anti-Aging",
    },
    {
        imgSrc: "/assets/shield-plus.webp",
        title: "Protects Your Skin from UV Rays",
    },
];

export const reviews = [
    {
        name: "Emerlita Tampos",
        image: "/assets/emerlita.webp",
        location: "Kobe, Japan",
        title: "Radiant Skin, Every Day!",
        description:
            "YMK has completely transformed my skincare game. The anti-aging benefits are real my skin looks smoother and brighter. I love how gentle yet effective the products are. Highly recommend!",
    },
    {
        name: "Rea Revilleza",
        image: "/assets/rea.webp",
        location: "Pres. Roxas, Philippines",
        title: "Game-Changer for My Skin!",
        description:
            "I've been using YMK cosmetics, and the results are incredible! My skin feels deeply hydrated and looks more youthful. The lightweight formula is perfect for daily use, and it's now a staple in my routine.",
    },
    {
        name: "Jenny Morimoto",
        image: "/assets/jenny.webp",
        location: "Kobe, Japan",
        title: "Awesome Product",
        description:
            "I love YMK cosmetics! The hydration and anti-aging effects are amazing. The products feel lightweight, easy to use, and make my skin look radiant and healthy. It's definitely a go-to for my daily skincare routine!",
    },
];

export const faq = [
    {
        id: 1,
        question: "Is this lotion suitable for all skin types?",
        answer: "Yes, this lotion is formulated for various skin types. However, if you have very sensitive skin, it's best to do a patch test first to ensure compatibility.",
    },
    {
        id: 2,
        question: "Can this product be used by children 15 years old and below?",
        answer: "It is not recommended for children under 15 years old, as their skin may be more sensitive to certain active ingredients.",
    },
    {
        id: 3,
        question: "How often should I apply this lotion?",
        answer: "For best results, apply the lotion twice daily, once in the morning and once in the evening on a clean face. Make sure to reapply if you're exposed to prolonged sunlight.",
    },
    {
        id: 4,
        question: "Does it leave a greasy feeling on the skin?",
        answer: "No, this lotion is designed to absorb quickly without leaving a greasy residue, thanks to its lightweight, non-comedogenic formulation..",
    },
];

export const team = [
    { image: "/assets/melinda.webp", name: "Melinda Sakai", position: "CEO, Founder" },
    {
        image: "/assets/dius.webp",
        name: "Dius Montenegro",
        position: "Web Developer",
    },
];

export const steps = [
    { icon: Search, text: "Find a nearby seller" },
    { icon: MessageCircle, text: "Contact the seller via phone or messenger" },
    { icon: CreditCard, text: "Complete the payment" },
    { icon: CheckCircle, text: "Confirm that the delivery has been sent" },
    { icon: Truck, text: "Wait for the delivery" },
];

export const sellers = [
    {
        image: "/assets/sta-cruz.webp",
        location: "Sta. Cruz, Davao Del Sur",
        contactNumber: "+(63) 123-456-7890",
        personName: "Ana Liza Montenegro",
    },
    {
        image: "/assets/president-roxas.webp",
        location: "Pres. Roxas, North Cotabato",
        contactNumber: "+(63) 970-250-7447",
        personName: "Reyna Revilleza",
    },
    {
        image: "/assets/makilala.webp",
        location: "Makilala, North Cotabato",
        contactNumber: "+(63) 123-456-7890",
        personName: "April Jade Dapan",
    },
    {
        image: "/assets/kidapawan.webp",
        location: "Kidapawan, North Cotabato",
        contactNumber: "+(63) 123-456-7890",
        personName: "Ej tristan Bedia",
    },
];

export const quickLinks = [
    { name: "About Us", url: "/about-us" },
    { name: "Product Details", url: "/product-details" },
    { name: "Contact Us", url: "/where-to-buy/#contact-us" },
    { name: "Where to Buy", url: "/where-to-buy" },
];
