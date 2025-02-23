export default function WhyUs(){
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 py-20 gap-12 px-14">
            <div className="w-full bg-primary text-white h-full rounded-lg p-8 flex flex-col justify-center items-center text-center gap-4">
                <img src="/fast.png" className="w-20 h-20"/>
                <h1 className="text-3xl font-bold">Fast And Hassle Free</h1>
                <p>Generate professional legal documents in minutes, no lawyers, no waiting, no confusion.</p>
            </div>
            <div className="w-full bg-primary text-white h-full rounded-lg p-8 flex flex-col justify-center items-center text-center gap-4">
            <img src="/affordable.png" className="w-20 h-20"/>
                <h1 className="text-3xl font-bold">Affordable And Transparent Pricing</h1>
                <p>Get legally sound contracts for a fraction of the cost of hiring an attorney, with clear, upfront pricing.</p>
            </div>
            <div className="w-full bg-primary text-white h-full rounded-lg p-8 flex flex-col justify-center items-center text-center gap-4">
                <img src="/customizable.png" className="w-20 h-20"/>
                <h1 className="text-3xl font-bold">Customizable And Reliable</h1>
                <p>Easily tailor documents to fit your specific needs while ensuring accuracy and compliance.</p>
            </div>

        </div>
    )
}