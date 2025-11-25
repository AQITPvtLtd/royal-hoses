import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
    { src: "/products/level-royal-hose.jpg", title: "Level Royal Hose", link: "/our-products/level-royal-hose" },
    { src: "/products/layflat-discharge-hose.jpg", title: "Layflat Discharge Hose", link: "/our-products/layflat-discharge-hose" },
    { src: "/products/fire-hoses-royal.jpg", title: "Fire Hoses Royal", link: "/our-products/royal-fire-hoses" },
    { src: "/products/garden-hose-high-pressure.jpg", title: "Garden Hose High Pressure", link: "/our-products/royal-reinforced-hose-high-pressure" },
    { src: "/products/layflat-dewatering-royal-hose.jpg", title: "Layflat Dewatering Royal Hose", link: "/our-products/layflat-dewatering-royal-hose" },
    { src: "/products/reinforced-garden-hose.jpg", title: "Reinforced Garden Hose", link: "/our-products/reinforced-garden-hose" },
    { src: "/products/gas-hose.jpg", title: "Gas Hose", link: "/our-products/gas-hose" },
    { src: "/products/pteroleum-hose.webp", title: "Pteroleum Hose", link: "https://docs.google.com/document/d/1rwJWIldj53OjH1eDt9a7JDKizLRutnl8/edit#heading=h.4166nxr3b5lo" },
    { src: "/products/air-hose.webp", title: "Air Hose", link: "https://docs.google.com/document/d/1rwJWIldj53OjH1eDt9a7JDKizLRutnl8/edit?tab=t.0" },
    { src: "/products/hydraulic-hose.webp", title: "Hydraulic Hose", link: "https://docs.google.com/document/d/1rwJWIldj53OjH1eDt9a7JDKizLRutnl8/edit?tab=t.0" },
];

const Products = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                    Our Products
                </h2>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            target={item.link.startsWith("http") ? "_blank" : "_self"}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 group block"
                        >
                            <div className="overflow-hidden rounded-lg">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mt-4 text-center" style={{ fontFamily: "Roboto Slab, serif" }}>
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
