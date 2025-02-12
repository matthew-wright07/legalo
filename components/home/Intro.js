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
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-lg font-bold">Featured In</h1>
                <div className="flex gap-16 items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" className="w-30 h-10 grayscale"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Product_Hunt_Logo.svg/2560px-Product_Hunt_Logo.svg.png" className="w-30 h-10 grayscale"/>
                    <img src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png" className="w-30 h-20 grayscale"/>
                </div>
            </div>
        </div>
        </div>
    )
}