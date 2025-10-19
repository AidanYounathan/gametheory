'use client'
import Marquee from "react-fast-marquee";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
    const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);

    const characters = [
        { id: 1, name: "Character 1", description: "Description 1", image: "/placeholder-character.png" },
        { id: 2, name: "Character 2", description: "Description 2", image: "/placeholder-character.png" },
        { id: 3, name: "Character 3", description: "Description 3", image: "/placeholder-character.png" },
        { id: 4, name: "Character 4", description: "Description 4", image: "/placeholder-character.png" },
        { id: 5, name: "Character 5", description: "Description 5", image: "/placeholder-character.png" },
        { id: 6, name: "Character 6", description: "Description 6", image: "/placeholder-character.png" },
        { id: 7, name: "Character 7", description: "Description 7", image: "/placeholder-character.png" },
        { id: 8, name: "Character 8", description: "Description 8", image: "/placeholder-character.png" },
        { id: 9, name: "Character 9", description: "Description 9", image: "/placeholder-character.png" },
        { id: 10, name: "Character 10", description: "Description 10", image: "/placeholder-character.png" },
        { id: 11, name: "Character 11", description: "Description 11", image: "/placeholder-character.png" },
        { id: 12, name: "Character 12", description: "Description 12", image: "/placeholder-character.png" },
        { id: 13, name: "Character 13", description: "Description 13", image: "/placeholder-character.png" },
        { id: 14, name: "Character 14", description: "Description 14", image: "/placeholder-character.png" },
        { id: 15, name: "Character 15", description: "Description 15", image: "/placeholder-character.png" },
        { id: 16, name: "Character 16", description: "Description 16", image: "/placeholder-character.png" },
    ];

    const handleCharacterSelect = (characterId: number) => {
        setSelectedCharacter(characterId);
    };

    return (
        <div className=" text-bone">
            <Marquee className="overflow-hidden font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-normal text-background text-outline ">SELECT YOUR OPPONENT! SELECT YOUR OPPONENT!</Marquee>
            <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-8 p-6 sm:p-8 md:p-10 lg:p-12 max-w-6xl mx-auto">
                {/* Character options - 4x4 grid */}
                {characters.map((character) => (
                    <div 
                        key={character.id}
                        onClick={() => handleCharacterSelect(character.id)}
                        className={`bg-gray-200 border-2 p-2 sm:p-3 md:p-4 rounded-lg aspect-square flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-200 ${
                            selectedCharacter === character.id 
                                ? 'border-blue-500 bg-blue-100 shadow-lg transform scale-105' 
                                : 'border-gray-400 hover:border-gray-600 hover:shadow-md'
                        }`}
                    >
                        {/* Image placeholder at the top */}
                        <div className="w-full flex-1 flex items-center justify-center mb-2">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center">
                                {/* Placeholder for character image */}
                                <span className="text-gray-500 text-xs sm:text-sm">IMG</span>
                                {/* Uncomment when you have actual images: */}
                                {/* <Image 
                                    src={character.image} 
                                    alt={character.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover"
                                /> */}
                            </div>
                        </div>
                        
                        {/* Character name and description at the bottom */}
                        <div className="w-full">
                            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-800 mb-1">
                                {character.name}
                            </h3>
                            <p className="text-xs sm:text-xs md:text-sm text-gray-600 leading-tight">
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

//Need to design character select, then work on the logic, then building it out