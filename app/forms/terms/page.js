import Form from "@/components/forms/Form"

export default function termsOfService(){
    return (
        <Form data={[
            { name: "Business Name", id: "business-name" },
            { name: "Website URL", id: "website-url" },
            { name: "User Responsibilities", id: "user-responsibilities" },
            { name: "Privacy Policy URL", id: "privacy-policy-url" },
            { name: "Contact Email", id: "contact-email" }
        ]} formName="Terms of Service Generator"/>
    )
}