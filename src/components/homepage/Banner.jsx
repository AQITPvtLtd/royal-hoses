"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Banner() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay,
            },
        }),
    };

    return (
        <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <Image
                src="/banner/banner.jpeg"
                alt="Banner"
                fill
                className="object-cover brightness-[0.65]"
                priority
            />

            <div className="relative z-10 max-w-6xl mx-10 px-5">

                {/* Heading – Animate on scroll every time */}
                <motion.h1
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} // 👈 Repeats animation on every scroll
                    custom={0}
                    variants={fadeUp}
                    className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-5"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                    Innovative PVC Solutions for Every Industry
                </motion.h1>

                {/* Paragraph – delayed after heading */}
                <motion.p
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={0.2}
                    variants={fadeUp}
                    className="text-white md:text-lg leading-relaxed max-w-5xl md:mb-8 mb-4 text-sm"
                >
                    Royal Hoses, with state-of-the-art manufacturing facilities in the Middle East and extensive industry experience, specializes in high-quality PVC solutions for a wide range of applications. From irrigation, drainage, and landscaping in civil projects to plumbing, water storage, and dewatering in construction, and even meeting the demands of industries like chemicals, oil & gas, food & beverages, and automotive, our products are designed to deliver reliable performance across diverse sectors.
                </motion.p>

                {/* Button – delayed after paragraph */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={0.4}
                    variants={fadeUp}
                >
                    <Link href="/about">
                        <button className="px-6 cursor-pointer py-3 bg-[#172a55] text-white rounded-full text-sm md:text-base hover:bg-[#111e40] transition">
                            Know More
                        </button>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
