'use client'
import Marquee from "react-fast-marquee";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
    const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);

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
        { id: 12, name: "Joss", description: "Description 12", image: "/placeholder-character.png" },
        { id: 13, name: "Tullock", description: "Description 13", image: "/placeholder-character.png" },
        { id: 14, name: "Unnamed", description: "Description 14", image: "/placeholder-character.png" },
        { id: 15, name: "Random", description: "Description 15", image: "/placeholder-character.png" },
    ];

    const handleCharacterSelect = (characterId: number) => {
        const character = characters.find(c => c.id === characterId);
        if (character) {
            console.log(`Selected character: ${character.name}`);
            console.log(`Selected character ID: ${characterId}`);
            setSelectedCharacter(characterId);
        }
    };

    return (
        <div className=" text-bone">
            <Marquee className="overflow-hidden font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-normal text-background text-outline">SELECT YOUR OPPONENT! SELECT YOUR OPPONENT!</Marquee>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4 p-4 sm:p-6 md:p-8 md:py-3 max-w-7xl mx-auto">
                {/* Character options - 5x3 responsive grid */}
                {characters.map((character) => (
                    <div 
                        key={character.id}
                        onClick={() => handleCharacterSelect(character.id)}
                        className={`bg-gray-200 border p-2 sm:p-3 rounded-lg h-32 sm:h-36 md:h-40 flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-200 ${
                            selectedCharacter === character.id 
                                ? 'border-blue-500 bg-blue-100 shadow-lg transform scale-105' 
                                : 'border-gray-400 hover:border-gray-600 hover:shadow-md'
                        }`}
                    >

                        <div className="w-full flex-1 flex items-center justify-center mb-2">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-300 rounded-full flex items-center justify-center">
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
                            <h3 className="text-xs sm:text-sm font-bold text-gray-800 mb-0.5">
                                {character.name}
                            </h3>
                            <p className="text-[10px] sm:text-xs text-gray-600 leading-tight">
                                {character.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Selected character display */}
            {selectedCharacter && (
                <div className="text-center mt-6 p-4 bg-bone text-gray-800 rounded-lg mx-6 sm:mx-8 md:mx-10 lg:mx-12">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                        Selected: {characters.find(c => c.id === selectedCharacter)?.name}
                    </h2>
                    <button className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                        Continue with this character
                    </button>
                </div>
            )}
        </div>
    );
}

//Need to work on the logic,