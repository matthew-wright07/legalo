import Form from "@/components/forms/Form";

export default function SubscriptionTerms() {
    return (
        <Form 
            data={[
                { name: "Business Name", id: "business-name" },
                { name: "Website URL", id: "website-url" },
                { name: "Subscription Plans & Pricing", id: "subscription-plans" },
                { name: "Billing Cycle (e.g., monthly, yearly)", id: "billing-cycle" },
                { name: "Cancellation Policy", id: "cancellation-policy" },
                { name: "Refund Policy for Subscriptions", id: "refund-policy" },
                { name: "Auto-Renewal Terms", id: "auto-renewal" },
                { name: "User Obligations", id: "user-obligations" },
                { name: "Modification of Subscription Terms", id: "modification-terms" },
                { name: "Governing Law", id: "governing-law" },
                { name: "Contact Email", id: "contact-email" }
            ]}
            formName="Subscription Terms & Conditions Generator"
        />
    );
}
