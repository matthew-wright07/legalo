import Form from "@/components/forms/Form";

export default function ReturnRefundPolicy() {
    return (
        <Form 
            data={[
                { name: "Business Name", id: "business-name" },
                { name: "Website URL", id: "website-url" },
                { name: "Eligible Return Period (e.g., 30 days)", id: "return-period" },
                { name: "Accepted Return Conditions", id: "return-conditions" },
                { name: "Non-Returnable Items", id: "non-returnable-items" },
                { name: "Refund Processing Time", id: "refund-time" },
                { name: "Refund Method (e.g., original payment method, store credit)", id: "refund-method" },
                { name: "Exchange Policy", id: "exchange-policy" },
                { name: "Return Shipping Responsibility", id: "return-shipping" },
                { name: "Contact Email", id: "contact-email" }
            ]}
            formName="Return & Refund Policy Generator"
        />
    );
}
