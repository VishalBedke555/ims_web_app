import { NavbarComponent } from "./NavbarComponent"
import { FooterComponent } from "./FooterComponent"

export default function TermsAndConditionsComponent(){
    return(
        <div>
            <div>
                <NavbarComponent />
            </div>
            <div className="term-sec-1">
                <div>
                    <h2 >Terms & Conditions</h2>
                    <h3>Medical Services and Advice</h3>
                    <p>
                        a. Our hospital provides medical services, treatments, and procedures based on professional expertise and available resources. However, we cannot guarantee specific outcomes or results. <br/>
                        b. The information provided on our website, by our staff, or through any other means is for general informational purposes only and should not be considered medical advice. Always consult a qualified healthcare professional for diagnosis, treatment options, and medical advice tailored to your specific condition.
                    </p>
                    <h3>Patient Rights and Responsibilities</h3>
                    <p>
                        a. As a patient, you have the right to receive respectful and considerate care, privacy and confidentiality, and information about your medical condition and treatment options. You also have the responsibility to provide accurate information about your health, follow prescribed treatments, and respect the rights of other patients and healthcare providers. <br/>
                        b. We adhere to applicable laws and regulations to protect your rights and privacy. Please refer to our Privacy Policy for more information on how we handle your personal information.
                    </p>
                     <h3>Appointment and Scheduling</h3>
                     <p>
                        a. To schedule an appointment, you may be required to provide relevant personal information and medical history. Please ensure that the information provided is accurate and complete. <br/>
                        b. We make every effort to accommodate appointment requests; however, the availability of specific time slots or healthcare providers is subject to change. We appreciate your understanding and flexibility.
                     </p>
                     <h3>Billing and Payment</h3>
                     <p>
                        a. Our hospital operates on a fee-for-service basis, and you are responsible for all charges related to the services rendered. This includes fees for consultations, tests, treatments, medications, and other applicable services.<br/>
                        b. We accept various payment methods, such as cash, credit/debit cards, and insurance coverage, subject to our agreement with your insurance provider. Please consult with our billing department or refer to our Insurance and Billing page for specific details and accepted insurance plans.
                     </p>
                     <h3>Visitor Guidelines</h3>
                     <p>
                        a. We welcome visitors to our hospital but request that they comply with the specified visiting hours and guidelines. These guidelines may include restrictions for certain hospital areas, such as intensive care units, to ensure patient privacy and safety.<br/>
                        b. Visitors must follow all hospital policies, including infection control measures, noise regulations, and respectful behavior towards staff, patients, and other visitors.
                     </p>
                     <h3>Complaints and Feedback</h3>
                     <p>
                        a. We value your feedback and strive to provide excellent care. If you have any complaints, concerns, or suggestions regarding our services, please contact our Patient Relations department. We will address your concerns promptly and work towards a resolution.
                     </p>
                     <h3>Limitation of Liability</h3>
                     <p>
                        a. While we take every effort to provide accurate and reliable information, our hospital and its affiliates, staff, and contractors shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of our services or reliance on the information provided.
                     </p>
                     <h3>Modification of Terms</h3>
                     <p>
                        a. We reserve the right to modify or update these terms and conditions at any time without prior notice. The updated terms will be effective upon posting on our website or through other appropriate communication channels. <br/>
                        b. It is your responsibility to review these terms periodically. Your continued use of our hospital's services constitutes acceptance of any modifications made.
                     </p>
                     <p>
                        <b>NOTE:</b> These terms and conditions are subject to change, and it is recommended to review them periodically. If you have any questions or concerns about our terms and conditions, please contact us for further assistance.
                     </p>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}