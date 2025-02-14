export default function Card({heading,description,src}){
    return (
        <div className="flex flex-col gap-4 p-8 items-center hover:bg-background rounded-lg hover:cursor-pointer">
                <img src={src} className="h-12 w-12"/>
                <h1 className="text-xl font-bold">{heading}</h1>
                <p>{description}</p>
        </div>
    )
}