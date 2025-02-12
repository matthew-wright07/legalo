import Form from "@/components/forms/Form";

export default function PrivacyPolicy() {
    return (
        <Form 
            data={[
                { name: "Business Name", id: "business-name" },
                { name: "Website URL", id: "website-url" },
                { name: "Types of Data Collected", id: "data-collected" },
                { name: "How Data is Used", id: "data-usage" },
                { name: "Third-Party Sharing", id: "third-party-sharing" },
                { name: "Cookies & Tracking Policy", id: "cookies-tracking" },
                { name: "User Rights & Controls", id: "user-rights" },
                { name: "Data Retention Policy", id: "data-retention" },
                { name: "Security Measures", id: "security-measures" },
                { name: "Governing Law", id: "governing-law" },
                { name: "Contact Email", id: "contact-email" }
            ]}
            formName="Privacy Policy Generator"
        />
    );
}
