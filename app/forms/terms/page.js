import Form from "@/components/forms/Form"

export default function termsOfService(){
    return (
        <Form data={[
            { name: "Business Name", id: "business-name" },
            { name: "Minimum User Age", id: "minimum-age" },
            { name: "Location Of Business", id: "business-location" },
            { name: "Contact Email", id: "contact-email" },
            { name: "Date", id: "current-date" }
        ]} formName="Terms of Service Generator"/>
    )
}