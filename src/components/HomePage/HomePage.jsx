import Base from "@/components/Base/Base";
import ProjectCard from "@/components/Project/ProjectCard";
import AboutComponent from "@/components/About/AboutComponent";
import MyCredentials from "@/components/Credentials/MyCredentials";
import ContactComponent from "@/components/Contact/Contact";
import Data from "@/Data/projectData";
import Link from "next/link";

export default function HomePageComponent() {
    const SortedData = [...Data].sort((a, b) =>
        a.ProjectName.localeCompare(b.ProjectName)
    );

    return (
        <div className="bg-black w-full overflow-x-hidden min-h-screen text-white">

            {/* 1. Hero Section */}
            <section id="home">
                <Base />
            </section>

            {/* 2. About Bento Grid */}
            <section id="about">
                <AboutComponent />
            </section>

            {/* 3. My Credentials (Timeline + Certificates) */}
            <section id="credentials" className="w-full bg-black py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <MyCredentials />
                </div>
            </section>

            {/* 4. Projects Section */}
            <section id="projects" className="w-full bg-black py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 md:px-8">

                    {/* Section Header */}
                    <div className="w-full mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex flex-col items-start">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                                MY<span className="text-neutral-500">.WORK</span>
                            </h1>
                            <div className="h-1 w-20 bg-blue-600 rounded-full mt-4"></div>
                        </div>

                        <Link
                            href="/Project"
                            className="group flex items-center gap-2 px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-full text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-500 hover:bg-neutral-800 transition-all duration-300"
                        >
                            See All Projects
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
                        {SortedData.slice(0, 3).map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Contact Section */}
            <section id="contact">
                <ContactComponent />
            </section>

        </div>
    );
}