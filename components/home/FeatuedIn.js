export default function FeaturedIN(){
    return (
        <div className="flex flex-col items-center justify-center bg-background px-24 py-12 gap-4">
                <h1 className="text-2xl font-bold">Featured In</h1>
                <div className="flex gap-24 items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" className="w-30 h-10 grayscale"/>
                    <img src="https://sharpsheets.io/wp-content/uploads/2021/08/Y_Combinator_logo_text_wordmark-1024x292.png.webp" className="w-30 h-14 grayscale"/>
                    <img src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png" className="w-30 h-24 grayscale"/>
                </div>
        </div>
    )
}