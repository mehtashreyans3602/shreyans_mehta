// @/components/Certificates/CertificateCard.jsx
"use client"
import React from 'react';

const CertificateCard = ({ certificate }) => {
    return (
        <a
            href={certificate.PdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between bg-neutral-900 border border-neutral-800 rounded-3xl p-6 transition-all duration-300 hover:border-neutral-600 hover:-translate-y-1 hover:bg-neutral-800/80 h-full min-h-[240px] cursor-pointer"
        >
            {/* Top Section: Icon + Meta */}
            <div>
                <div className="flex items-start justify-between mb-6">
                    {/* Certificate Icon */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-black border border-neutral-800 group-hover:border-blue-500/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>

                    {/* Date */}
                    <span className="text-xs font-mono text-neutral-500 bg-black border border-neutral-800 px-3 py-1.5 rounded-full">
                        {certificate.Date}
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-white tracking-tight mb-2 leading-snug">
                    {certificate.Title}
                </h2>

                {/* Issuer */}
                <p className="text-blue-400 text-sm font-medium mb-4">
                    {certificate.Issuer}
                </p>

                {/* Description (Truncated) */}
                <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
                    {certificate.Description}
                </p>
            </div>

            {/* Bottom Section: View Link */}
            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                    View Certificate
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-neutral-600 transform group-hover:translate-x-1 group-hover:text-blue-400 transition-all duration-300"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
        </a>
    );
};

export default CertificateCard;