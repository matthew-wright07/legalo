import Form from "@/components/forms/Form";

export const metadata = {
    title: "Legalo Acceptable Use Policy Generator",
    icons: {
      icon: "/logo.png",
    },
};

export default function AcceptableUsePolicy() {
    return (
        <Form 
            data={[
                { name: "Business Name", id: "business-name" },
                { name: "Contact Email", id: "contact-email" },
                { name: "Date", id: "current-date" },
            ]}
            formName="Acceptable Use Policy Generator"
        />
    );
}
