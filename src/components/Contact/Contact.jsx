'use client';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const ContactComponent = () => {
    const email = 'shreyansmehta362@gmail.com';

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub className="text-2xl" />,
            url: 'https://github.com/mehtashreyans3602',
            color: 'group-hover:text-white'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedinIn className="text-2xl" />,
            url: 'https://www.linkedin.com/in/shreyans-mehta-4b406a1b3/',
            color: 'group-hover:text-blue-400'
        },
        {
            name: 'Instagram',
            icon: <FaInstagram className="text-2xl" />,
            url: 'https://www.instagram.com/shreyans3602/',
            color: 'group-hover:text-pink-400'
        }
    ];

    return (
        <div className="w-full bg-black text-white py-24 px-6 md:px-16 flex flex-col items-center justify-center">

            {/* Section Header */}
            <div className="w-full max-w-5xl mb-12 flex flex-col items-start">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                    LET&apos;S<span className="text-neutral-500">.CONNECT</span>
                </h1>
                <div className="h-1 w-20 bg-blue-600 rounded-full mt-4"></div>
                <p className="text-neutral-500 text-sm mt-4">
                    Have a project in mind or just want to say hi? Feel free to reach out.
                </p>
            </div>

            {/* MAIN BENTO CARD */}
            <div className="w-full max-w-5xl bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">

                {/* Ambient Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center">

                    {/* Left Side: Primary CTA */}
                    <div className="flex-1 flex flex-col items-start">
                        <span className="px-4 py-1.5 bg-green-900/30 text-green-400 rounded-full text-xs font-medium border border-green-800/50 flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Available for work
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                            Let&apos;s build<br />
                            something <span className="text-neutral-500">great.</span>
                        </h2>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        {/* Email Button */}
                        <a
                            href={`mailto:${email}`}
                            className="group flex items-center gap-3 px-6 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-neutral-200 transition-all duration-300"
                        >
                            <FaEnvelope className="text-lg" />
                            <span>Drop me an Email</span>
                        </a>
                    </div>

                    {/* Divider (Desktop only) */}
                    <div className="hidden md:block w-[1px] h-48 bg-neutral-800"></div>
                    {/* Divider (Mobile only) */}
                    <div className="block md:hidden w-full h-[1px] bg-neutral-800"></div>

                    {/* Right Side: Social Grid */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-3 w-full">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-4 bg-black border border-neutral-800 rounded-2xl hover:border-neutral-600 hover:bg-neutral-800/50 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`text-neutral-500 transition-colors duration-300 ${social.color}`}>
                                        {social.icon}
                                    </span>
                                    <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                                        {social.name}
                                    </span>
                                </div>
                                {/* Arrow */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-neutral-600 transform group-hover:translate-x-1 group-hover:text-white transition-all duration-300"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;