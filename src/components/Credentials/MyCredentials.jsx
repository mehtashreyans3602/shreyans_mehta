'use client';
import React from 'react';
import Journey from '@/Data/Journey';
import CertificatesComponent from "@/components/Certificates/CertificatesComponent";

const MyCredentials = () => {
    return (
        <div className="md:col-span-2 lg:col-span-3 mt-4 pt-8 border-t border-neutral-800/50">

            {/* ======================================================== */}
            {/* SECTION HEADER */}
            {/* ======================================================== */}
            <div className="w-full mb-8">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                    MY<span className="text-neutral-500">.CREDENTIALS</span>
                </h1>
            </div>

            {/* ======================================================== */}
            {/* 1. TIMELINE */}
            {/* ======================================================== */}
            <div
                className="w-full overflow-x-auto pb-8 pt-4 hide-scrollbar"
                style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
                {/* Inner Timeline Grid */}
                <div className="relative flex flex-row gap-6 min-w-max md:min-w-0 md:grid md:grid-cols-3 lg:grid-cols-4">

                    {/* The continuous horizontal line (Desktop) */}
                    <div className="absolute top-[22px] left-8 right-8 h-[2px] bg-gradient-to-r from-blue-600/50 via-neutral-800 to-transparent hidden md:block"></div>
                    {/* Mobile line */}
                    <div className="absolute top-[22px] left-8 w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-blue-600/50 via-neutral-800 to-transparent md:hidden"></div>

                    {Journey.map((data, index) => (
                        <div key={index} className="relative flex flex-col w-[280px] md:w-auto group min-w-0">

                            {/* Timeline Dot */}
                            <div className="flex items-center mb-6 relative z-10">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl group-hover:border-blue-500 transition-colors duration-300">
                                    <span className="text-lg">💼</span>
                                </div>
                            </div>

                            {/* Timeline Card */}
                            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-800/80 group-hover:-translate-y-1 flex-1 flex flex-col min-w-0 overflow-hidden">
                                <span className="inline-flex w-fit items-center px-2.5 py-1 rounded-full bg-blue-900/30 text-blue-400 text-[10px] md:text-xs font-mono border border-blue-800/50 mb-4">
                                    {data.positionTime}
                                </span>

                                <h3 className="text-base md:text-lg font-bold text-white tracking-tight leading-snug mb-3 break-words hyphens-auto">
                                    {data.company}
                                </h3>

                                <p className="text-neutral-400 text-sm leading-relaxed break-words">
                                    {data.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ======================================================== */}
            {/* 2. CERTIFICATES */}
            {/* ======================================================== */}
            <div className="mt-8 pt-8 border-t border-neutral-800/50">
                <CertificatesComponent />
            </div>

        </div>
    );
};

export default MyCredentials;