import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa6";

const Info = () => {
    return (
        <div className="relative w-full h-[500px] md:h-full">

            {/* BACKGROUND IMAGE */}
            <Image
                src="/banner/banner.jpeg"
                alt="Contact Banner"
                fill
                className="object-cover rounded-2xl brightness-50"
            />

            {/* OVERLAY CONTENT */}
            <div className="absolute inset-0 p-10 flex flex-col justify-center text-white">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-3"
                        style={{ fontFamily: "Roboto Slab, serif" }}
                    >
                        Reach Out to Us
                    </h1>

                    <p className="max-w-lg text-sm md:text-base leading-relaxed">
                        Fill out the form if you've any query and our team will get in touch with you
                    </p>
                </div>

                {/* CONTACT DETAILS */}
                <div className="space-y-3 mt-4">

                    <div className="flex items-center space-x-3">
                        <div className="text-xl">
                            <IoIosCall />
                        </div>
                        <Link href="tel:00971554812800" className='text-lg'>
                            0097155-4812800
                        </Link>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="text-xl">
                            <MdEmail />
                        </div>
                        <Link href="mailto:sales@royalehoses.com" className='text-lg'>
                            sales@royalehoses.com
                        </Link>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="text-xl">
                            <FaGlobe />
                        </div>
                        <Link href="https://ravgrp.com" target="_blank" className='text-lg'>
                            ravgrp.com
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
