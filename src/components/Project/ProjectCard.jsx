// ProjectCard.js
"use client"
import React, { useState, useEffect } from 'react';

const ProjectCard = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <>
            {/* ========================================== */}
            {/* 1. THE BENTO CARD (Always visible in grid) */}
            {/* ========================================== */}
            <div
                onClick={() => setIsOpen(true)}
                className="relative flex flex-col justify-between bg-neutral-900 border border-neutral-800 rounded-3xl p-6 transition-all duration-300 hover:border-neutral-600 hover:-translate-y-1 hover:bg-neutral-800/80 cursor-pointer group h-full min-h-[220px]"
            >
                {/* Top Section: Icon & Title */}
                <div>
                    <div className="flex items-start justify-between mb-6">
                        {/* Project Icon */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-black border border-neutral-800 group-hover:border-blue-500/50 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>

                        {/* Expand Arrow */}
                        <div className="text-neutral-600 group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-white tracking-tight mb-3">
                        {project.ProjectName}
                    </h2>

                    {/* First line of description (truncated) */}
                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                        {project.ProjectDescription}
                    </p>
                </div>
            </div>

            {/* ========================================== */}
            {/* 2. THE FULL SCREEN MODAL (Only when open)  */}
            {/* ========================================== */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">

                    {/* Backdrop with Blur */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-700 rounded-3xl p-6 md:p-10 shadow-2xl transition-all duration-300 max-h-[90vh] overflow-y-auto hide-scrollbar">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-black border border-neutral-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.ProjectName}</h2>
                                <p className="text-blue-400 text-sm font-mono mt-1">Project Details</p>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="space-y-8">

                            {/* Tech Stack */}
                            {project.Technologies && project.Technologies.length > 0 && (
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.Technologies.map((tech) => (
                                            <span key={tech} className="px-3 py-1.5 bg-black border border-neutral-800 text-neutral-300 text-xs rounded-lg">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Areas */}
                            {project.Area && project.Area.length > 0 && (
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">Areas</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.Area.map((area) => (
                                            <span key={area} className="px-3 py-1.5 bg-blue-900/30 border border-blue-800/50 text-blue-400 text-xs rounded-lg">
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Full Description */}
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">Description</h3>
                                <p className="text-neutral-300 text-base leading-relaxed text-justify">
                                    {project.ProjectDescription}
                                </p>
                            </div>

                            {/* Links */}
                            <div className="pt-6 border-t border-neutral-800 flex flex-wrap gap-4">
                                {project.ProjectLink && project.ProjectLink !== "" && (
                                    <a
                                        href={project.ProjectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200 transition-colors"
                                    >
                                        Visit Live Project
                                    </a>
                                )}
                                {project.GithubLink && (
                                    <a
                                        href={project.GithubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-neutral-800 text-white text-sm font-bold rounded-full border border-neutral-700 hover:bg-neutral-700 transition-colors"
                                    >
                                        View Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;