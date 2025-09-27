import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-bone">
      <div className="overflow-hidden whitespace-nowrap  border-[var(--bone)] py-4">
      <div className="animate-marquee inline-block">
  <span className="text-[var(--bone)] text-6xl font-bold font-[var(--font-neue)]">
    GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ GAME THEORY ★ 
  </span>
</div>
    </div>
    </main>
  );
}
