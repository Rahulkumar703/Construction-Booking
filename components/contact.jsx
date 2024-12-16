import React from 'react'
import ContactForm from './contact-form'
import Image from 'next/image'

const Contact = () => {
    return (
        <section className="flex flex-col items-center gap-10 p-6 mt-10 scroll-mt-20" id="contact">
            <h1 className="text-4xl font-black">Contact Us</h1>
            <div className="grid md:grid-cols-2 w-full">
                <ContactForm />
                <div className="p-6 relative md:flex items-center justify-center hidden">
                    <Image src={'/contact.svg'} width={800} height={800} objectFit="contain" alt="Contact us" />
                </div>
            </div>
        </section>
    )
}

export default Contact