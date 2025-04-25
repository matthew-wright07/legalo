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
        />
    );
}
