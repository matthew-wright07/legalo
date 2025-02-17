export default function Card({href,src,heading}){
    return(
        <a href={href} className="w-full h-full hover:bg-background flex justify-start items-center rounded-lg gap-2 p-4">
            <img src={src} className="w-8 h-8 rounded-lg bg-primary"/>
            <h1 className="text-xl font-bold text-primary">{heading}</h1>
        </a>
    )
}