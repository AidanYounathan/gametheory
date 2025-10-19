import Marquee from "react-fast-marquee";

export default function Home() {
    return (
        <div className=" text-bone">
            <Marquee className="overflow-hidden font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">Welcome to the Character Select Screen!</Marquee>
            <p className="mt-4">Choose your character:</p>
            <div className="grid grid-cols-2 gap-4 mt-8 ">
                {/* Character options will go here */}
            </div>
        </div>
    );
}

//Need to design character select, then work on the logic, then building it out