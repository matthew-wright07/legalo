export default function FeaturedIN(){
    return (
        <div className="flex flex-col items-center justify-center bg-background p-12">
                <h1 className="text-lg font-bold">Featured In</h1>
                <div className="flex gap-16 items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" className="w-30 h-10 grayscale"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Product_Hunt_Logo.svg/2560px-Product_Hunt_Logo.svg.png" className="w-30 h-10 grayscale"/>
                    <img src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png" className="w-30 h-20 grayscale"/>
                </div>
        </div>
    )
}