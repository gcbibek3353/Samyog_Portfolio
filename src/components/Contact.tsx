'use client'
import { useState } from 'react';
import { Mail, User, MessageCircle } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Replace these with your actual EmailJS details
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            toast.success('Message sent successfully!');

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Failed to send email:', error);
            toast.error('Failed to send message. Please try again.');
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center flex-col bg-black px-4 md:px-8 lg:px-16 relative opacity-80" id="contact">
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: '#333',
                        color: '#fff',
                    }
                }}
            />
    
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10 md:mb-16">
                Contact Me
            </h2>
    
            {/* Main Container */}
            <div className="max-w-4xl mx-auto bg-[#1a1f2e] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
    
                    {/* Contact Info Section */}
                    <div className="bg-[#121622] p-6 md:p-10 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Contact Me</h2>
                        <p className="text-white/70 mb-4 md:mb-6 text-sm md:text-base">
                            Feel free to reach out. I&apos;m always open to discussing new projects,
                            creative ideas, or opportunities to collaborate.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="text-white/70" />
                                <span className="text-white/80 text-sm md:text-base">samyog.ghimire25@gmail.com</span>
                            </div>
                        </div>
                    </div>
    
                    {/* Form Section */}
                    <div className="p-6 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                            {/* Name Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="text-white/50" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                    className="w-full bg-[#121622] text-white pl-10 pr-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
    
                            {/* Email Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="text-white/50" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Email"
                                    className="w-full bg-[#121622] text-white pl-10 pr-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
    
                            {/* Message Input */}
                            <div className="relative">
                                <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                                    <MessageCircle className="text-white/50" />
                                </div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full bg-[#121622] text-white pl-10 pr-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
    
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
    
};

export default ContactPage;