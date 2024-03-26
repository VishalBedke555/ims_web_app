import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import './Home.css'
import imglogo from '../assets/ims__crop.png'


export function NavbarComponent(){
    const location = useLocation()
    const navigate = useNavigate()

    const handleHome = () =>{
        navigate('/')
    }
    const handleAboutUs = () =>{
        navigate('/aboutus');
    }
    
    return (
            <div>
                <div className='nav-main'>
                    
                    <div className="d-flex">
                    <p style={{fontSize:'13px',paddingTop:'25px'}}>V: (1.1)</p>
                        <div><img src={imglogo} width="95" height="75" style={{marginRight:'10px'}}/></div>
                        <div className="pt-1">
                            <span  className="ims">IMS</span><br/>
                            <span className="instance">INSTANT MEDICAL SERVICES</span>
                        </div>
                    </div>
                    <div className="navBtn">
                        <span onClick={handleHome} className={location.pathname=="/" ? `underline`:''} >Home</span>    
                        <span onClick={handleAboutUs} className={location.pathname=="/aboutus" ? `underline`:''}>About Us</span> 
                    </div>
                </div>
                <div className="collaps">
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check">
                        <i className="bi bi-list" id="btn"></i>
                    </label>
                    <div className="nav-2"> 
                        <label htmlFor="check">
                            <i className="bi bi-x-lg" id="cancel"></i>
                        </label>

                        <div className="nav-2-slide">
                            <div>
                                <p>
                                    <span onClick={handleHome}>Home</span>
                                </p>
                                <p><span onClick={handleAboutUs}>About Us</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}