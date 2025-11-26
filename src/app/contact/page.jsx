import React from 'react'
import Form from './Form'
import Info from './Info'
import Location from './Location'
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
                <div >
                    <Location />
                </div>

            </div>
        </div>
    )
}

export default Page
