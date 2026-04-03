import React, { useState } from 'react'
import Inputfield from './common/Inputfield'
import email from 'emailjs-com'
import contactimg from '../../assets/contact_color.png'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const social = [
    {
        icon: FaTwitter,
        link: ''
    },
    {
        icon: FaGithub,
        link: 'https://github.com/Hirendrabhoi'
    },
    {
        icon: FaLinkedin,
        link: ''
    }
]
const Contacts = () => {
    const [form, setForm] = useState({
        email: '',
        message: '',
        name: '',
        phone: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(form)

        if (form.email === '' && form.name === '' && form.message === '' & form.phone === '') {
            alert('fill the form first.')
            return
        }

        email.send(
            "service_6earxlq",
            "template_0f1jzqa",
            {
                name: form.name,
                email: form.email,
                phone: form.phone,
                message: form.message
            },
            "d6gIwzySQBE7HN7yh"
        ).then(() => {
            console.log('message send sucessfully')
        }).catch(() => {
            console.log('there something wrong in sending the mail')
        })

        setForm({
            email: '',
            message: '',
            name: '',
            phone: ''
        })
    }
    return (
        <section id="contact" className="w-full py-20 bg-[#020617] px-4 mb-10">

            <div className="max-w-4xl mx-auto flex flex-col gap-y-4">

                {/* HEADER */}
                <div className="text-center md:mb-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Contact <span className="text-yellow-400">Me</span>
                    </h2>
                    <p className="text-gray-400 mt-3">
                        Have a project or opportunity? Let’s connect.
                    </p>
                </div>

                <div className='w-full mt-10'>
                    {/* FORM */}
                    <div className='w-full '>

                        <form
                            onSubmit={handleSubmit}
                            className="bg-[#0f172a] p-6 md:p-8 rounded-2xl 
      border border-yellow-500/20 shadow-[0_0_40px_rgba(250,204,21,0.08)] 
      space-y-6 backdrop-blur-md"
                        >

                            {/* TITLE */}
                            <div className='mb-4'>
                                <h2 className='text-2xl md:text-3xl font-bold text-white'>
                                    Get in <span className='text-yellow-400'>Touch</span>
                                </h2>
                                <p className='text-gray-400 text-sm mt-1'>
                                    Feel free to reach out anytime
                                </p>
                            </div>

                            {/* INPUTS */}
                            <Inputfield
                                label="Your Name"
                                type="text"
                                name="name"
                                value={form.name}
                                onchange={handleChange}
                            />

                            <Inputfield
                                label="Your Email"
                                type="email"
                                name="email"
                                value={form.email}
                                onchange={handleChange}
                            />

                            <Inputfield
                                label="Phone Number"
                                type="text"
                                name="phone"
                                value={form.phone}
                                onchange={handleChange}
                            />

                            <Inputfield
                                type="textarea"
                                label="Your Message"
                                name="message"
                                rows={'4'}
                                value={form.message}
                                onchange={handleChange}
                            />

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-yellow-400 text-black rounded-lg 
        font-semibold transition-all duration-300 
        hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>
                </div>

                <div className='flex gap-3 md:hidden justify-center '>
                    {social.map((item, i) => {
                        const Icon = item.icon
                        return (
                            <a
                                href={item.link}
                                target='blank'
                                key={i}
                                className='bg-[#e24833] p-3 rounded-full 
          hover:ring-4 hover:ring-yellow-400 
          transition-all duration-200 flex items-center justify-center'>
                                <Icon size={20} color='white' />
                            </a>
                        )
                    }
                    )}
                </div>
            </div>
        </section>
    )
}

export default Contacts