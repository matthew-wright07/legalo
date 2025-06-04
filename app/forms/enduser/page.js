import Form from "@/components/forms/Form";

export const metadata = {
    title: "Legalo End User Policy Generator",
    icons: {
      icon: "/logo.png",
    },
  };

export default function EulaForm() {
    return (
        <Form data={[
            { name: "Business Name", id: "business-name" },
            { name: "Website/App Name", id: "app-name" },
            { name: "Contact Email", id: "contact-email" },
            { name: "Date", id: "current-date" },
            { name: "Business Location", id: "business-location" }
        ]} 
        formName="EULA Policy Generator"
        description="Generate a custom End User License Agreement (EULA) that’s perfectly suited to your software or digital product with our End User License Agreement Generator. Just answer a few quick questions, and get a comprehensive End User License Agreement that outlines the terms, rights, and responsibilities for both you and your users."
        />
    );
}
