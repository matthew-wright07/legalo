export default function Footer(){
    return (
        <div className="flex flex-col p-4 flex-wrap">
        <div className="flex py-16 justify-evenly flex-wrap">
            <a className="justify-self-center flex gap-2 items-center justify-center" href="/">
                <img
                src="/logo.png"
                className="h-10 w-10"
                />
                <h1 className="text-3xl font-bold text-primary">Legalo</h1>
            </a>
            <div className="justify-self-center flex flex-col">
                <h1 className="text-lg font-bold">Company</h1>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/legal/privacy">Our Privacy Policy</a>
                <a href="/legal/terms">Our Terms Of Service</a>
                <a href="/legal/disclaimer">Our Disclaimer Policy</a>
                <a href="/legal/cookies">Our Cookie Policy</a>

            </div>
            <div className="justify-self-center flex flex-col">
                <h1 className="text-lg font-bold">Products</h1>
                <a href="/forms/cookies">Cookie Policy</a>
                <a href="/forms/terms">Terms Of Service</a>
                <a href="/forms/subscriptions">Subscription Policy</a>
                <a href="/forms/enduser">End User Policy</a>
                <a href="/forms/disclaimer">Disclaimer Policy</a>
                <a href="/forms/privacy">Privacy Policy</a>
                <a href="/forms/acceptable">Acceptable Use Policy</a>
                <a href="/forms/returns">Returns & Refund Policy</a>
            </div>
            <div className="justify-self-center flex flex-col">
                <h1 className="text-lg font-bold">Support</h1>
                <a href="/contact">Contact</a>
                <a href="/faqs">FAQs</a>
                <a href="/">Pricing</a>
                <a href="/">Settings</a>
            </div>
        </div>
        <p className="text-center text-sm">Our documents are for general use and do not constitute legal advice. We are not a law firm, consult a licensed attorney for specific legal needs.</p>
        </div>
    )
}