"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa6";
import { motion } from "framer-motion";

const Info = () => {

    // Fade-up animation for heading & text
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    // Stagger for links
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
        }),
    };

    return (
        <div className="relative w-full h-[500px] md:h-full overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <Image
                src="/banner/banner.jpeg"
                alt="Contact Banner"
                fill
                className="object-cover rounded-2xl brightness-50"
            />

            {/* OVERLAY CONTENT */}
            <div className="absolute inset-0 p-10 flex flex-col justify-center text-white space-y-4">

                {/* HEADING */}
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-3xl md:text-4xl font-bold"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                    Reach Out to Us
                </motion.h1>

                {/* PARAGRAPH */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-lg text-sm md:text-base leading-relaxed"
                >
                    Fill out the form if you've any query and our team will get in touch with you
                </motion.p>

                {/* CONTACT DETAILS */}
                <div className="space-y-3 mt-2">

                    {/* PHONE */}
                    <motion.div
                        custom={0}
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex items-center space-x-3"
                    >
                        <div className="text-xl"><IoIosCall /></div>
                        <Link href="tel:00971554812800" className="text-lg">
                            0097155-4812800
                        </Link>
                    </motion.div>

                    {/* EMAIL */}
                    <motion.div
                        custom={1}
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex items-center space-x-3"
                    >
                        <div className="text-xl"><MdEmail /></div>
                        <Link href="mailto:sales@royalehoses.com" className="text-lg">
                            sales@royalehoses.com
                        </Link>
                    </motion.div>

                    {/* WEBSITE */}
                    <motion.div
                        custom={2}
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex items-center space-x-3"
                    >
                        <div className="text-xl"><FaGlobe /></div>
                        <Link href="https://ravgrp.com" target="_blank" className="text-lg">
                            ravgrp.com
                        </Link>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Info;
