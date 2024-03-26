import './Home.css'
import { useEffect, useState } from 'react'
import { useSpring,animated } from 'react-spring'

import img1 from '../assets/banner_imp_1.jpg'
import img2 from '../assets/banner_imp_2.jpg'
import img3 from '../assets/banner_imp_3.jpg'
import img4 from '../assets/banner_imp_4.jpg'
import img5 from '../assets/banner_imp_5.jpg'
import img6 from '../assets/banner_imp_6.jpg'

import imglogo from '../assets/IMS_Jpeg.jpg'
import imglogo1 from '../assets/IMS_PNG.png'

import nurse from '../assets/nurse2.jpg'
import diagnostics from '../assets/lab_diagnostics-removebg-preview.png'
import ambulence from '../assets/ambulence-removebg-preview.png'
import health from '../assets/health-asistance.jpg'
import blood from '../assets/bloodbank-removebg-preview.png'
import oxygen from '../assets/cylinder-removebg-preview.png'
import appointment from '../assets/appointment.png'

import thyro from '../assets/thyroid1.png'
import liver from '../assets/liver.png'
import obesity from '../assets/obecity1.webp'
import lungs from '../assets/lungs-removebg-preview.png'
import relation from '../assets/relation.png'
import heart from '../assets/heart1.jpg'
import diabetis from '../assets/diabities.png'
import bp from '../assets/bp1.png'

import device from '../assets/equipment.jpg'
import news from '../assets/news.png'
import ayurveda from '../assets/ayurveda.png'

import youtubeLogo from '../assets/youtube-logo.png'

import { useNavigate, useSearchParams } from 'react-router-dom'
import { NavbarComponent } from './NavbarComponent'
import { SpinnerComponent } from './LoaderComponent'
import { FooterComponent } from './FooterComponent'
import {doc, updateDoc,getDoc,collection, increment} from "firebase/firestore"
import { db } from './FireBase'

export default function HomeComponent() {

    const servicesArr = [
        { name: "Nurse Assistance", image: nurse,imgUrl:img4, desc:'A nurse is a healthcare professional who plays a vital role in the delivery of patient care. Nurses are trained and licensed to provide a wide range of medical services, support, and education to patients, families, and communities' }, 
        { name: "Lab and Diagnostics", image: diagnostics,imgUrl:img1,desc:'Lab and diagnostics refer to the branch of healthcare that involves the analysis and interpretation of medical tests and laboratory investigations to aid in the diagnosis, monitoring, and treatment of various diseases and conditions. ' }, 
        { name: "Ambulance", image: ambulence,imgUrl:img5,desc:'An ambulance is a specially equipped vehicle designed to transport sick or injured individuals to medical facilities for emergency medical care. Ambulances are a crucial component of the emergency medical services (EMS) system and play a vital role in providing pre-hospital care.' }, 
        { name: "Health Assistance", image: health,imgUrl:img3,desc:'Health assurance refers to a comprehensive approach to healthcare that focuses on maintaining and promoting overall health and well-being while mitigating the risk of illness and disease.' }, 
        { name: "Blood Bank", image: blood, imgUrl:img2,desc:'A blood bank is a facility or organization that collects, processes, stores, and distributes blood and blood products for transfusion to patients in need. The primary purpose of a blood bank is to ensure a safe and adequate supply of blood for medical treatments and emergencies.' }, 
        { name: "Oxygen Cylinders", image: oxygen,imgUrl:img6,desc:'Oxygen cylinders are portable containers that store and deliver compressed oxygen gas. They are commonly used in healthcare settings, homecare environments, and emergency situations to provide supplemental oxygen to individuals with respiratory conditions or those in need of oxygen therapy.' }]

    const collaborationArr = [
        { name: "Thyroid", image: thyro,discription:'The primary function of the thyroid gland is to produce thyroid hormones, (T4) and (T3).' },
        { name: "Liver", image: liver,discription:'The liver is a reddish-brown organ that weighs about 1.5 kilograms (3.3 pounds) in adults' },
        { name: "Obesity", image: obesity,discription:'Obesity is a medical condition characterized by excess body weight and an accumulation of body fat.' },
        { name: "Lungs", image: lungs,discription:'The lungs are a pair of essential organs located in the chest, specifically in the thoracic cavity.' },
        { name: "Sexual", image: relation,discription:'Sexuality is a complex and multifaceted aspect of human identity and experience. ' }, 
        { name: "Heart", image: heart,discription:'The heart is a muscular organ located in the chest, slightly to the left of the center. ' }, 
        { name: "Diabetise", image: diabetis,discription:'Diabetes mellitus, is a chronic metabolic disorder characterized by (hyperglycemia).' }, 
        { name: "BP", image: bp,discription:'Blood pressure refers to the force exerted by circulating blood against the walls of blood vessels.' }
    ]

    const urlArr = ['https://www.youtube.com/watch?v=DUaxt8OlT3o','https://www.youtube.com/watch?v=XfyGv-xwjlI','https://www.youtube.com/watch?v=3vuoNiV6OY8','https://www.youtube.com/watch?v=e13TGGccvT4']

    const navigate = useNavigate()
    const [youtubeData,setYoutubeData] = useState([])
    const [spin,setSpin] = useState('spinner-hide')
    const countCollectionRef = doc(db,'countCollection','countDocument')
    const [records,setRecords] = useState(0)
    const animatedNumber = useSpring({val:records,from:{val:0}})

    useEffect(() => {
        const youtubeThmbnails = async ()=>{
            try {
                setSpin(true)
                const youtubePromiss = urlArr.map((value)=>loadData(value))
                const youtubeResponse = await Promise.all(youtubePromiss)
                setYoutubeData(youtubeResponse)
            } catch (error) {
                alert(error)
            }
            setSpin(false)
        }
        
        youtubeThmbnails();
        

    }, [])
    useEffect(()=>{
        const getCountCollection = async()=> {
            
            try {
                    const isUpdated = window.sessionStorage.getItem("Updated")
                    if(!isUpdated){
                        await updateDoc(countCollectionRef, {
                            count: increment(1)
                        });
                        window.sessionStorage.setItem("Updated",true)
                    }
                    
               
                const docSnap = await getDoc(countCollectionRef);
                if (docSnap.exists()) {
                    setRecords(docSnap.data().count);
                    console.log('count',docSnap.data().count)
                  } else{
                    console.log("no")
                  }
              } catch (error) {
                console.log('Error incrementing count:', error);
              }
        } 
        getCountCollection();
    },[])

    const loadData = async (url) => {
            const res = await fetch(`https://www.youtube.com/oembed?url=${url}&format=json`)
            let data = await res.json();
            return data;
    }

    return (
        <div >
            {  records && 
                <div className='countDiv' >
                    <span>Visited</span>
                    <animated.div className='no'>{
                        animatedNumber.val.to(val=>Math.floor(val))
                    }</animated.div>
                </div>
            }
            <div>
                <NavbarComponent />
            </div>
            <div>
                <div className="carousel slide active carousel-dark" id="topBanner" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item  active">
                            <img src={img1} className="d-block w-100"/>
                        </div>
                        <div className="carousel-item item">
                            <img src={img2} className="d-block w-100 " />
                        </div>  
                        <div className="carousel-item item">
                            <img src={img3} className="d-block w-100 " />
                        </div> 
                        <div className="carousel-item item">
                            <img src={img4} className="d-block w-100 " />
                        </div> 
                        <div className="carousel-item item">
                            <img src={img5} className="d-block w-100 " />
                        </div> 
                        <div className="carousel-item item">
                            <img src={img6} className="d-block w-100 " />
                        </div>  
                    </div>
                    <button data-bs-slide="prev" data-bs-target="#topBanner" className="carousel-control-prev">
                        <i className='bi bi-chevron-left' style={{fontSize:'22px',color:'black'}}></i>
                     {/* <span className="carousel-control-prev-icon"></span> */}
                    </button>
                    <button  data-bs-slide="next" data-bs-target="#topBanner" className="carousel-control-next">
                        <i className='bi bi-chevron-right' style={{fontSize:'22px',color:'black'}}></i>
                        {/* <span  className="carousel-control-next-icon"></span> */}
                    </button>
                    <div className="carousel-indicators">
                        <button className="active" data-bs-slide-to="0" data-bs-target="#topBanner"></button>
                        <button data-bs-slide-to="1" data-bs-target="#topBanner"></button>
                        <button data-bs-slide-to="2" data-bs-target="#topBanner"></button>
                        <button data-bs-slide-to="3" data-bs-target="#topBanner"></button>
                        <button data-bs-slide-to="4" data-bs-target="#topBanner"></button>
                        <button data-bs-slide-to="5" data-bs-target="#topBanner"></button>
                    </div>
                </div>
            </div>
            <div className='section-grid'>
                <div className='gridMain'>
                    <h2 className='mb-4'>Our Services</h2>
                    <div className='grid-row'>
                        {servicesArr.map((value,index) => {
                            return <div key={index} onClick={()=>{navigate(`/description?title=${value.name}&img=${value.imgUrl}&desc=${value.desc}`)}} className='grid1'>
                                        <img src={value.image} />
                                        <p>{value.name}</p>
                                    </div>
                        })}
                    </div>
                </div>
            </div>
            <div className='section-grid'>
                <div className='gridMain'>
                    <h2 className='mb-4'>Collaboration Workshop</h2>
                    <div className='grid-row1'>
                        {collaborationArr.map((data,index) => {
                            return <div key={index} className='grid2'>
                                <img src={data.image} />
                                <p>{data.name}</p>
                                <span style={{textAlign:'left'}}>{data.discription}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            
            <div className='productDiv'>
                <h3 className='mb-3'>MEDICAL PRODUCTS</h3>
                <div className='productDiv1'>
                    
                    <div className='product-card'>
                        <div>
                            <img src={device} />
                        </div>
                        <div>
                            <p className='ps-2'>Medical Devices</p>
                            <ul>
                                <li>Blood Pressure Monitor: Used to measure a person's blood pressure, providing information about their cardiovascular health.</li>
                                <li>Thermometer: Used to measure body temperature and detect fever, helping in the diagnosis and monitoring of illnesses.</li>
                                <li>X-ray Machine: Utilized to generate images of bones, tissues, and organs, aiding in the diagnosis of fractures, tumors, and other conditions.</li>
                                <li>Electrocardiogram (ECG) Machine: Records the electrical activity of the heart, enabling the diagnosis and monitoring of heart conditions.</li>
                                <li>Insulin Pump: Used by individuals with diabetes to deliver insulin continuously, assisting in the management of blood sugar levels.</li>
                                <li>Pacemaker: An implantable device that regulates the heartbeat by sending electrical signals, used to treat abnormal heart rhythms.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='productDiv'>
                <h3 className='mb-3'>HEALTH ARTICLES</h3>
                <div className='productDiv1'>
                    <div className='product-card'>
                        <div>
                            <img src={news}/>
                        </div>
                        <div>
                            <p className='ps-2'>Health News</p>
                            <span>
                                The New York Times Health section, or the websites of health organizations like the World Health Organization (WHO)
                                or the Centers for Disease Control and Prevention (CDC) for the latest health news and updates. These sources often 
                                provide reliable and up-to-date information on various health-related topics, including recent medical 
                                breakthroughs, disease outbreaks, public health initiatives, and more.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-grid'>
                <div className='gridMain'>
                    <h2>Youtube Collaboration</h2>
                    <div className='grid-row1'>
                        { youtubeData.map((res,index)=>{
                                return <div key={index} onClick={()=>{window.open(urlArr[index],"_blank")}} className='grid3'>
                                            <img src={res.thumbnail_url} style={{borderRadius:'8px'}} />
                                            <div className='youtubeIcon'><img src={youtubeLogo}/></div>
                                            <p className='youtubeCaption'>{res.title}</p>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <FooterComponent/>
            {
                spin && <SpinnerComponent/>
            }
        </div>
    )
}