import Info from '@/app/contact/Info'
import Form from '@/app/contact/Form'
import React from 'react'

const Contact = () => {
    return (
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
    )
}

export default Contact
