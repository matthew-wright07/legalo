import Form from "@/components/forms/Form";

export default function EulaForm() {
    return (
        <Form data={[
            { name: "Business Name", id: "business-name" },
            { name: "Website/App Name", id: "app-name" },
            { name: "Contact Email", id: "contact-email" },
            { name: "Date", id: "current-date" },
            { name: "Business Location", id: "business-location" }
        ]} 
        formName="EULA Policy Generator"/>
    );
}
