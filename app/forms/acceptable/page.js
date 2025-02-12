import Form from "@/components/forms/Form";

export default function AcceptableUsePolicy() {
    return (
        <Form 
            data={[
                { name: "Business Name", id: "business-name" },
                { name: "Website URL", id: "website-url" },
                { name: "Permitted Uses", id: "permitted-uses" },
                { name: "Prohibited Activities", id: "prohibited-activities" },
                { name: "User Responsibilities", id: "user-responsibilities" },
                { name: "Enforcement Actions", id: "enforcement-actions" },
                { name: "Reporting Violations", id: "reporting-violations" },
                { name: "Governing Law", id: "governing-law" },
                { name: "Contact Email", id: "contact-email" }
            ]}
            formName="Acceptable Use Policy Generator"
        />
    );
}
