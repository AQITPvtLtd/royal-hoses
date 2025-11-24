"use client"
import React, { useState } from 'react'
import { form } from '@/services/contact'
import Swal from 'sweetalert2'
import { ClipLoader } from 'react-spinners'

const Form = () => {
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const formData = new FormData(e.target)

            // Validation
            const name = formData.get('name')
            const email = formData.get('email')
            const phone = formData.get('phone')
            const message = formData.get('message')

            if (!name || !email || !phone || !message) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Missing Fields',
                    text: 'Please fill all required fields!',
                    confirmButtonColor: '#23306b'
                })
                setLoading(false)
                return
            }

            // API Call
            const result = await form(formData)

            if (result?.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your message has been sent successfully!',
                    confirmButtonColor: '#23306b'
                })
                e.target.reset() // Form reset
            } else {
                throw new Error('Failed to send message')
            }

        } catch (error) {
            console.error('Form submission error:', error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to send message. Please try again!',
                confirmButtonColor: '#23306b'
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <form className="space-y-5" onSubmit={handleSubmit}>

                <div>
                    <label className="block text-[#293476] font-medium mb-1">Name *</label>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 border text-black bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-[#293476] disabled:opacity-60"
                        placeholder="Name"
                    />
                </div>

                <div>
                    <label className="block text-[#293476] font-medium mb-1">Email *</label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 border text-black bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-[#293476] disabled:opacity-60"
                        placeholder="Email"
                    />
                </div>

                <div>
                    <label className="block text-[#293476] font-medium mb-1">Contact No. *</label>
                    <input
                        type="text"
                        name='phone'
                        id='phone'
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 border text-black bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-[#293476] disabled:opacity-60"
                        placeholder="Contact No."
                    />
                </div>

                <div>
                    <label className="block text-[#293476] font-medium mb-1">Message *</label>
                    <textarea
                        rows="3"
                        name='message'
                        id='message'
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 border text-black bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-[#293476] disabled:opacity-60"
                        placeholder="Message"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#23306b] text-white cursor-pointer rounded-md font-medium hover:bg-[#293476] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <ClipLoader color="#ffffff" size={20} />
                            <span>Processing...</span>
                        </>
                    ) : (
                        'Submit'
                    )}
                </button>

            </form>
        </div>
    )
}

export default Form