'use client'
import Marquee from "react-fast-marquee";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
    const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
    const [rounds, setRounds] = useState<number>(10); // Default to 10 rounds
    const router = useRouter();

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
        { id: 14, name: "Unnamed", description: "Mysterious contender. Its behavior is anyone’s guess.", image: "/placeholder-character.png" },
        { id: 15, name: "Random", description: "Pure chaos—every round is a coin flip.", image: "/placeholder-character.png" },
    ];

    const handleCharacterSelect = (characterId: number) => {
        const character = characters.find(c => c.id === characterId);
        if (character) {
            console.log(`Selected character: ${character.name}`);
            setSelectedCharacter(characterId);
        }
    };

    const handleGameStart = () => {
        if (selectedCharacter && rounds) {
            console.log(`Starting game with character: ${characters[selectedCharacter-1].name} and rounds: ${rounds}`);
            // Pass character ID and rounds via URL params
            router.push(`/pd-play?character=${selectedCharacter}&rounds=${rounds}`);
        }
    };

    return (
        <div className=" text-bone">
            <Marquee className="overflow-hidden font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-normal text-background text-outline">SELECT YOUR OPPONENT! SELECT YOUR OPPONENT!&nbsp;</Marquee>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4 p-4 sm:p-6 md:p-8 md:py-3 max-w-7xl lg:max-w-5xl mx-auto">
                {/* Character options - 5x3 responsive grid */}
                {characters.map((character) => (
                    <div 
                        key={character.id}
                        onClick={() => handleCharacterSelect(character.id)}
                        className={`bg-gray-200 border p-2 sm:p-3 rounded-lg h-32 sm:h-36 md:h-40 lg:h-28 flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-200 ${
                            selectedCharacter === character.id 
                                ? 'border-blue-500 bg-blue-100 shadow-lg transform scale-105' 
                                : 'border-gray-400 hover:border-gray-600 hover:shadow-md'
                        }`}
                    >
                        <div className="w-full flex-1 flex items-center justify-center mb-2">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-10 lg:h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-gray-500 text-xs">IMG</span>
                                {/* <Image 
                                    src={character.image} 
                                    alt={character.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover"
                                /> */}
                            </div>
                        </div>
                        
                        <div className="w-full">
                            <h3 className="text-xs sm:text-sm lg:text-xs font-bold text-gray-800 mb-0.5">
                                {character.name}
                            </h3>
                            <p className="text-[10px] sm:text-xs lg:text-[9px] text-gray-600 leading-tight">
                                {character.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Round selection slider */}
            <div className="max-w-3xl lg:max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="overflow-hidden font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl tracking-normal text-background text-outline py-4 lg:py-3">
                    <h3>ROUNDS: {rounds}</h3>
                    <div className="mt-4 lg:mt-3">
                        <input
                            type="range"
                            value={rounds}
                            onChange={(e) => {
                                setRounds(Number(e.target.value))
                                console.log(`Selected rounds: ${e.target.value}`);
                            }}
                            min={5}
                            max={50}
                            step={1}
                            className="custom-slider"
                        />
                        <div className="flex justify-between  text-base sm:text-lg md:text-xl lg:text-base">
                            <span>5</span>
                            <span>50</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Selected character display */}
            {selectedCharacter && (
                <div className="max-w-7xl lg:max-w-5xl mx-auto px-4 sm:pb-6 md:px-8 ">
                    <div className="overflow-hidden font-bold tracking-normal text-background text-outline  text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl">
                            {characters.find(c => c.id === selectedCharacter)?.name} - {rounds} ROUNDS
                        </h2>
                        <button onClick={() => handleGameStart()} className="mt-6 lg:mt-4 bg-bone text-background px-8 lg:px-6 py-3 lg:py-2 rounded-lg hover:bg-background hover:text-bone border-2 border-bone transition-all duration-200 text-lg sm:text-xl lg:text-base">
                            START GAME
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

