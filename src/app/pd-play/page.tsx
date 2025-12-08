'use client'
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";


export default function Home() {
    const searchParams = useSearchParams();
    const [playerScore, setPlayerScore] = useState<number>(0);
    const [opponentScore, setOpponentScore] = useState<number>(0);
    const [opponentName, setOpponentName] = useState<string>("Opponent");
    const [rounds, setRounds] = useState<number>(10);
    const [currentRound, setCurrentRound] = useState<number>(0);

    // Character data - keep in sync with player-select/page.tsx
    const characters = [
        { id: 1, name: "Tit for Tat", description: "\"I'll match your move!\"", image: "/placeholder-character.png" },
        { id: 2, name: "Tideman & Chieruzzi", description: "Careful experimenters who adjust based on past outcomes.", image: "/placeholder-character.png" },
        { id: 3, name: "Nydegger", description: "Analytical and cautious waits for patterns before reacting", image: "/placeholder-character.png" },
        { id: 4, name: "Grofman", description: "Blends cooperation with calculated risk-taking", image: "/placeholder-character.png" },
        { id: 5, name: "Shubik", description: "Strategic opportunist. Cooperates early but will pounce on weakness.", image: "/placeholder-character.png" },
        { id: 6, name: "Stein & Rapoport", description: "Methodical duo. Balanced between trust and defense.", image: "/placeholder-character.png" },
        { id: 7, name: "Grudger", description: "Friendly until crossed. \"Betray me once and I never forgive.\"", image: "/placeholder-character.png" },
        { id: 8, name: "Davis", description: "Loyal collaborator. Values steady long-term cooperation.", image: "/placeholder-character.png" },
        { id: 9, name: "Graaskamp", description: "Adaptive strategist. Mixes random play with tactical responses.", image: "/placeholder-character.png" },
        { id: 10, name: "FirstByDowning", description: "Starts cautiously, then mirrors your style if trust builds.", image: "/placeholder-character.png" },
        { id: 11, name: "Feld", description: "Bold and aggressive tests trust by pushing early.", image: "/placeholder-character.png" },
        { id: 12, name: "Joss", description: "Mostly Tit-for-Tat but occasionally throws a surprise betrayal.", image: "/placeholder-character.png" },
        { id: 13, name: "Tullock", description: "Plays unpredictably with short bursts of aggression.", image: "/placeholder-character.png" },
        { id: 14, name: "Unnamed", description: "Mysterious contender. Its behavior is anyone's guess.", image: "/placeholder-character.png" },
        { id: 15, name: "Random", description: "Pure chaos—every round is a coin flip.", image: "/placeholder-character.png" },
    ];

    useEffect(() => {
        // Get character ID and rounds from URL params
        const characterId = searchParams.get('character');
        const roundsParam = searchParams.get('rounds');

        
        if (characterId) {
            const character = characters.find(c => c.id === Number(characterId));
            if (character) {
                setOpponentName(character.name);
                console.log(`Playing against: ${character.name}`);
            }
        }
        
        if (roundsParam) {
            setRounds(Number(roundsParam));
        }
    }, [searchParams]);

    const handleNextRound = () => {
        if (currentRound < rounds) {
            setCurrentRound(currentRound + 1);
            // Placeholder logic for score updates
            setPlayerScore(playerScore + Math.floor(Math.random() * 5));
            setOpponentScore(opponentScore + Math.floor(Math.random() * 5));
        }}

    return (
        <main>
            <div className="page-title text-bone">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-center mb-8 px-4 sm:px-6 md:px-8">
                    Prisoner's Dilemma 
                </h1>
            </div>
            <div className="game-container">
                <div className="scores flex items-center flex-row font-rubik text-2xl justify-center gap-8 mb-8 text-bone">
                    <div className="">
                        <h2>Player: {playerScore}</h2>
                    </div>
                    <div>
                        <h2>{opponentName}: {opponentScore}</h2>
                    </div>
                </div>
                





                <div>
                    {/* Game implementation goes here */}
                    <p className="text-bone text-center">Rounds: {currentRound}/{rounds}</p>
                </div>
                <div className=" flex justify-center">
                    <button onClick={handleNextRound} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Next Round
                    </button>
                </div>
            </div>
        </main>
    );
}