import * as functions from "@/utils/FormGenerators";

export async function POST(req){
    const data = await req.json();
    const route = data.route;
    if (route==="Acceptable Use Policy Generator"){
        return new Response(JSON.stringify(functions.generateAcceptableUsePolicy(data.data)))
    }else if (route==="Cookie Policy Generator"){
        return new Response(JSON.stringify(functions.generateCookiePolicy(data.data))) //fix
    }else if (route==="Disclaimer Generator"){
        return new Response(JSON.stringify(functions.generateDisclaimer(data.data)))
    }else if (route==="EULA Policy Generator"){
        return new Response(JSON.stringify(functions.generateEULA(data.data)))
    }else if (route==="Privacy Policy Generator"){
        return new Response(JSON.stringify(functions.generatePrivacyPolicy(data.data)))
    }else if (route==="Return & Refund Policy Generator"){
        return new Response(JSON.stringify(functions.generateReturnRefundPolicy(data.data)))
    }else if (route==="Subscription Terms & Conditions Generator"){
        return new Response(JSON.stringify(functions.generateSubscriptionTerms(data.data)))
    }
    else if (route==="Terms of Service Generator"){
        return new Response(JSON.stringify(functions.generateTermsOfService(data.data)))
    }
}