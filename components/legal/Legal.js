export default function Legal({title,description}){
    return(
        <div className="py-24 flex flex-col items-center justify-center gap-8">
            <h1 className="text-center text-4xl font-bold">{title}</h1>
            <div className="border border-background p-8 h-1/2 w-1/2">
                <p className="whitespace-break-spaces">{description}</p>
            </div>
        </div>
    )
}