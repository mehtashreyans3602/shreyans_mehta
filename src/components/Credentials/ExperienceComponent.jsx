// @/components/Experience/ExperienceComponent.jsx
'use client';
import React, { useState } from 'react';
import InternshipsData from '@/Data/internshipData';

const ExperienceComponent = () => {
    const internships = InternshipsData;

    const [activeId, setActiveId] = useState(internships[0].id);
    const active = internships.find((i) => i.id === activeId);

    const accentMap = {
        blue: {
            dot: "bg-blue-500",
            text: "text-blue-400",
            border: "border-blue-800/50",
            bg: "bg-blue-900/20",
            glow: "bg-blue-600/10",
        },
        green: {
            dot: "bg-green-500",
            text: "text-green-400",
            border: "border-green-800/50",
            bg: "bg-green-900/20",
            glow: "bg-green-600/10",
        },
        purple: {
            dot: "bg-purple-500",
            text: "text-purple-400",
            border: "border-purple-800/50",
            bg: "bg-purple-900/20",
            glow: "bg-purple-600/10",
        },
    };

    return (
        <div className="w-full">

            {/* SECTION SUB-HEADER */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                        <span className="bg-blue-600 w-3 h-3 rounded-full"></span>
                        Internships & Experience
                    </h2>
                    <p className="text-neutral-500 text-sm mt-1">My professional journey and the experiences I&apos;ve gained.</p>
                </div>
            </div>


            {/* BENTO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full auto-rows-min">

                {/* 1. ACTIVE INTERNSHIP DETAIL CARD */}
                <div className="md:col-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
                    <div
                        className={`absolute top-0 right-0 w-64 h-64 ${accentMap[active.accent].glow} rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none`}
                    />

                    <div className="z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`${accentMap[active.accent].dot} w-3 h-3 rounded-full animate-pulse`} />
                            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                                {active.type}
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold mb-1 text-white">
                            {active.role}
                        </h2>
                        <p className={`text-sm md:text-base font-medium ${accentMap[active.accent].text} mb-1`}>
                            {active.company}
                        </p>
                        <p className="text-xs text-neutral-500 font-mono mb-6">
                            📍 {active.location} &nbsp;·&nbsp; 🗓 {active.period}
                        </p>

                        <p className="text-neutral-300 leading-relaxed text-sm md:text-base mb-6">
                            {active.description}
                        </p>

                        <div className="space-y-3">
                            {active.highlights.map((h, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${accentMap[active.accent].dot}`} />
                                    <p className="text-neutral-400 text-sm leading-relaxed">{h}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech pills */}
                    <div className="mt-8 flex flex-wrap gap-2 z-10">
                        {active.tech.map((t, i) => (
                            <span
                                key={i}
                                className={`px-3 py-1 text-xs rounded-lg border ${accentMap[active.accent].border} ${accentMap[active.accent].bg} ${accentMap[active.accent].text}`}
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 2. INTERNSHIP SELECTOR CARD */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:row-span-2 flex flex-col">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
                            Timeline
                        </h3>
                        <div className="h-1 w-12 bg-white rounded" />
                    </div>

                    <div className="flex flex-col gap-3">
                        {internships.map((item) => {
                            const isActive = item.id === activeId;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveId(item.id)}
                                    className={`text-left p-4 rounded-2xl border transition-all duration-200 ${isActive
                                        ? "bg-neutral-800 border-neutral-600"
                                        : "bg-black border-neutral-800 hover:border-neutral-600"
                                        }`}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <span
                                            className={`w-2 h-2 rounded-full ${isActive ? accentMap[item.accent].dot : "bg-neutral-600"
                                                }`}
                                        />
                                        <p
                                            className={`text-sm font-semibold ${isActive ? "text-white" : "text-neutral-300"
                                                }`}
                                        >
                                            {item.role}
                                        </p>
                                    </div>
                                    <p className="text-xs text-neutral-500 ml-4 mb-1">{item.company}</p>
                                    <p className="text-[10px] font-mono text-neutral-600 ml-4 uppercase tracking-wider">
                                        {item.period}
                                    </p>
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-auto pt-6">
                        <div className="p-4 bg-neutral-800/50 rounded-2xl border border-neutral-700/50">
                            <p className="text-xs text-neutral-400 font-mono">
                                &quot;First, solve the problem. Then, write the code.&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. STATS CARD */}
                <div className="bg-gradient-to-br from-blue-900 to-indigo-900 border border-blue-800 rounded-3xl p-6 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                            backgroundSize: "10px 10px",
                        }}
                    />
                    <div className="z-10 relative">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">{internships.length}</h3>
                        <p className="text-blue-200 text-sm">
                            Internships across data, IoT, and web.
                        </p>
                    </div>
                </div>

                {/* 4. FOCUS CARD (now dynamic) */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
                    <h3 className="text-neutral-500 text-sm font-bold uppercase tracking-widest mb-1">
                        Focus Area
                    </h3>
                    <p className={`text-3xl font-bold mb-2 ${accentMap[active.accent].text}`}>
                        {active.focus.label}
                    </p>
                    <p className="text-xs text-neutral-400">
                        {active.focus.note}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ExperienceComponent;