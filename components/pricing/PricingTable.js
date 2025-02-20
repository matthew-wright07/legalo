export default function PricingTable(){
    return (
    <div className="flex flex-col py-20 gap-6">
        <h1 className="text-center text-3xl font-bold text-primary">Pricing</h1>
        <p className="w-1/3 text-center self-center">Get professional legal documents at a fraction of the cost of hiring a lawyer. With flexible pay-per-document and subscription options, you only pay for what you need, no hidden fees, just simple and reliable pricing.</p>
    <div className="grid grid-cols-2 gap-4 px-24 p-4 place-items-center h-[60vh]">
    <div className="border border-primary w-full h-full rounded-lg p-4 flex flex-col justify-center items-center gap-4 text-primary">
        <h1 className="text-3xl font-bold justify-self-center">Monthly</h1>
        <h1 className="text-4xl font-bold">$8<span className="text-sm font-normal">/month</span></h1>
        <ul className="text-center">
            <li>Unlimited Document Generation</li>
            <li>Customer Support</li>
            <li>Unlimted Features</li>
        </ul>
        <a href="https://buy.stripe.com/test_8wM2btacxcba8OA9AB" className="w-1/2 bg-primary text-white rounded-lg h-10 flex items-center justify-center">Buy</a>
    </div>
    <div className="border border-primary w-full h-full rounded-lg p-4 flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold justify-self-center text-primary">Yearly</h1>
        <h1 className="text-4xl font-bold text-primary">$30<span className="text-sm text-black font-normal text-primary">/year</span></h1>
        <ul className="text-center text-primary">
            <li>Unlimited Document Generation</li>
            <li>Customer Support</li>
            <li>Unlimted Features</li>
        </ul>
        <a href="https://buy.stripe.com/test_cN2dUb5Wha32e8U5kk" className="w-1/2 bg-primary text-white rounded-lg h-10 flex items-center justify-center">Buy</a>
    </div>
    </div>
    </div>
    )
}