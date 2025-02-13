export default function Intro(){
    return (
        <div className="px-24 p-12 flex items-center justify-center">
        <div className="py-4 flex flex-col gap-4 justify-center w-1/2 text-center">
            <h1 className="text-6xl font-bold text-primary">All In One Legal Tool</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie facilisis velit. Duis non tellus blandit, auctor elit sit amet, pretium odio. Sed rhoncus, orci vel tincidunt congue, dui nulla ultrices velit, at ultricies ex est eu nunc. Nunc in dictum dolor, quis porttitor odio. In id lacus turpis.</p>
            <div className="flex items-center justify-center gap-4">
            <a href="" className="h-12 w-32 bg-primary text-white flex justify-center items-center rounded-lg hover:bg-hover">Learn More</a>
            <a href="" className="h-12 w-32 bg-primary text-white flex justify-center items-center rounded-lg hover:bg-hover">Explore</a>
            </div>
        </div>
        </div>
    )
}