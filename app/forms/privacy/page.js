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
        />
    );
}
