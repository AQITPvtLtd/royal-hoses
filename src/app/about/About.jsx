"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const About = () => {
    return (
        <div className="bg-white">

            {/* HEADER */}
            <div className='bg-[#293476]'>
                <motion.h1
                    className='text-center text-3xl md:text-4xl font-semibold text-white py-16'
                    style={{ fontFamily: "Roboto Slab, serif" }}
                    variants={{
                        hidden: { opacity: 0, y: -40 },
                        show: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} // 👈 repeat on scroll
                    transition={{ duration: 0.7 }}
                >
                    ABOUT
                </motion.h1>
            </div>

            {/* CONTENT SECTION */}
            <div className="max-w-5xl mx-auto px-5 py-14 space-y-6 text-gray-800 leading-relaxed text-[17px]">

                {/* Paragraph 1 */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <strong>‘BRIGHT CHOICE’</strong> is one of the companies in the RAV Group, which includes several
                    commercial and industrial companies. The first of these companies was founded by
                    <strong> Mr. Ravinder Singh</strong> in 1982, and since its establishment, it has relied on credibility
                    in its dealings.
                </motion.p>

                {/* Paragraph 2 */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    In addition to high quality in all its products and services, the RAV Group has gained
                    significant trust from its customers and suppliers in all the sectors it has worked in.
                    This has facilitated its regional and global spread.
                </motion.p>

                {/* Paragraph 3 */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    Rav Group established its first industry in the MENA region in 1992 and since then it
                    has expanded to other regions of the Gulf including UAE with a factory size of
                    <strong> 100,000 SQFT</strong> adding manufacturing lines of industrial grade Level Hose, Reinforced
                    Hose, Lay Flat Hose, Suction Hoses, High Grade Garden Pipe Hoses and Steel Wire Hose.
                </motion.p>

                {/* Paragraph 4 */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Rav Group, in cooperation with its sister concerns <strong>Bright Choice Trading LLC</strong> and
                    <strong> Ravankar Plastic LLC</strong> in UAE, has achieved becoming a one-stop-shop solution for all your:
                </motion.p>

                {/* Bullet List 1 */}
                <motion.ul
                    className='list-disc pl-6 space-y-1'
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                >
                    <li>Water Delivery</li>
                    <li>Dewatering</li>
                    <li>Construction</li>
                    <li>Irrigation</li>
                    <li>Delivery Hoses Solutions</li>
                </motion.ul>

                {/* Sub Heading */}
                <motion.h2
                    className="text-2xl font-semibold mt-10"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Our Core Values:
                </motion.h2>

                {/* Bullet List 2 */}
                <motion.ul
                    className="list-disc pl-6 space-y-1"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <li>Passion to grow</li>
                    <li>Integrity</li>
                    <li>Commitment</li>
                    <li>Great Quality</li>
                    <li>Customer Service</li>
                </motion.ul>

            </div>

        </div>
    );
};

export default About;
