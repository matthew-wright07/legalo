import Form from "@/components/forms/Form";

export const metadata = {
    title: "Legalo Returns Policy Generator",
    icons: {
      icon: "/logo.png",
    },
  };

export default function ReturnRefundPolicy() {
    return (
        <Form 
            data={[
                { name: "Business Name", id: "business-name" },
                { name: "Contact Email", id: "contact-email" },
                { name: "Date", id: "current-date" },
                { name: "Return Window In Days", id: "return-window" },
                { name: "Time To Refund Money In Days", id: "refund-time" },
                { name: "Business Location", id: "business-location" },
            ]}
            formName="Return & Refund Policy Generator"
            description="Generate a customized Returns Policy that sets clear guidelines for product returns, exchanges, and refunds. Simply answer a few questions, and receive a policy tailored to your business, helping to build trust with your customers while protecting your interests."
        />
    );
}
