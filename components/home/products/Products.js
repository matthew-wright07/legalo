import Card from "./Card"

export default function Products(){
    return(
        <div className="flex flex-col px-24 py-12 gap-12">
        <h1 className="text-4xl font-bold text-primary text-center">Our Products</h1>
        <div className="grid lg:grid-cols-4 grid-cols-2">
            <Card href="/forms/cookies" heading="Cookie Generator" description="A cookie policy ensures transparency, builds trust with users, and keeps your website compliant with privacy laws like GDPR and CCPA." src="/cookie.png"/>
            <Card href="/forms/terms" heading="Terms Of Service Generator" description="Terms of Service protect your business by setting clear rules, limiting liability, and ensuring legal compliance while building trust with users." src="/terms.png"/>
            <Card href="/forms/subscriptions" heading="Subscription Generator" description="Subscription Terms outline billing, cancellations, refunds, and user obligations, ensuring clarity and legal protection for both you and your customers." src="/subscriptions.png"/>
            <Card href="/forms/enduser" heading="End User Generator" description="End User Terms define the rights, responsibilities, and restrictions for users of your service, protecting both your business and your customers." src="/enduser.png"/>
            <Card href="/forms/disclaimer" heading="Disclaimer Generator" description="A Disclaimers Policy limits your liability by clarifying that your content is for informational purposes only and not legal, financial, or professional advice." src="/disclaimer.png"/>
            <Card href="/forms/privacy" heading="Privacy Policy Generator" description="A Privacy Policy informs users how their data is collected, used, and protected, ensuring transparency and compliance with laws like GDPR and CCPA." src="/privacy.png"/>
            <Card href="/forms/acceptable" heading="Acceptable Use Generator" description="An Acceptable Use Policy sets guidelines for how users can interact with your service, preventing misuse and protecting your platform from abuse." src="/acceptable.png"/>
            <Card href="/forms/returns" heading="Returns & Refunds Generator" description="A Returns and Refund Policy outlines the conditions for returns, exchanges, and refunds, ensuring clarity and fairness for both your business and customers." src="/returns.png"/>
        </div>
        </div>
    )
}