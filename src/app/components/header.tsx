export default function Header() {
    return (
        <header className={`w-full font-[var(--font-neue)] `}>
            <div className="rounded-[5px] m-5 border-5 border-[var(--bone)] text-[var(--bone)]">   
            <div className="flex justify-between">
                <div className="flex items-center p-3">
                    <h1 className="font-bold text-4xl">
                        Game Theory
                    </h1>
                </div>
                <div className="text-[32px] flex gap-10 items-center p-3 font-medium">
                    <a href="">About</a>
                    <a href="">Play Now</a>
                </div>
            </div>
            </div>
        </header>
    )
}