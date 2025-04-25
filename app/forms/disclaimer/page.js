import Form from "@/components/forms/Form";

export const metadata = {
    title: "Legalo Disclaimer Policy Generator",
    icons: {
      icon: "/logo.png",
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
        />
    );
}
