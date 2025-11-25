"use client";
import React from "react";
import Link from "next/link";
import { HiOutlinePhone, HiOutlineLocationMarker, HiOutlineUser } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="bg-white w-full border-t pt-12">

            {/* MAIN GRID */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* COLUMN 1 - RavGroup */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700" style={{ fontFamily: "Roboto Slab, serif" }}>RavGroup</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        <span className="font-semibold">Rav Group</span> was created to manage
                        the company’s manufacturing, trading, retail & real estate businesses
                        and to provide for strategic direction for their growth.
                    </p>
                </div>

                {/* COLUMN 2 - Sub-Companies */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700" style={{ fontFamily: "Roboto Slab, serif" }}>Sub-Companies</h3>

                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>
                            <Link href="#" className="hover:text-gray-900 transition">
                                Bright Choice Trading LLC
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-gray-900 transition">
                                Royale Hoses
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* COLUMN 3 - Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700" style={{ fontFamily: "Roboto Slab, serif" }}>Quick Links</h3>

                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>
                            <Link href="/about" className="hover:text-gray-900 transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/our-products" className="hover:text-gray-900 transition">
                                Our Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-900 transition">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* COLUMN 4 - Reach Out to Us */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700" style={{ fontFamily: "Roboto Slab, serif" }}>Reach Out to Us</h3>

                    <div className="space-y-3 text-gray-700 text-sm">

                        {/* Company */}
                        <div>
                            <Link href="https://maps.app.goo.gl/h64g8Lk9R5PiAicM9" target="_blank" className="hover:text-gray-900 flex items-start space-x-3">
                                <HiOutlineUser className="text-lg mt-1" />
                                <span>Bright Choice Trading LLC</span>
                            </Link>
                        </div>

                        {/* Address */}
                        <div className="flex items-start space-x-3">
                            <HiOutlineLocationMarker className="text-lg mt-1" />
                            <span>
                                <Link href="https://maps.app.goo.gl/h64g8Lk9R5PiAicM9" target="_blank" className="hover:text-gray-900">
                                    Jebel Ali Industrial Area -1 Dubai – U.A.E
                                </Link>
                            </span>
                        </div>

                        {/* Phones */}
                        <div className="flex items-start space-x-3">
                            <HiOutlinePhone className="text-lg mt-1" />
                            <Link href="tel:0097148856117" className="hover:text-gray-900">
                                009714-8856117
                            </Link>
                        </div>

                        <div className="flex items-start space-x-3">
                            <HiOutlinePhone className="text-lg mt-1" />
                            <Link href="tel:00971554812800" className="hover:text-gray-900">
                                0097155-4812800
                            </Link>
                        </div>

                    </div>
                </div>

            </div>

            {/* COPYRIGHT BAR */}
            <div className="mt-10 w-full bg-black py-3">
                <p className="text-center text-white text-sm">
                    Copyright @RavGroup 2024. All Rights Reserved.
                </p>
            </div>

        </footer>
    );
};

export default Footer;
