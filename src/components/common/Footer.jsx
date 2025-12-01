"use client";
import React from "react";
import Link from "next/link";
import { HiOutlinePhone, HiOutlineLocationMarker, HiOutlineUser } from "react-icons/hi";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
    return (
        <footer className="bg-white w-full border-t pt-12">
            {/* MAIN GRID */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-4">
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700" style={{ fontFamily: "Roboto Slab, serif" }}>RavGroup</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        <span className="font-semibold">Rav Group</span> was created to manage
                        the company’s manufacturing, trading, retail & real estate businesses
                        and to provide for strategic direction for their growth.
                    </p>


                    <nav className="flex flex-col p-4 space-y-2">

                        <div className="flex items-center gap-4">


                            <Link
                                href="https://www.facebook.com/people/Royal-Hoses/61583936131671/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
                            >
                                <FaFacebookF size={20} className="text-[#1877F2]" />
                            </Link>

                            <Link
                                href="https://www.instagram.com/royal_hoses/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
                            >
                                <FaInstagram size={20} className="text-[#E4405F]" />
                            </Link>

                            <Link
                                href="https://maps.app.goo.gl/ipp9yB6UTN1QerEZ6"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
                            >
                                <FcGoogle size={20} />
                            </Link>
                        </div>
                    </nav>

                </div>

                {/* COLUMN 2 - Sub-Companies */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-700" style={{ fontFamily: "Roboto Slab, serif" }}>Sub-Companies</h3>

                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>
                            <Link href="https://brightchoice.tekbooster.com/" className="hover:text-gray-900 transition">
                                Bright Choice Trading LLC
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-gray-900 transition">
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
            <div className='text-center text-white bg-[#172a55] py-1.5'>
                <p className='font-semibold text-sm md:text-base'>
                    <Link href='https://tekbooster.com' target='_blank' style={{ fontFamily: "Roboto Slab, serif" }}>
                        Design & Developed By Tek Booster <br className="block md:hidden" /> (Digital Marketing Company)
                    </Link>
                </p>
                {/* <p className='font-semibold text-sm md:text-base' style={{ fontFamily: "Roboto Slab, serif" }}>
                    (Powered by AQIT Pvt Ltd)
                </p> */}
            </div>

        </footer>
    );
};

export default Footer;
