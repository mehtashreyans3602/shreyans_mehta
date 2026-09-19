'use client';
import { useState, useEffect } from "react";
import shreyans_logo from "@/Assets/Images/shreyans_logo.png";
import Image from "next/image";

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Credentials', id: 'credentials' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
];
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Minimal link styles
  const linkStyle = "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full cursor-pointer";
  const activeStyle = "text-white bg-neutral-800";
  const inactiveStyle = "text-neutral-400 hover:text-white hover:bg-neutral-800/50";


  // Smooth scroll handler
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  // Detect active section on scroll
  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* FLOATING BOTTOM NAVIGATION BAR */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto">

        {/* The outer wrapper now transitions between pill and card shape */}
        <div
          className={`bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 shadow-2xl p-2 transition-all duration-300 ${menuOpen ? 'rounded-3xl' : 'rounded-full'
            }`}
        >

          {/* ============================== */}
          {/* DESKTOP LAYOUT (Single Row)     */}
          {/* ============================== */}
          <div className="hidden md:flex items-center gap-1">

            {/* Logo */}
            <button
              onClick={(e) => handleScroll(e, 'home')}
              className="flex-shrink-0 px-2"
            >
              <span className="w-10 h-10 overflow-hidden flex items-center justify-center rounded-full bg-neutral-800 border border-neutral-700 hover:border-neutral-500 transition-colors">
                <Image src={shreyans_logo} alt="Shreyans Logo" className="w-6 h-6 object-contain" />
              </span>
            </button>

            {/* Links */}
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => handleScroll(e, link.id)}
                className={`${linkStyle} ${activeSection === link.id ? activeStyle : inactiveStyle}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* ============================== */}
          {/* MOBILE LAYOUT (Stacked)         */}
          {/* ============================== */}
          <div className="md:hidden">

            {/* Top Row: Logo + Hamburger */}
            <div className="flex items-center justify-between px-2">
              <button
                onClick={(e) => handleScroll(e, 'home')}
                className="flex-shrink-0"
              >
                <span className="w-10 h-10 overflow-hidden flex items-center justify-center rounded-full bg-neutral-800 border border-neutral-700">
                  <Image src={shreyans_logo} alt="Shreyans Logo" className="w-6 h-6 object-contain" />
                </span>
              </button>

              <button
                onClick={toggleMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700 transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? '✕' : '☰'}
              </button>
            </div>

            {/* Expanding Menu */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${menuOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'
                }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-1 pt-2 pb-2 border-t border-neutral-800">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={(e) => handleScroll(e, link.id)}
                      className={`w-full text-center px-4 py-3 text-sm font-medium rounded-2xl transition-colors duration-200 ${activeSection === link.id
                        ? 'text-white bg-neutral-800'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                        }`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Header;