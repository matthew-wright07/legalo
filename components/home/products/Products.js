import Card from "./Card"

export default function Products(){
    return(
        <div className="grid grid-cols-4 px-24">
            <Card heading="Cookie Generator" description="Why cookies are the best" src="/cookie.png"/>
            <Card heading="Terms Of Service Generator" description="Why Terms are the best" src="/terms.png"/>
            <Card heading="Subscription Generator" description="Why subscriptions are the best" src="/subscriptions.png"/>
            <Card heading="End User Generator" description="Why end users are the best" src="/enduser.png"/>
            <Card heading="Disclaimer Generator" description="Why disclaimers are the best" src="/disclaimer.png"/>
            <Card heading="Privacy Policy Generator" description="Why privay policies are the best" src="/privacy.png"/>
            <Card heading="Acceptable Use Generator" description="Why acceptable uses are the best" src="/acceptable.png"/>
            <Card heading="Returns & Refunds Generator" description="Why returns and refunds are the best" src="/returns.png"/>
        </div>
    )
}