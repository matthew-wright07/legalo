import Form from "@/components/forms/Form";

export const metadata = {
    title: "Legalo Subscriptions Policy Generator",
    icons: {
      icon: "/logo.png",
    },
  };

export default function SubscriptionTerms() {
    return (
        <Form 
            data={[
                { name: "Business Name", id: "business-name" },
                { name: "Contact Email", id: "contact-email" },
                { name: "Date", id: "current-date" }
            ]}
            formName="Subscription Terms & Conditions Generator"
            description="Easily create a Subscription Policy for your service or product with our Subscription Policy Generator. Answer a few quick questions, and receive a customized Subscription Policy that outlines billing cycles, cancellations, renewals, and user responsibilities, ensuring transparency and a smooth subscription experience."
        />
    );
}
