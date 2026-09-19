'use client';
import React from 'react';
import TimelineComponent from '@/components/Credentials/TimeLineComponent';
import CertificatesComponent from "@/components/Certificates/CertificatesComponent";
import ExperienceComponent from "@/components/Credentials/ExperienceComponent";

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
            <TimelineComponent />

            {/* ======================================================== */}
            {/* 2. EXPERIENCE */}
            {/* ======================================================== */}
            <div className="mt-8 pt-8 border-t border-neutral-800/50">
                <ExperienceComponent />
            </div>

            {/* ======================================================== */}
            {/* 3. CERTIFICATES */}
            {/* ======================================================== */}
            <div className="mt-8 pt-8 border-t border-neutral-800/50">
                <CertificatesComponent />
            </div>

        </div>
    );
};

export default MyCredentials;