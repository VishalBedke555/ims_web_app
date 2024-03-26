import { useNavigate } from "react-router-dom"
import imglogo from '../assets/IMS_PNG.png'
import { NavbarComponent } from "./NavbarComponent";
import { FooterComponent } from "./FooterComponent";

export default function AboutUseComponent(){
    const navigate = useNavigate();
    return(
        <div>
            <div>
                <NavbarComponent />
            </div>
            <div className="term-sec-1">
                <div>
                    <h2>Welcome to IMS Hospital</h2>
                    <p>
                        At IMS Hospital, we are committed to providing exceptional healthcare services to our community. With state-of-the-art facilities and a dedicated team of medical professionals, we strive to deliver compassionate and personalized care to every patient who walks through our doors.
                    </p>
                    <h3>Our Mission</h3>
                    <p>
                        Our mission is to promote the well-being and health of our patients by delivering comprehensive, high-quality medical services. We are dedicated to treating each individual with respect, dignity, and professionalism, while upholding the highest standards of medical ethics and patient safety.
                    </p>
                    <h3>Our Vision</h3>
                    <p>
                        We envision a healthier community through accessible, patient-centered care. We aim to be the preferred healthcare provider in the region, known for our excellence in medical services, technological advancements, and commitment to continuous improvement.
                    </p>
                    <h3>Our Services</h3>
                    <p>
                        At IMS Hospital, we offer a wide range of medical services to meet the diverse needs of our patients. Our experienced team of doctors, nurses, and support staff work collaboratively to provide comprehensive care across various specialties, including:
                        <ul>
                            <li>General Medicines</li>
                            <li>Surgery</li>
                            <li>Obstetrics and Gynecology</li>
                            <li>Pediatrics</li>
                            <li>Cardiology</li>
                            <li>Orthopedics</li>
                            <li>Neurology</li>
                            <li>Oncology</li>
                            <li>Radiology</li>
                            <li>Emergency Medicine</li>
                        </ul>
                    </p>
                    <h3>Patient-Centered Care</h3>
                    <p>
                        We believe in a patient-centered approach to healthcare, where the needs and preferences of our patients are prioritized. Our compassionate team ensures that every patient receives individualized attention, thorough diagnosis, and personalized treatment plans. We strive to create a supportive and healing environment that promotes the physical, emotional, and mental well-being of our patients.                    </p>
                    <h3>Community Engagement</h3>
                    <p>At IMS Hospital, we are deeply committed to our community. We actively engage in community outreach programs, health education initiatives, and partnerships with local organizations to promote health and wellness. We believe in empowering individuals to take control of their health and make informed decisions about their well-being.</p>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}