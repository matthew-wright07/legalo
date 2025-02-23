export default function Card({heading,description,src}){
    return (
        <div className="flex flex-col gap-4 p-4 items-center rounded-lg text-center w-full">
                <img src={src} className="h-12 w-12 bg-primary rounded-lg"/>
                <h1 className="text-xl font-bold">{heading}</h1>
                <p>{description}</p>
        </div>
    )
}