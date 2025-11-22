import Image from "next/image";

export default function Banner() {
    return (
        <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center">

            {/* Background Image */}
            <Image
                src="/banner/banner.jpeg"   // ← Replace with your actual image path
                alt="Banner"
                fill
                className="object-cover brightness-[0.65]"
                priority
            />

            {/* Content Overlay */}
            <div className="relative z-10 max-w-6xl mx-10 px-5">
                <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-5">
                    Innovative PVC Solutions for Every Industry
                </h1>

                <p className="text-white md:text-lg leading-relaxed max-w-5xl mb-8">
                    Royal Hoses, with state-of-the-art manufacturing facilities in the Middle East and
                    extensive industry experience, specializes in high-quality PVC solutions for a wide range
                    of applications. From irrigation, drainage, and landscaping in civil projects to plumbing,
                    water storage, and dewatering in construction, and even meeting the demands of industries
                    like chemicals, oil & gas, food & beverages, and automotive, our products are designed to
                    deliver reliable performance across diverse sectors.
                </p>

                {/* Button */}
                <button className="px-6 py-3 bg-[#172a55] text-white rounded-full text-sm md:text-base hover:bg-[#111e40] transition">
                    Know More
                </button>
            </div>

        </section>
    );
}
