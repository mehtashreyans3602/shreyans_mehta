// @/components/Certificates/CertificatesComponent.jsx
'use client';
import React from 'react';
import CertificatesData from '@/Data/certificatesData';
import CertificateCard from './CertificateCard';

const CertificatesComponent = () => {
    return (
        <>
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                        <span className="bg-blue-600 w-3 h-3 rounded-full"></span>
                        Certificates
                    </h2>
                    <p className="text-neutral-500 text-sm mt-1">Credentials I&apos;ve earned along the way.</p>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CertificatesData.map((certificate) => (
                    <CertificateCard key={certificate.id} certificate={certificate} />
                ))}
            </div>
        </>
    );
};

export default CertificatesComponent;