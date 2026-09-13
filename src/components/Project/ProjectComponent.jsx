'use client'
import { useState } from "react";
import Data from "@/Data/projectData";
import ProjectCard from "./ProjectCard";

const FilterButton = ({ filter, activeFilter, onChange }) => {
    const isActive = filter === activeFilter;

    return (
        <button
            className={`px-5 py-2.5 min-w-max text-sm font-medium rounded-full transition-all duration-300 ease-in-out border
                ${isActive
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/50'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800'
                }`}
            onClick={() => onChange(filter)}
        >
            {filter}
        </button>
    );
};

const ProjectComponent = () => {
    // Sort data
    const SortedData = [...Data].sort((a, b) => a.ProjectName.localeCompare(b.ProjectName));

    const [activeFilter, setActiveFilter] = useState('Best-Work');

    // Filter data
    const filteredProjects = activeFilter === 'Best-Work'
        ? SortedData
        : SortedData.filter(project => project.Area.includes(activeFilter));

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full bg-black text-white py-16 md:py-24">

            {/* Header Section */}
            <div className="w-full max-w-6xl px-4 md:px-8 mb-10 flex flex-col items-start">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                    ALL<span className="text-neutral-500">.PROJECTS</span>
                </h1>
                <div className="h-1 w-20 bg-blue-600 rounded-full mt-4"></div>
            </div>

            {/* Filter Bar */}
            <div className="w-full max-w-6xl px-4 md:px-8 mb-8">
                {/* Scrollable container for mobile, centered on desktop */}
                <div className="flex md:justify-center justify-start gap-3 overflow-x-auto pb-4 hide-scrollbar whitespace-nowrap">
                    <FilterButton filter="Best-Work" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="FullStack" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="FrontEnd" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="BackEnd" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="MachineLearning" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="Web3" activeFilter={activeFilter} onChange={handleFilterChange} />
                </div>
            </div>

            {/* Projects Grid */}
            <div className="w-full max-w-6xl px-4 md:px-8">
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                ) : (
                    // Empty State (if filter returns no results)
                    <div className="w-full flex flex-col items-center justify-center py-20 bg-neutral-900 border border-neutral-800 rounded-3xl">
                        <span className="text-4xl mb-4">🔍</span>
                        <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
                        <p className="text-neutral-500 text-sm">Try selecting a different filter.</p>
                    </div>
                )}
            </div>

            {/* CSS to hide scrollbar for mobile filter row */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </div>
    )
}

export default ProjectComponent;