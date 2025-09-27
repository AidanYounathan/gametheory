import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full font-[var(--font-neue)] fixed top-0 z-50">
            <div className="rounded-[5px] m-5 border-5 border-[var(--bone)] text-[var(--bone)]">
                <div className="flex justify-between">
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
                    <nav
                        className="text-[32px] flex gap-12 items-center p-4 pr-9 font-light"
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
                </div>
            </div>
        </header>
    );
}
