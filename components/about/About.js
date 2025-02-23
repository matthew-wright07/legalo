export default function About(){
    const about = `We believe legal documents should be simple, accessible, and affordable for everyone. Too often, individuals and businesses struggle with complicated paperwork, expensive legal fees, and confusing processes. Our mission is to remove these barriers by providing an easy-to-use platform that lets you generate professional legal documents in just a few minutes without the hassle of hiring a lawyer.
                
Whether you're a small business owner, freelancer, or individual, our service is designed to meet your needs. From contracts and agreements to essential business documents, we offer customizable templates that help you stay legally protected without breaking the bank. With just a few clicks, you can create high-quality legal documents tailored to your situation.

We understand that legal language can be overwhelming, which is why we focus on clarity and simplicity. Our platform ensures that every document is easy to understand while still maintaining the legal accuracy you need. You don’t have to be a legal expert, we make the process straightforward so you can move forward with confidence.

Affordability is at the core of what we do. Traditional legal services can cost hundreds or even thousands of dollars, but we provide a cost-effective alternative without sacrificing quality. Our pricing is transparent with no hidden fees, so you always know exactly what you're paying for.

At the end of the day, our goal is to empower you with the tools you need to handle legal paperwork efficiently. Whether you're just starting a business, drafting a contract, or need legal documents for personal use, we’re here to make the process as easy and stress-free as possible.`


    return(
        <div className="py-24 flex flex-col items-center justify-center gap-8">
            <h1 className="text-center text-4xl font-bold">About</h1>
            <div className="border border-background p-8 h-1/2 w-4/5">
            <p className="whitespace-break-spaces">{about}</p>
            </div>
        </div>
    )
}