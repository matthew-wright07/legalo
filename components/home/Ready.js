export default function Ready(){
    return(
        <div className="px-24 py-16 bg-background flex flex-col gap-8">
            <h1 className="text-4xl text-black text-center">Ready To Get Started?</h1>
            <div className="w-full flex justify-center gap-4">
                <a className="w-32 h-14 bg-primary text-white flex justify-center items-center rounded-lg text-lg hover:bg-hover" href="/forms">Start</a>
                <a className="w-32 h-14 border border-primary text-primary flex justify-center items-center rounded-lg text-lg" href="/about">Learn More</a>
            </div>
        </div>
    )
}