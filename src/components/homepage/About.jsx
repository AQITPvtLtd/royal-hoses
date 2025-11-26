"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {

    // Left to Right Animation
    const leftToRight = {
        hidden: { opacity: 0, x: -50 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    // Right to Left Animation
    const rightToLeft = {
        hidden: { opacity: 0, x: 50 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="w-full py-12 px-5 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT BOX */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} // repeats on scroll
                    variants={leftToRight}
                    className="bg-[#fafafa] border border-gray-200 p-6 md:p-10 rounded-4xl shadow-sm"
                >
                    <h1
                        className="font-bold text-2xl md:text-3xl text-[#293476] mb-4"
                        style={{ fontFamily: "Roboto Slab, serif" }}
                    >
                        ABOUT US
                    </h1>

                    <p className="text-[#293476] leading-relaxed">
                        ‘BRIGHT CHOICE’ is one of the companies in the RAV Group, which includes
                        several commercial and industrial companies.
                    </p>
                    <p className="text-[#293476] leading-relaxed mb-4">
                        The first of these companies was founded by Mr. Ravinder Singh in 1982, and
                        since its establishment, it has relied on credibility in its dealings.
                    </p>

                    <p className="text-[#293476] leading-relaxed mb-6">
                        In addition to high quality in all its products and services, the RAV Group
                        has gained significant trust from its customers and suppliers in all the
                        sectors it has worked in. This has facilitated its regional and global spread.
                    </p>

                    <button className="px-6 py-3 bg-[#172a55] text-white rounded-full text-sm md:text-base hover:bg-[#111e40] transition">
                        Know More
                    </button>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={rightToLeft}
                    className="flex justify-center"
                >
                    <Image
                        src="/about/about.jpg"
                        alt="About Us"
                        width={600}
                        height={500}
                        className="object-cover rounded-3xl shadow-md"
                        priority
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default About;
