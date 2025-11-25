"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="w-full border-b shadow-sm bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo/royale_hoses.png" // ← yaha apna logo daal dena
                        alt="Royal Hoses Logo"
                        width={70}
                        height={70}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    <Link href="/" className="text-[#172a55] font-bold hover:text-black transition">
                        HOME
                    </Link>
                    <Link href="/about" className="text-[#172a55] font-bold hover:text-black transition">
                        ABOUT
                    </Link>
                    <Link href="/our-products" className="text-[#172a55] font-bold hover:text-black transition">
                        OUR PRODUCTS
                    </Link>
                    <Link href="/contact" className="text-[#172a55] font-bold hover:text-black transition">
                        CONTACT
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#172a55]"
                    onClick={() => setNavOpen(!navOpen)}
                >
                    {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {navOpen && (
                <div className="md:hidden bg-white border-t shadow-sm">
                    <nav className="flex flex-col p-4 space-y-4">
                        <Link href="/" onClick={() => setNavOpen(false)} className="text-[#172a55] font-medium">
                            HOME
                        </Link>
                        <Link href="/about" onClick={() => setNavOpen(false)} className="text-[#172a55] font-medium">
                            ABOUT
                        </Link>
                        <Link href="/our-products" onClick={() => setNavOpen(false)} className="text-[#172a55] font-medium">
                            OUR PRODUCTS
                        </Link>
                        <Link href="/contact" onClick={() => setNavOpen(false)} className="text-[#172a55] font-medium">
                            CONTACT
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
