import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const roles = ['Full Stack Developer.', 'SQL Developer', "Data Engineer", 'React Developer.', 'Software Engineer.'];
const Base = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [prevRoleIndex, setPrevRoleIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevRoleIndex(currentRoleIndex);
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentRoleIndex]);

    return (
        <>
            {/* Animation Styles */}
            <style jsx global>{`
                @keyframes fadeSlideUp {
                    from { transform: translateY(0.5rem); opacity: 0; filter: blur(4px); }
                    to { transform: translateY(0); opacity: 1; filter: blur(0); }
                }
                @keyframes fadeSlideDown {
                    from { transform: translateY(0); opacity: 1; filter: blur(0); }
                    to { transform: translateY(-0.5rem); opacity: 0; filter: blur(4px); }
                }
                .role-visible { animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .role-exiting { animation: fadeSlideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>

            {/* FULL SCREEN HERO - CENTERED */}
            <div className="relative w-full min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 md:px-16 py-24 overflow-hidden">

                {/* Ambient Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

                {/* Main Content - Fully Centered */}
                <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">

                    {/* Status Line */}
                    <div className="flex items-center gap-2 mb-8">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-neutral-500 tracking-wide uppercase">
                            Available for work
                        </span>
                    </div>

                    {/* "Hi, I am" intro */}
                    <p className="text-xl md:text-2xl lg:text-3xl font-medium text-neutral-500 tracking-tight mb-4">
                        Hi, I am
                    </p>

                    {/* Massive Hero Name */}
                    <h1 className="text-[4.5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-bold tracking-tighter text-white leading-[0.9]">
                        Shreyans
                        <br />
                        <span className="text-neutral-500">Mehta.</span>
                    </h1>

                    {/* Animated Role Ticker */}
                    <div className="mt-10 flex flex-col md:flex-row md:items-center justify-center gap-2 md:gap-4 text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-neutral-400">
                        <span>A</span>
                        <span className="relative inline-flex flex-col text-blue-500 font-bold">
                            {roles.map((role, index) => {
                                let className = 'absolute left-0 top-0 whitespace-nowrap';
                                if (index === currentRoleIndex) {
                                    className += ' role-visible';
                                } else if (index === prevRoleIndex) {
                                    className += ' role-exiting';
                                } else {
                                    className += ' opacity-0 pointer-events-none';
                                }
                                return (
                                    <span key={index} className={className}>
                                        {role}
                                    </span>
                                );
                            })}
                            {/* Invisible spacer for layout stability */}
                            <span className="invisible font-bold whitespace-nowrap" aria-hidden="true">
                                Full Stack Developer.
                            </span>
                        </span>
                    </div>

                    {/* Social Icons - Centered under the content */}
                    <div className="flex items-center justify-center gap-8 mt-16">
                        <a
                            href="https://github.com/mehtashreyans3602"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-blue-500 transition-all duration-300 hover:-translate-y-1"
                            aria-label="GitHub"
                        >
                            <FaGithub className="text-2xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shreyans-mehta-4b406a1b3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-blue-500 transition-all duration-300 hover:-translate-y-1"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn className="text-2xl" />
                        </a>
                        <a
                            href="https://www.instagram.com/shreyans3602/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-blue-500 transition-all duration-300 hover:-translate-y-1"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Base;