import Image from "next/image";
import Header from "./components/header";
import Marquee from "react-fast-marquee";



export default function Home() {
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
      <section>
        <nav>
          <h2>Prisoners Dilemma</h2>
          <h2>Matching Pennies</h2>
          <h2>First-Price Auction</h2>
        </nav>
      </section>
      
    </main>
  );
}


