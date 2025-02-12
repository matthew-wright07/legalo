export function generateAcceptableUsePolicy(formData) {
    return `
Acceptable Use Policy

1. Introduction  
Welcome to ${formData["business-name"]} (${formData["website-url"]}). This Acceptable Use Policy ("AUP") outlines the rules and guidelines for using our services.

2. Permitted Uses  
You may use our services for the following purposes:  
${formData["permitted-uses"]}

3. Prohibited Activities  
You agree not to engage in the following prohibited activities:  
${formData["prohibited-activities"]}

4. User Responsibilities  
As a user of ${formData["business-name"]}, you are responsible for:  
${formData["user-responsibilities"]}

5. Enforcement Actions  
We reserve the right to take the following actions in case of a violation:  
${formData["enforcement-actions"]}

6. Reporting Violations  
If you become aware of a violation of this policy, please report it to:  
${formData["reporting-violations"]}

7. Governing Law  
This policy is governed by the laws of:  
${formData["governing-law"]}

8. Contact Information  
For any questions or concerns about this policy, please contact us at:  
${formData["contact-email"]}

_Last Updated: ${new Date().toLocaleDateString()}_
    `;
}


export function generatePrivacyPolicy(formData) {
    return `
Privacy Policy

1. Introduction  
${formData["business-name"]} (${formData["website-url"]}) is committed to protecting your privacy.

2. Information We Collect  
${formData["data-collection"]}

3. How We Use Your Information  
${formData["data-usage"]}

4. Sharing of Information  
${formData["data-sharing"]}

5. Data Security  
${formData["data-security"]}

6. Your Rights  
${formData["user-rights"]}

7. Changes to This Policy  
${formData["policy-changes"]}

8. Contact Information  
For any privacy concerns, contact us at:  
${formData["contact-email"]}

_Last Updated: ${new Date().toLocaleDateString()}_
    `;
}


export function generateTermsOfService(formData) {
    return `
Terms of Service

1. Introduction  
Welcome to ${formData["business-name"]} (${formData["website-url"]}). By using our services, you agree to the following terms.

2. User Responsibilities  
${formData["user-responsibilities"]}

3. Prohibited Activities  
${formData["prohibited-activities"]}

4. Termination of Service  
${formData["termination"]}

5. Disclaimers and Limitations  
${formData["disclaimers"]}

6. Governing Law  
${formData["governing-law"]}

7. Contact Information  
For questions about these terms, reach us at:  
${formData["contact-email"]}

_Last Updated: ${new Date().toLocaleDateString()}_
    `;
}


export function generateSubscriptionTerms(formData) {
    return `
Subscription Terms & Conditions

1. Introduction  
${formData["business-name"]} (${formData["website-url"]}) provides subscription-based services. These terms govern your subscription.

2. Subscription Plans & Pricing  
${formData["subscription-plans"]}

3. Billing Cycle  
${formData["billing-cycle"]}

4. Cancellation Policy  
${formData["cancellation-policy"]}

5. Refund Policy  
${formData["refund-policy"]}

6. Auto-Renewal Terms  
${formData["auto-renewal"]}

7. Modifications to Subscription Terms  
${formData["modification-terms"]}

8. Governing Law  
${formData["governing-law"]}

9. Contact Information  
For any inquiries, contact us at:  
${formData["contact-email"]}

_Last Updated: ${new Date().toLocaleDateString()}_
    `;
}


export function generateReturnRefundPolicy(formData) {
    return `
Return & Refund Policy

1. Introduction  
At ${formData["business-name"]} (${formData["website-url"]}), we strive for customer satisfaction. This policy outlines our return and refund process.

2. Eligibility for Returns  
${formData["return-eligibility"]}

3. Refund Process  
${formData["refund-process"]}

4. Non-Returnable Items  
${formData["non-returnable-items"]}

5. Contact Information  
For any return or refund inquiries, reach out to:  
${formData["contact-email"]}

_Last Updated: ${new Date().toLocaleDateString()}_
    `;
}


export function generateDisclaimer(formData) {
    return `
Disclaimer

1. Introduction  
The information provided by ${formData["business-name"]} (${formData["website-url"]}) is for general informational purposes only.

2. No Legal or Professional Advice  
${formData["no-legal-advice"]}

3. Third-Party Links & Affiliations  
${formData["third-party-links"]}

4. Limitation of Liability  
${formData["limitation-liability"]}

5. Governing Law  
${formData["governing-law"]}

6. Contact Information  
For any questions regarding this disclaimer, please contact:  
${formData["contact-email"]}

_Last Updated: ${new Date().toLocaleDateString()}_
    `;
}

export function generateCookiePolicy(formData) {
    return `
Cookie Policy

1. Introduction  
${formData["business-name"]} ("we," "us," or "our") operates the website ${formData["website-url"]}. This Cookie Policy explains how we use cookies and similar technologies to improve your experience.

2. What Are Cookies?  
Cookies are small text files stored on your device when you visit a website. They help us enhance your browsing experience and analyze website traffic.

3. Types of Cookies We Use  
${formData["cookie-types"]}

4. How Long We Store Cookies  
Cookies will be stored for the following duration unless deleted by the user:  
${formData["cookie-duration"]}

5. User Consent  
We obtain user consent through the following method(s):  
${formData["user-consent-method"]}

6. Managing & Disabling Cookies  
Users can manage or disable cookies through their browser settings. However, disabling certain cookies may impact website functionality.

7. Privacy Policy  
For more details on how we process your data, please refer to our Privacy Policy:  
${formData["privacy-policy-url"]}

8. Contact Information  
If you have any questions about this Cookie Policy, please contact us at:  
${formData["contact-email"]}

_Last Updated: ${new Date().toLocaleDateString()}_
    `;
}


export function generateEULA(formData) {
    return `
End-User License Agreement (EULA)

1. Introduction  
This End-User License Agreement ("Agreement") is a legal agreement between you and ${formData["business-name"]} regarding the use of ${formData["software-name"]}.

2. License Grant  
${formData["business-name"]} grants you a ${formData["license-scope"]} license to use ${formData["software-name"]}.

3. Restrictions  
You agree not to:  
${formData["restrictions"]}

4. Termination  
This Agreement shall remain in effect until terminated. Termination conditions include:  
${formData["termination-conditions"]}

5. Limitation of Liability  
${formData["liability-disclaimer"]}

6. Governing Law  
This Agreement shall be governed by applicable laws.

7. Contact Information  
For any questions about this Agreement, contact:  
${formData["contact-email"]}

_Last Updated: ${new Date().toLocaleDateString()}_
    `;
}



