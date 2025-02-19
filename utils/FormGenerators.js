export function generateAcceptableUsePolicy(formData) {
    return `
Acceptable Use Policy

Effective Date: ${formData["current-date"]}

1. Introduction
        
This Acceptable Use Policy ("Policy") sets forth guidelines for the proper use of ${formData["business-name"]} ("Service"). By using our Service, you agree to comply with this Policy.

2. Prohibited ActivitiesYou may not use the Service to:

Violate any laws or regulations.

Transmit or distribute malware, viruses, or any harmful code.

Engage in unauthorized access, hacking, or security breaches.

Send spam, phishing messages, or conduct fraudulent activities.

Infringe upon the intellectual property or privacy rights of others.

Post, distribute, or promote unlawful, defamatory, or abusive content.

Engage in harassment, hate speech, or discrimination against any individual or group.

Misuse the Service in a way that affects its integrity, security, or availability.

3. User Responsibilities

Maintain the security of your account and login credentials.

Report any security vulnerabilities or breaches immediately.

Use the Service only for lawful purposes and in accordance with our Terms of Service.

4. EnforcementViolation of this Policy may result in:

Temporary or permanent suspension of access.

Removal of content that violates this Policy.

Legal action, if necessary.

5. Changes to this Policy
        
We reserve the right to update this Policy at any time. Continued use of the Service after changes take effect constitutes acceptance of the revised Policy.

6. Contact Us
        
If you have any questions or concerns about this Policy, please contact us at ${formData["contact-email"]}.

    `;
}


export function generatePrivacyPolicy(formData) {
    return `
Privacy Policy

Effective Date: ${formData["current-date"]}

1. Introduction

${formData["business-name"]} ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our services ("Service"). By using the Service, you agree to the practices described in this policy.

2. Information We Collect

We may collect personal information such as name, email address, phone number, and other contact details. We also gather usage data including information about your interactions with the Service, IP address, browser type, and device information. Additionally, we use cookies and tracking technologies to enhance user experience and analyze usage trends.

3. How We Use Your Information

We use the collected information to provide, maintain, and improve our Service. We communicate with you regarding updates, promotions, and customer support. We protect against fraud, unauthorized access, or other illegal activities and comply with legal obligations.

4. How We Share Your Information

We do not sell or rent your personal information. However, we may share it with service providers that assist in operating our Service, legal authorities if required by law or to protect our rights, and in the event of a business transfer such as a merger, sale, or acquisition.

5. Your Rights and Choices

You have the right to access, update, or delete your personal information. You can opt out of marketing communications and manage cookie preferences through your browser settings.

6. Data Security

We implement security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.

7. Changes to This Privacy Policy

We reserve the right to update this Privacy Policy at any time. We will notify you of significant changes through our Service or other means.

8. Contact Us

For any questions or concerns regarding this Privacy Policy, please contact us at ${formData["contact-email"]}.

`;
}


export function generateTermsOfService(formData) {
    return `
Terms of Service

Effective Date: ${formData["current-date"]}

1. Introduction

Welcome to ${formData["business-name"]} ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our services ("Service"). By using our Service, you agree to be bound by these Terms. If you do not agree, please do not use our Service.

2. Use of the Service

You must be at least ${formData["minimum-age"]} years old to use our Service. You agree to use the Service only for lawful purposes and in compliance with all applicable laws and regulations. Unauthorized use, including hacking, scraping, or disrupting the Service, is strictly prohibited.

3. Account Registration

If you create an account, you are responsible for maintaining its security and confidentiality. You agree to provide accurate and complete information. Any unauthorized use of your account must be reported immediately. We are not liable for any loss resulting from unauthorized account access.

4. Intellectual Property

All content, trademarks, logos, and intellectual property on the Service belong to us or our licensors. You may not use, copy, modify, or distribute any content without prior written permission.

5. Termination

We reserve the right to suspend or terminate your access to the Service at our discretion, without prior notice, if you violate these Terms or engage in unlawful activities.

6. Limitation of Liability

Our Service is provided "as is" without warranties of any kind. We are not responsible for any damages, losses, or liabilities arising from your use of the Service. To the maximum extent permitted by law, our liability is limited to the amount paid by you for the Service, if any.

7. Changes to These Terms

We may update these Terms at any time. Your continued use of the Service after any modifications constitutes acceptance of the revised Terms.

8. Governing Law

These Terms are governed by the laws of ${formData["business-location"]}. Any disputes arising under these Terms shall be resolved in the courts of ${formData["business-location"]}.

9. Contact Us

If you have any questions regarding these Terms, please contact us at ${formData["contact-email"]}.

    `;
}


export function generateSubscriptionTerms(formData) {
    return `
Subscription Policy

Effective Date: ${formData["current-date"]}

1. Introduction

This Subscription Policy outlines the terms and conditions related to subscription-based services provided by ${formData["business-name"]} ("we," "our," or "us"). By purchasing a subscription, you agree to comply with this policy.

2. Subscription Plans and Billing

Subscriptions are offered on both a monthly and annual basis, with fees charged automatically based on the selected plan. By subscribing, you authorize us to charge your payment method on a recurring basis until cancellation. Prices and billing cycles are specified at the time of purchase.

3. Free Trials and Promotions

We may offer free trials or promotional discounts at our discretion. If not canceled before the trial ends, the subscription will automatically convert to a paid plan. Terms of promotions may vary and are subject to change.

4. Cancellation and Refunds

You may cancel your subscription at any time through your account settings. Cancellations take effect at the end of the current billing cycle, and no refunds are provided for unused portions of the subscription. In certain cases, we may offer refunds or credits at our discretion.

5. Subscription Modifications

We reserve the right to modify subscription pricing, features, and terms. Any changes will be communicated in advance, and continued use of the service after modifications constitutes acceptance of the updated terms.

6. Payment Failures

If a payment fails, we will attempt to process it again. If the issue persists, access to the subscription service may be suspended or terminated until payment is received.

7. Termination by Us

We reserve the right to terminate a subscription for violations of our Terms of Service or any fraudulent activity. In such cases, refunds will not be provided.

8. Contact Us

If you have any questions regarding this Subscription Policy, please contact us at ${formData["contact-email"]}.

    `;
}


export function generateReturnRefundPolicy(formData) {
    return `
Return and Refund Policy

Effective Date: ${formData["current-date"]}

1. Introduction

This Return and Refund Policy outlines the terms and conditions for returning products and requesting refunds from ${formData["business-name"]} ("we," "our," or "us"). By making a purchase, you agree to this policy.

2. Returns

We accept returns within ${formData["return-window"]} days of the original purchase date. To be eligible for a return, the item must be unused, in its original packaging, and in the same condition as received. Certain items, such as digital products or perishable goods, may not be eligible for return.

3. Refunds

Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, refunds will be processed to the original payment method within ${formData["refund-time"]} business days. Shipping fees are non-refundable.

4. Exchanges

We only replace items if they are defective or damaged. If you need to exchange an item for the same product, contact us at ${formData["contact-email"]}.

5. Late or Missing Refunds

If you haven’t received a refund yet, check your bank account and contact your payment provider. Refunds may take some time to process. If you still have not received your refund, please contact us at ${formData["contact-email"]}.

6. Non-Returnable Items

Certain items are non-returnable, including but not limited to: digital downloads, gift cards, and personal care products. Please review the product description before making a purchase.

7. Shipping Returns

To return a product, mail it to ${formData["business-location"]}]. You will be responsible for covering return shipping costs unless the item was defective or incorrect. We recommend using a trackable shipping service.

8. Contact Us

If you have any questions about our Return and Refund Policy, please contact us at ${formData["contact-email"]}.
    `;
}


export function generateDisclaimer(formData) {
    return `
Disclaimer

Effective Date: ${formData["current-date"]}

1. General Information

The information provided by ${formData["business-name"]} ("we," "our," or "us") on ${formData["app-name"]} is for general informational purposes only. All content is provided in good faith; however, we make no representation or warranty of any kind regarding its accuracy, reliability, or completeness.

2. No Professional Advice

Nothing on our Service constitutes legal, financial, medical, or any other professional advice. You should consult with the appropriate professional before making any decisions based on the information provided. Your reliance on any information from our Service is solely at your own risk.

3. External Links Disclaimer

Our Service may contain links to third-party websites that we do not own or control. We do not assume responsibility for the content, privacy policies, or practices of any third-party sites. Visiting such links is at your own risk.

4. Limitation of Liability

We are not liable for any losses or damages arising from your use of our Service. To the maximum extent permitted by law, we disclaim all warranties, express or implied, related to the Service and its content.

5. Changes to This Disclaimer

We reserve the right to modify this Disclaimer at any time. Your continued use of the Service after any changes constitutes acceptance of the revised terms.

6. Contact Us

If you have any questions about this Disclaimer, please contact us at ${formData["contact-email"]}.

    `;
}

export function generateCookiePolicy(formData) {
    return `
Cookies Policy

Effective Date: ${formData["current-date"]}

1. Introduction

This Cookies Policy explains how ${formData["business-name"]} ("we," "our," or "us") uses cookies and similar tracking technologies on ${formData["app-name"]}. By using our Service, you agree to the use of cookies as described in this policy.

2. What Are Cookies?

Cookies are small text files stored on your device when you visit a website. They help enhance user experience by remembering preferences, improving functionality, and providing analytics.

3. Types of Cookies We Use

We use the following types of cookies:

Essential Cookies: Necessary for the operation of our website.

Analytical Cookies: Help us understand how users interact with our Service.

Functional Cookies: Remember preferences to enhance user experience.

Advertising Cookies: Used to deliver relevant ads and track performance.

4. Managing Cookies

You can manage or disable cookies through your browser settings. However, disabling certain cookies may affect website functionality.

5. Third-Party Cookies

Some third-party services we use may place their own cookies on your device. We do not control these cookies and recommend reviewing the respective third-party policies.

6. Changes to This Policy

We may update this Cookies Policy from time to time. Any changes will be posted on this page with the updated effective date.

7. Contact Us

If you have any questions about our use of cookies, please contact us at ${formData["contact-email"]}.

    `;
}


export function generateEULA(formData) {
    return `
End User License Agreement (EULA)

Effective Date: ${formData["current-date"]}

1. Introduction

This End User License Agreement ("Agreement") is a legal agreement between you ("User" or "You") and ${formData["business-name"]} ("Company," "we," "our," or "us") governing the use of ${formData["app-name"]} ("Software"). By installing, accessing, or using the Software, you agree to be bound by this Agreement. If you do not agree, do not install or use the Software.

2. License Grant

Subject to the terms of this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to use the Software for personal or business use in accordance with its intended purpose.

3. Restrictions

You agree not to:

Modify, reverse engineer, decompile, or disassemble the Software.

Distribute, sublicense, rent, lease, or transfer the Software to any third party.

Use the Software for any illegal or unauthorized purpose.

4. Ownership

The Software and all intellectual property rights therein remain the property of ${formData["business-name"]}. This Agreement does not grant you any ownership rights.

5. Updates and Modifications

We may update or modify the Software at our discretion. Continued use of the Software after an update constitutes acceptance of the modified Agreement.

6. Termination

We may terminate this Agreement if you fail to comply with its terms. Upon termination, you must stop using and uninstall the Software.

7. Disclaimer of Warranties

The Software is provided "as is" without warranties of any kind, express or implied. We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.

8. Limitation of Liability

To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from the use or inability to use the Software.

9. Governing Law

This Agreement shall be governed by and construed in accordance with the laws of ${formData["business-location"]}.

10. Contact Information

For any questions about this Agreement, contact us at ${formData["contact-email"]}.

    `;
}



