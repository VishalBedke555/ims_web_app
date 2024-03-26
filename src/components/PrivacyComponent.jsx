import { NavbarComponent } from "./NavbarComponent"
import { FooterComponent } from "./FooterComponent"

export default function PrivacyComponent(){
    return(
        <div>
            <div>
                <NavbarComponent />
            </div>
            <div className="term-sec-1">
                <div>
                    <h2 >Privacy Policy</h2>
                    <p>
                        Thank you for choosing our hospital. Protecting your privacy and ensuring the security of your personal information is of utmost importance to us. This Privacy Policy explains how we collect, use, and protect your personal data when you interact with our hospital. By using our services and providing us with your information, you consent to the practices described in this policy. If you have any questions or concerns regarding your personal information, please don't hesitate to contact us.
                    </p>
                    <h3>Information We Collect</h3>
                    <p>
                        a. Personal Information: We may collect personal information such as your name, contact details, date of birth, gender, and other relevant demographic information.<br/>
                        b. Medical Information: We may collect medical information such as your medical history, diagnosis, treatment records, test results, and other health-related information necessary for providing you with healthcare services.
                    </p>
                     <h3>How We Use Your Information</h3>
                     <p>
                        a. Providing Healthcare Services: We use your personal and medical information to provide you with appropriate healthcare services, including diagnosis, treatment, and follow-up care. <br/>
                        b. Communication and Support: We may use your information to communicate with you about your healthcare appointments, test results, billing, and other related matters. We may also provide educational materials or updates regarding our services.                     </p>
                     <h3>Information Sharing and Disclosure</h3>
                     <p>
                        a. We take appropriate measures to protect your personal information and limit its access to authorized personnel only. We do not sell, rent, or disclose your personal information to third parties for marketing purposes without your explicit consent.<br/>
                        b. We may share your information with trusted third-party service providers who assist us in delivering our services. These providers are contractually bound to maintain the confidentiality and security of your information.                     
                    </p>
                     <h3>Data Security</h3>
                     <p>
                        a. We implement technical, administrative, and physical safeguards to protect your personal information against unauthorized access, disclosure, alteration, or destruction. <br/>
                        b. We regularly review and update our security measures to ensure the confidentiality and integrity of your data. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
                     </p>
                     <h3>Retention of Personal Information</h3>
                     <p>
                        a. We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
                     </p>
                     <h3>Your Rights</h3>
                     <p>
                        a. You have the right to access, correct, update, and delete your personal information. If you wish to exercise these rights, please contact us, and we will assist you accordingly. <br/>
                        b. Depending on applicable laws, you may have additional rights, such as the right to restrict processing or object to the processing of your personal information.
                     </p>
                     <h3>Children's Privacy</h3>
                     <p>
                        a. Our services are not intended for individuals under the age of 18. If we become aware that we have inadvertently collected personal information from a child without parental consent, we will take steps to delete such information promptly.
                     </p>
                     <h3>Third-Party Links and Services</h3>
                     <p>
                        a. Our website or digital platforms may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review their privacy policies before providing any personal information.
                     </p>
                     <p>
                        <b>NOTE:</b> This Privacy Policy applies to our hospital's practices regarding the collection, use, and protection of personal information. It does not cover the practices of other organizations or individuals not affiliated with our hospital.
                     </p>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}