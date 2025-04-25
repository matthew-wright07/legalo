import Form from "@/components/forms/Form";

export const metadata = {
    title: "Legalo Privacy Policy Generator",
    icons: {
      icon: "/logo.png",
    },
  };

export default function PrivacyPolicy() {
    return (
        <Form 
            data={[
                { name: "Business Name", id: "business-name" },
                { name: "Contact Email", id: "contact-email" },
                { name: "Date", id: "current-date" }
                
            ]}
            formName="Privacy Policy Generator"
            description="Easily create a comprehensive Privacy Policy for your website, app, or business. Perfect for to be used as a shopify privacy policy. Answer a few questions to get a fully customized document that explains how you collect, use, and protect user data, ensuring transparency and compliance with privacy laws."
        />
    );
}
