export default function PricingTable(){
    return (
    <div className="flex flex-col py-20 gap-6">
        <h1 className="text-center text-3xl font-bold text-primary">Pricing</h1>
        <p className="w-1/3 text-center self-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie facilisis velit. Duis non tellus blandit, auctor elit sit amet, pretium odio. Sed rhoncus, orci vel tincidunt congue, dui nulla ultrices velit, at ultricies ex est eu nunc. Nunc in dictum dolor, quis porttitor odio. In id lacus turpis.</p>
    <div className="grid grid-cols-3 gap-4 px-24 p-4 place-items-center h-[40vh]">
    <div className="border border-primary w-2/3 h-full rounded-lg p-4 flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold justify-self-center text-primary">Free</h1>
        <h1 className="text-4xl font-bold text-primary">$0<span className="text-sm text-primary font-normal">/month</span></h1>
        <ul className="text-center text-primary">
            <li>1 Document Generation</li>
            <li>No Customer Support</li>
            <li>Limited Features</li>
        </ul>
        <button className="w-1/2 bg-primary text-white rounded-lg h-10">Click Here</button>
    </div>
    <div className="bg-primary w-2/3 h-full rounded-lg p-4 flex flex-col justify-center items-center gap-4 text-white">
        <h1 className="text-3xl font-bold justify-self-center">Monthly</h1>
        <h1 className="text-4xl font-bold">$8<span className="text-sm font-normal">/month</span></h1>
        <ul className="text-center">
            <li>Unlimited Document Generation</li>
            <li>Customer Support</li>
            <li>Unlimted Features</li>
        </ul>
        <a href="https://buy.stripe.com/test_8wM2btacxcba8OA9AB" className="w-1/2 bg-white text-primary rounded-lg h-10 flex items-center justify-center">Click Here</a>
    </div>
    <div className="border border-primary w-2/3 h-full rounded-lg p-4 flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold justify-self-center text-primary">Yearly</h1>
        <h1 className="text-4xl font-bold text-primary">$30<span className="text-sm text-black font-normal text-primary">/year</span></h1>
        <ul className="text-center text-primary">
            <li>Unlimited Document Generation</li>
            <li>Customer Support</li>
            <li>Unlimted Features</li>
        </ul>
        <a href="https://buy.stripe.com/test_cN2dUb5Wha32e8U5kk" className="w-1/2 bg-primary text-white rounded-lg h-10 flex items-center justify-center">Click Here</a>
    </div>
    </div>
    </div>
    )
}