export default function PricingTable(){
    return (
    <div className="grid grid-cols-3 gap-4 px-24 p-4 place-items-center">
    <div className="bg-background w-2/3 h-[40vh] rounded-lg p-4 flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold justify-self-center">Free</h1>
        <h1 className="text-4xl font-bold text-primary">$0<span className="text-sm text-black font-normal">/month</span></h1>
        <ul className="text-center list-disc">
            <li>1 Document Generation</li>
            <li>No Customer Support</li>
            <li>Limited Features</li>
        </ul>
        <button className="w-1/2 bg-primary text-white rounded-lg h-10">Click Here</button>
    </div>
    <div className="bg-background w-2/3 h-[40vh] rounded-lg p-4 flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold justify-self-center">Monthly</h1>
        <h1 className="text-4xl font-bold text-primary">$8<span className="text-sm text-black font-normal">/month</span></h1>
        <ul className="text-center list-disc">
            <li>Unlimited Document Generation</li>
            <li>Customer Support</li>
            <li>Unlimted Features</li>
        </ul>
        <a href="https://buy.stripe.com/test_8wM2btacxcba8OA9AB" className="w-1/2 bg-primary text-white rounded-lg h-10 flex items-center justify-center">Click Here</a>
    </div>
    <div className="bg-background w-2/3 h-[40vh] rounded-lg p-4 flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold justify-self-center">Yearly</h1>
        <h1 className="text-4xl font-bold text-primary">$30<span className="text-sm text-black font-normal">/year</span></h1>
        <ul className="text-center list-disc">
            <li>Unlimited Document Generation</li>
            <li>Customer Support</li>
            <li>Unlimted Features</li>
        </ul>
        <a href="https://buy.stripe.com/test_cN2dUb5Wha32e8U5kk" className="w-1/2 bg-primary text-white rounded-lg h-10 flex items-center justify-center">Click Here</a>
    </div>
    </div>
    )
}