"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full border-b bg-white z-50 fixed top-0 left-0 transition-all duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"
                }`}
        >
            <div
                className={`
                    max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between 
                    transition-all duration-300
                    ${isScrolled ? "py-2" : "py-4"}
                `}
            >
                {/* Logo (Shrink on scroll) */}
                <Link href="/" aria-label="Home">
                    <Image
                        src="/logo/royale_hoses.png"
                        alt="Royal Hoses Logo"
                        width={isScrolled ? 60 : 90}
                        height={isScrolled ? 60 : 90}
                        className="object-contain transition-all duration-300"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10 mx-auto transition-all duration-300">
                    <Link href="/" className="text-[#172a55] font-bold hover:text-black transition">HOME</Link>
                    <Link href="/about" className="text-[#172a55] font-bold hover:text-black transition">ABOUT</Link>
                    <Link href="/our-products" className="text-[#172a55] font-bold hover:text-black transition">OUR PRODUCTS</Link>
                    <Link href="/contact" className="text-[#172a55] font-bold hover:text-black transition">CONTACT</Link>
                </nav>

                {/* Social Icons (Shrink slightly on scroll) */}
                <div className={`hidden md:flex items-center gap-4 transition-all duration-300`}>
                    <Link
                        href="https://www.instagram.com/royal_hoses/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className={`rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition
                            ${isScrolled ? "w-8 h-8" : "w-10 h-10"}
                        `}
                    >
                        <FaInstagram size={isScrolled ? 16 : 20} className="text-[#E4405F]" />
                    </Link>

                    <Link
                        href="https://www.facebook.com/people/Royal-Hoses/61583936131671/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className={`rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition
                            ${isScrolled ? "w-8 h-8" : "w-10 h-10"}
                        `}
                    >
                        <FaFacebookF size={isScrolled ? 16 : 20} className="text-[#1877F2]" />
                    </Link>
                    <Link
                        href="https://maps.app.goo.gl/ipp9yB6UTN1QerEZ6"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className={`rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition
                            ${isScrolled ? "w-8 h-8" : "w-10 h-10"}
                        `}
                    >
                        <FcGoogle size={isScrolled ? 16 : 20} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#172a55]"
                    onClick={() => setNavOpen(!navOpen)}
                    aria-label={navOpen ? "Close menu" : "Open menu"}
                >
                    {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {navOpen && (
                <div className="md:hidden bg-white border-t shadow-sm">
                    <nav className="flex flex-col p-4 space-y-4">
                        <Link href="/" onClick={() => setNavOpen(false)} className="text-[#172a55] font-medium">HOME</Link>
                        <Link href="/about" onClick={() => setNavOpen(false)} className="text-[#172a55] font-medium">ABOUT</Link>
                        <Link href="/our-products" onClick={() => setNavOpen(false)} className="text-[#172a55] font-medium">OUR PRODUCTS</Link>
                        <Link href="/contact" onClick={() => setNavOpen(false)} className="text-[#172a55] font-medium">CONTACT</Link>

                        {/* Mobile Social Icons */}
                        <div className="flex items-center gap-4 pt-4">
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
                                href="https://www.facebook.com/people/Royal-Hoses/61583936131671/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
                            >
                                <FaFacebookF size={20} className="text-[#1877F2]" />
                            </Link>

                            <Link
                                href="https://maps.app.goo.gl/ipp9yB6UTN1QerEZ6"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className={`rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition
                            ${isScrolled ? "w-8 h-8" : "w-10 h-10"}
                        `}
                            >
                                <FcGoogle size={isScrolled ? 16 : 20} />
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
