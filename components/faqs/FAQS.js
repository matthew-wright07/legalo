export default function FAQS(){
    const faqs = `1. What does this service do?
We provide an easy way to create documents quickly and efficiently without the usual hassle.

2. Are these documents valid?
Our documents are designed to be useful in many situations, but we always recommend reviewing them to ensure they meet your specific needs.

3. How long does it take to create a document?
It’s a fast and straightforward process that typically takes just a few minutes.

4. Do I need any special knowledge to use this service?
No, our platform is designed to be simple and user-friendly for everyone.

5. How much does it cost?
We offer different pricing options to suit various needs, with clear and straightforward pricing.

6. Can I make changes to my document?
Yes, you can customize it to fit your specific situation before finalizing it.

7. What types of documents are available?
We provide a variety of commonly used documents for different purposes.

8. Is my information safe?
We take privacy and security seriously to ensure your information is protected.

9. Do you offer refunds?
Since documents are digital, refunds are generally not available, but we’re happy to assist with any issues.

10. How do I get in touch?
You can reach out to us through our contact form, and we’ll get back to you as soon as possible.`


    return(
        <div className="py-24 flex flex-col items-center justify-center gap-8">
            <h1 className="text-center text-4xl font-bold">FAQS</h1>
            <div className="border border-background p-8 h-1/2 w-4/5">
            <p className="whitespace-break-spaces">{faqs}</p>
            </div>
        </div>
    )
}