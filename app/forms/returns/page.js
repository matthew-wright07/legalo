import Form from "@/components/forms/Form";

export default function ReturnRefundPolicy() {
    return (
        <Form 
            data={[
                { name: "Business Name", id: "business-name" },
                { name: "Contact Email", id: "contact-email" },
                { name: "Date", id: "current-date" },
                { name: "Return Window In Days", id: "return-window" },
                { name: "Time To Refund Money In Days", id: "refund-time" },
                { name: "Business Location", id: "business-location" },
            ]}
            formName="Return & Refund Policy Generator"
        />
    );
}
