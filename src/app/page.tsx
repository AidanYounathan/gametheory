"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Marquee from "react-fast-marquee";



export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    "Prisoners Dilemma",
    "Matching Pennies", 
    "First-Price Auction"
  ];
  
  const tabContent: (string | { sections: { title: string; content: string; }[] })[] = [
    {
      sections: [
        {
          title: "1. Choose Your Opponent",
          content: "Pick a classic strategy to play against—like Tit For Tat, Grudger, or Random."
        },
        {
          title: "2. Set Your Round Limit", 
          content: "Decide how many rounds you want to play—short and quick or long and strategic."
        },
        {
          title: "3. Decide Each Round: Cooperate or Betray",
          content: "Every round, you make a choice:\nCooperate — work together for mutual benefit\nBetray — go for the bigger payoff at your opponent's expense"
        },
        {
          title: "4. Earn Points Based on Both Choices",
          content: "Both cooperate → 3 points each\nYou betray, they cooperate → 5 points for you, 0 for them\nThey betray, you cooperate → 0 points for you, 5 for them\nBoth betray → 1 point each"
        },
        {
          title: "5. Win by Scoring More Points",
          content: "After all rounds are complete, the player with the highest total score wins.\nReady to outsmart the legendary strategies?"
        }
      ]
    },
    "COMING SOON Matching Pennies is a zero-sum game where two players simultaneously choose heads or tails. Player 1 wins if both choices match, while Player 2 wins if they don't match. This creates a game of pure strategy where players try to be unpredictable while anticipating their opponent's moves.",
    "COMING SOON A First-Price Auction is a sealed-bid auction where the highest bidder wins and pays exactly what they bid. Players must balance bidding high enough to win against bidding low enough to maintain profit. The strategic element comes from estimating others' valuations while managing the winner's curse."
  ];

  return (
    <main className="flex min-h-screen flex-col items-center text-bone font-[var(--font-neue)]">
  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        <Marquee className="overflow-hidden font-bold">
          GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★
        </Marquee>
      </div>
  <Image className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto my-8 sm:my-12 md:my-16 px-4" src="/guys.png" alt="Placeholder" width={500} height={300} />
      <section>
        <h2 className="font-bold text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl m">What is Game Theory?</h2>
        <div className="flex justify-center text-black w-screen bg-bone mt-3">
          <div className="w-[95vw] sm:w-[90vw] md:w-[82vw] lg:w-[76vw] xl:w-[72vw] p-3 sm:p-4 md:p-5 lg:p-6 py-6 sm:py-8 md:py-10">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">Game theory is the study of strategy and decision-making when outcomes depend on more than just your own choices.<br/><span className="font-light">From the famous Prisoner’s Dilemma to real-world economics and biology, it explains how cooperation, competition, and clever tactics shape results. This site turns those ideas into an interactive experience.  Face off against classic strategies like Tit For Tat or Grudger and see how small moves create big consequences.</span></p>
            <div className="flex justify-center mt-6">
              <button className="bg-black text-white hover:bg-gray-800 rounded-full w-40 sm:w-44 md:w-48 lg:w-52 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl font-semibold transition-colors cursor-pointer border-none text-center">
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
      <section id="playNow">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
          <h1>🎮 Choose Your Game 🎮</h1>
        </div>
        <nav className="w-full flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
          <div className="flex flex-row items-end gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 relative">
            {/* Base underline for all */}
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-bone w-full pointer-events-none" style={{zIndex: 0}} />
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={
                  `relative px-2 pb-1 font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition-colors duration-200 ` +
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
  <div className="flex justify-center mt-8">
          <div className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] p-6 sm:p-8 md:p-10">
            <div className="text-bone bg-[var(--background)] border-2 border-bone rounded-lg p-6 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
                {tabs[activeTab]}
              </h3>
              {typeof tabContent[activeTab] === 'object' && 'sections' in tabContent[activeTab] ? (
                <div className="mx-auto max-w-4xl px-8">
                  {(tabContent[activeTab] as { sections: { title: string; content: string; }[] }).sections.map((section, index) => (
                    <div key={index} className="mb-6">
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-3">
                        {section.title}
                      </h4>
                      <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-left whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  ))}
                    <div className="flex justify-center mt-6">
                    <Link href="/player-select">
                      <button className="bg-black text-white hover:bg-gray-800 rounded-full w-40 sm:w-44 md:w-48 lg:w-52 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl font-semibold transition-colors cursor-pointer border-none text-center">
                        Play Now
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-left whitespace-pre-line mx-auto max-w-4xl px-8">
                  {tabContent[activeTab] as string}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}




