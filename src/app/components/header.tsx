"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);
// Added focus styles and improved accessibility with ARIA attributes
    return (
        <header className="w-full font-[var(--font-neue)] fixed top-0 z-50">
            <div className="rounded-[5px] m-5 border-5 border-bone shadow-2xl text-bone bg-[var(--background)]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center p-3">
                        <h1 className="font-bold text-4xl">
                            <Link
                                href="/"
                                className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--bone)] focus:ring-offset-2"
                            >
                                GAME THEORY
                            </Link>
                        </h1>
                    </div>

                    {/* Desktop nav - visible on md+ */}
                    <nav
                        className="hidden md:flex text-[32px] gap-12 items-center p-4 pr-9 font-light"
                        role="navigation"
                        aria-label="Main navigation"
                    >
                        <Link
                            href="/#about"
                            className="group hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--bone)] focus:ring-offset-2 transition-opacity"
                        >
                            <span className="bg-left-bottom bg-gradient-to-r from-bone to-bone bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">About</span>
                        </Link>
                        <Link
                            href="/play"
                            className="group hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--bone)] focus:ring-offset-2 transition-opacity"
                        >
                            <span className="bg-left-bottom bg-gradient-to-r from-bone to-bone bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Play Now</span>
                        </Link>
                    </nav>

                    {/* Mobile controls - visible on small screens */}
                    <div className="md:hidden pr-4">
                        <button
                            onClick={() => setOpen((s) => !s)}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            aria-label={open ? "Close menu" : "Open menu"}
                            className="inline-flex items-center justify-center p-3 rounded focus:outline-none focus:ring-2 focus:ring-[var(--bone)]"
                        >
                            <svg
                                className={`h-8 w-8 text-bone transition-transform duration-300 ${open ? "transform rotate-90" : ""}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {open ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <>
                                        <path d="M3 7h18" />
                                        <path d="M3 12h18" />
                                        <path d="M3 17h18" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown - animated */}
                <div
                    id="mobile-menu"
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                    style={{ maxHeight: open ? "200px" : "0px" }}
                >
                    <nav className="flex flex-col gap-3 p-4 pb-6 text-xl font-light">
                        <Link
                            href="/#about"
                            className="group hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--bone)] focus:ring-offset-2 transition-opacity"
                            onClick={() => setOpen(false)}
                        >
                            <span className="bg-left-bottom bg-gradient-to-r from-bone to-bone bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">About</span>
                        </Link>
                        <Link
                            href="/play"
                            className="group hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--bone)] focus:ring-offset-2 transition-opacity"
                            onClick={() => setOpen(false)}
                        >
                            <span className="bg-left-bottom bg-gradient-to-r from-bone to-bone bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Play Now</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

