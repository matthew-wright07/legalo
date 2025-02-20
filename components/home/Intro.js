export default function Intro(){
    return (
        <div className="p-24 flex items-center justify-evenly">
        <div className="py-4 flex flex-col gap-4 w-1/3">
            <h1 className="text-6xl font-bold text-primary">Legal Made Simple</h1>
            <p className="text-xl">Legal documents don’t have to be complicated. With our tool, you can generate clear, professional agreements in minutes, no legal jargon, no hassle. Just simple, reliable documents tailored to your needs.</p>
            <div className="flex items-center gap-4">
            <a href="/pricing" className="h-12 w-32 bg-primary text-white flex justify-center items-center rounded-lg hover:bg-hover">Start</a>
            <a href="/contact" className="h-12 w-32 border border-primary text-primary flex justify-center items-center rounded-lg">Learn More</a>
            </div>
        </div>
        <div>
            <img src="/simplify.png" className="w-80 h-80"/>
        </div>
        </div>
    )
}