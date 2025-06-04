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
            description="Easily create a professional Acceptable Use Policy tailored to your business, website, or app with our Acceptable Use Policy Generator. Just answer a few quick questions and get a ready-to-use Acceptable Use Policy that helps protect your platform and set clear expectations for users."
        />
    );
}
