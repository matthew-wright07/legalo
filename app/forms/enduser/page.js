import Form from "@/components/forms/Form";

export default function EulaForm() {
    return (
        <Form data={[
            { name: "Business Name", id: "business-name" },
            { name: "Website URL", id: "website-url" },
            { name: "Software Name", id: "software-name" },
            { name: "License Scope", id: "license-scope" },
            { name: "Restrictions", id: "restrictions" },
            { name: "Termination Conditions", id: "termination-conditions" },
            { name: "Liability Disclaimer", id: "liability-disclaimer" },
            { name: "Contact Email", id: "contact-email" }
        ]} formName="EULA Policy Generator"/>
    );
}
