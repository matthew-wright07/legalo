export default function FeaturedIN(){
    return (
        <div className="flex flex-col items-center justify-center bg-background px-24 py-12 gap-4">
                <h1 className="text-2xl font-bold">Featured In</h1>
                <div className="flex items-center justify-center gap-24">
                    <img src="/discord.png" className="h-10 grayscale"/>
                    <img src="/reddit.png" className="h-12 grayscale"/>
                    <img src="/producthunt.png" className="h-12 grayscale"/>
                </div>
        </div>
    )
}