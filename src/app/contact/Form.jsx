import React from 'react'

const Form = () => {
    return (
        <div>
            <form className="space-y-5">

                <div>
                    <label className="block text-[#293476] font-medium mb-1">Name *</label>
                    <input
                        type="text"
                        name='name'
                        className="w-full px-4 py-3 border text-black bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-[#293476]"
                        placeholder="Name"
                    />
                </div>

                <div>
                    <label className="block text-[#293476] font-medium mb-1">Email *</label>
                    <input
                        type="email"
                        name='email'
                        className="w-full px-4 py-3 border text-black bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-[#293476]"
                        placeholder="Email"
                    />
                </div>

                <div>
                    <label className="block text-[#293476] font-medium mb-1">Contact No. *</label>
                    <input
                        type="text"
                        name='phone'
                        className="w-full px-4 py-3 border text-black bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-[#293476]"
                        placeholder="Contact No."
                    />
                </div>

                <div>
                    <label className="block text-[#293476] font-medium mb-1">Message *</label>
                    <textarea
                        rows="3"
                        name='message'
                        className="w-full px-4 py-3 border text-black bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-[#293476]"
                        placeholder="Message"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 cursor-pointer bg-[#23306b] text-white rounded-md font-medium"
                >
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Form
