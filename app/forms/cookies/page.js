import Form from "@/components/forms/Form";

export const metadata = {
    title: "Legalo Cookie Policy Generator",
    icons: {
      icon: "/logo.svg",
    },
  };

export default function CookiePolicy() {
    return (
        <Form 
        data={[
            { name: "Business Name", id: "business-name" },
            { name: "Website/App Name", id: "app-name" },
            { name: "Contact Email", id: "contact-email" },
            { name: "Date", id: "current-date" }
        ]}
            formName="Cookie Policy Generator"
            description="Use our Cookie Policy Generator to quickly generate a detailed and compliant Cookie Policy for your website or app. Simply fill out a few prompts, and you'll receive a Cookie Policy that informs users about the types of cookies you use, how they’re managed, and ensures you meet legal requirements."
        />
    );
}
