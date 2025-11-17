import Form from "@/components/forms/Form";

export const metadata = {
    title: "Legalo Disclaimer Policy Generator",
    icons: {
      icon: "/logo.svg",
    },
  };

export default function Disclaimer() {
    return (
        <Form 
            data={[
                { name: "Business Name", id: "business-name" },
                { name: "Website/App Name", id: "app-name" },
                { name: "Contact Email", id: "contact-email" },
                { name: "Date", id: "current-date" }
            ]}
            formName="Disclaimer Generator"
            description="Create a tailored Disclaimer Policy for your website, app, or business with just a few clicks with our Disclaimer Policy Generator. Answer simple questions to receive a clear, professional disclaimer policy that protects you from legal issues and sets the right expectations for your users."
        />
    );
}
