export default function Card({heading,description,src}){
    return (
        <div className="flex flex-col gap-4 p-8 items-center rounded-lg text-center">
                <img src={src} className="h-12 w-12 bg-primary rounded-lg"/>
                <h1 className="text-xl font-bold">{heading}</h1>
                <p>{description}</p>
        </div>
    )
}