import { NavbarComponent } from "./NavbarComponent"
import { FooterComponent } from "./FooterComponent"

export default function FaqComponent(){

    return(
        <div>
            <div>
                <NavbarComponent />
            </div>
            <div className="term-sec-1">
                <div>
                    <h2>FAQ's</h2>
                    
                    <h3>What are your visiting hours?</h3>
                    <p>
                        We understand the importance of having support from loved ones during your hospital stay. Our visiting hours are from 10:00 am to 8:00 pm, seven days a week. However, please note that some specialized units may have specific visiting guidelines for the well-being of patients.
                    </p>
                    <h3>How can I make an appointment?</h3>
                    <p>
                        To make an appointment, you can call our dedicated appointment line at [phone number] or use our online appointment request form available on our website. We recommend scheduling appointments in advance to ensure availability.
                    </p>
                    <h3>What insurance plans do you accept?</h3>
                    <p>
                        We accept a wide range of insurance plans. For a comprehensive list, please visit our Insurance and Billing page on the website. If you have any specific insurance-related questions, feel free to contact our billing department.
                    </p>
                    <h3>What should I bring for my hospital stay?</h3>
                    <p>
                        When you come for a hospital stay, it's helpful to bring personal identification, insurance information, a list of current medications, any relevant medical records, and comfortable clothing. Avoid bringing valuable items or excessive cash, as the hospital cannot be responsible for their safety.
                    </p>
                    <h3>Do you have parking facilities?</h3>
                    <p>Yes, we have ample parking facilities available for patients and visitors. Our parking areas are conveniently located near the main entrance of the hospital. Please follow the designated parking signs and be mindful of any parking fees or time restrictions.</p>
                    <h3>How can I access medical records or test results?</h3>
                    <p>
                        You can access your medical records and test results through our secure online patient portal. If you haven't registered for the portal yet, our staff can assist you during your visit or provide instructions on how to sign up.
                    </p>
                    <h3>What services do you provide in your emergency department?</h3>
                    <p>
                        Our emergency department provides comprehensive emergency medical services 24 hours a day, 7 days a week. We have a skilled team of emergency physicians, nurses, and support staff who are equipped to handle a wide range of emergencies, from minor injuries to life-threatening conditions.
                    </p>
                    <h3>Are you hiring? How can I apply for a job?</h3>
                    <p>
                        We occasionally have job openings in various departments. To explore current job opportunities and submit your application, please visit our Careers page on the website. The page will provide you with information on available positions and the application process.
                    </p>
                    <h3>Do you offer financial assistance for medical expenses?</h3>
                    <p>
                        We understand that medical expenses can be a burden for some patients. Our hospital has financial assistance programs available for eligible individuals. Please contact our billing department to inquire about the options and the application process.
                    </p>
                    <h3>Can I provide feedback or file a complaint?</h3>
                    <p>
                        Yes, we value feedback from our patients and visitors. If you have any suggestions, compliments, or complaints, we encourage you to reach out to our Patient Relations department. They will assist you in resolving any concerns and improving our services.
                    </p>
                    <p>
                        <b>NOTE:</b> The information provided here is general and may vary depending on specific circumstances. For personalized assistance or more detailed information, please contact our hospital directly.
                    </p>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}