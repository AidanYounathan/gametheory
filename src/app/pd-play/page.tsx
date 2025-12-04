'use client'
import { useState } from "react";


export default function Home() {
    const [playerScore, setPlayerScore] = useState<number>(0);
    const [opponentScore, setOpponentScore] = useState<number>(0);

    return (
        <main>
            <div className="page-title text-bone">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-center mb-8 px-4 sm:px-6 md:px-8">
                    Prisoner's Dilemma 
                </h1>
            </div>
            <div className="game-container">
                <div className="scores">
                    <div className="">

                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </main>
    );
}