import Form from "@/components/forms/Form"

export const metadata = {
    title: "Legalo Terms Of Service Policy Generator",
    icons: {
      icon: "/logo.png",
    },
  };

export default function termsOfService(){
    return (
        <Form data={[
            { name: "Business Name", id: "business-name" },
            { name: "Minimum User Age", id: "minimum-age" },
            { name: "Location Of Business", id: "business-location" },
            { name: "Contact Email", id: "contact-email" },
            { name: "Date", id: "current-date" }
        ]} 
        formName="Terms of Service Generator"
        description="Quickly generate a comprehensive Terms of Service agreement for your website, app, or business with our Terms of Service Generator. Simply answer a few questions, and get a personalized Terms of Service Policy that outlines user rights, responsibilities, and guidelines for using your platform, protecting both you and your users."
        />
    )
}