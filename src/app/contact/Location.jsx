"use client";
import React from "react";
import { motion } from "framer-motion";

const Location = () => {
    return (
        <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, y: 80 }}      // 👈 starts from down
            whileInView={{ opacity: 1, y: 0 }}  // 👈 moves up smoothly
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}  // 👈 repeat on scroll
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.3060573869056!2d55.102145699999994!3d24.989714199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f13d40897e5bd%3A0x54171f86794baa66!2sBright%20Choice%20Trading%20LLC!5e0!3m2!1sen!2sin!4v1763812004897!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </motion.div>
    );
};

export default Location;
