import Form from "@/components/forms/Form";

export default function CookiePolicy() {
    return (
        <Form 
            data={[
                { name: "Business Name", id: "business-name" },
                { name: "Website URL", id: "website-url" },
                { name: "Types of Cookies Used", id: "cookie-types" },
                { name: "Cookie Duration (e.g., 30 days)", id: "cookie-duration" },
                { name: "User Consent Method", id: "user-consent-method" },
                { name: "Privacy Policy URL", id: "privacy-policy-url" },
                { name: "Contact Email", id: "contact-email" }
            ]}
            formName="Cookie Policy Generator"
        />
    );
}
