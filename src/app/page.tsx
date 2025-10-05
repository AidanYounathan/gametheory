"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "./components/header";
import Marquee from "react-fast-marquee";



export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    "Prisoners Dilemma",
    "Matching Pennies", 
    "First-Price Auction"
  ];
  
  const tabContent = [
    "The Prisoner's Dilemma is a fundamental game theory scenario where two players must choose between cooperation and defection. Each player makes their choice without knowing what the other will do. The dilemma arises because mutual cooperation yields better results than mutual defection, but individual defection can provide the highest payoff if the other player cooperates.",
    "Matching Pennies is a zero-sum game where two players simultaneously choose heads or tails. Player 1 wins if both choices match, while Player 2 wins if they don't match. This creates a game of pure strategy where players try to be unpredictable while anticipating their opponent's moves.",
    "A First-Price Auction is a sealed-bid auction where the highest bidder wins and pays exactly what they bid. Players must balance bidding high enough to win against bidding low enough to maintain profit. The strategic element comes from estimating others' valuations while managing the winner's curse."
  ];

  return (
    <main className="flex min-h-screen flex-col items-center text-bone font-[var(--font-neue)]">
      <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
        <Marquee className="overflow-hidden font-bold">
          GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★
        </Marquee>
      </div>
      <Image className="w-5xl h-auto my-16" src="/guys.png" alt="Placeholder" width={500} height={300} />
      <section>
        <h2 className="font-bold text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl m">What is Game Theory?</h2>
        <div className="flex justify-center text-black w-screen bg-bone mt-3">
          <div className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[80vw] p-3 sm:p-5 md:p-6 lg:p-8 py-8 sm:py-10 md:py-14">
            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">Game theory is the study of strategy and decision-making when outcomes depend on more than just your own choices.<br/><span className="font-light">From the famous Prisoner’s Dilemma to real-world economics and biology, it explains how cooperation, competition, and clever tactics shape results. This site turns those ideas into an interactive experience.  Face off against classic strategies like Tit For Tat or Grudger and see how small moves create big consequences.</span></p>
            <div className="flex justify-center mt-8">
              <button className="bg-black text-white hover:bg-gray-800 rounded-full w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 py-3 sm:py-4 md:py-5 lg:py-6 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold transition-colors cursor-pointer border-none text-center">
                Play Now
              </button>
            </div>
            <div className="flex justify-center mt-8 relative w-full aspect-video">
              <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/MHS-htjGgSY?si=v9AM4lMe-w5RpOn5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Game rule selection tab */}
      <section>
        <nav className="w-full flex justify-center mt-16">
          <div className="flex flex-row items-end gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 relative">
            {/* Base underline for all */}
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-bone w-full pointer-events-none" style={{zIndex: 0}} />
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={
                  `relative px-2 pb-1 font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl transition-colors duration-200 ` +
                  (activeTab === i
                    ? "text-bone"
                    : "text-bone/70 hover:text-bone/90")
                }
                style={{zIndex: 1}}
              >
                <span>{tab}</span>
                {/* Thick underline for active */}
                <span
                  className={`absolute left-0 right-0 -bottom-1 h-[4px] rounded bg-bone transition-all duration-300 ${
                    activeTab === i ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </nav>
        
        {/* Content area */}
        <div className="flex justify-center mt-8 mb-32">
          <div className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] p-6 sm:p-8 md:p-10">
            <div className="text-bone bg-[var(--background)] border-2 border-bone rounded-lg p-6 sm:p-8 md:p-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
                {tabs[activeTab]}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-center">
                {tabContent[activeTab]}
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}




