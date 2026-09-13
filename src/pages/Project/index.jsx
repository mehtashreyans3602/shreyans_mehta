'use client';
import Header from "@/components/Header/Header";
import ProjectComponent from "@/components/Project/ProjectComponent";
import Link from "next/link";

const Project = () => {
    return (
        <>

            <div className="bg-black w-full min-h-screen text-white pb-32">

                {/* Back to Home Button */}
                <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-full text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-500 hover:bg-neutral-800 transition-all duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>

                <ProjectComponent />
            </div>
        </>
    );
};

export default Project;