import React from 'react'
import Form from './Form'
import Info from './Info'
const Page = () => {
    return (
        <div>
            <div className='bg-[#293476]'>
                <h1 className='text-center text-3xl md:text-4xl font-semibold text-white py-16'>
                    CONTACT
                </h1>
            </div>
            <div className='bg-white px-5 md:px-10 space-y-10'>
                <section className="w-full px-4 md:px-10 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* LEFT SIDE */}
                        <div className="bg-white rounded-2xl overflow-hidden h-full shadow-sm">
                            <Info />
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="bg-[#fafafa] rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10">
                            <Form />
                        </div>

                    </div>
                </section>

                {/* Google Map */}
                <div className="w-full flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.3060573869056!2d55.102145699999994!3d24.989714199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f13d40897e5bd%3A0x54171f86794baa66!2sBright%20Choice%20Trading%20LLC!5e0!3m2!1sen!2sin!4v1763812004897!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </div>
    )
}

export default Page
