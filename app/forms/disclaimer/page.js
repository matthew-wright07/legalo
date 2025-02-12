import Form from "@/components/forms/Form";

export default function Disclaimer() {
    return (
        <Form 
            data={[
                { name: "Business Name", id: "business-name" },
                { name: "Website URL", id: "website-url" },
                { name: "Nature of Information Provided", id: "information-nature" },
                { name: "No Legal or Professional Advice Disclaimer", id: "no-legal-advice" },
                { name: "Third-Party Links & Affiliations", id: "third-party-links" },
                { name: "Limitation of Liability", id: "limitation-liability" },
                { name: "External Content Disclaimer", id: "external-content" },
                { name: "Governing Law", id: "governing-law" },
                { name: "Contact Email", id: "contact-email" }
            ]}
            formName="Disclaimer Generator"
        />
    );
}
