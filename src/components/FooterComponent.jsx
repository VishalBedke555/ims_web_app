import { useNavigate } from 'react-router-dom'
import imglogo1 from '../assets/IMS_PNG.png'

export function FooterComponent(){
    const navigate = useNavigate()
    return(
        <div>
            <div className="footer">
                <div className="footer-main">
                    <div className="foot-div-1">
                        <div style={{ marginBottom: '10px' }}>
                            <img src={imglogo1} width="200" />
                        </div>
                        <div className="foot-div-2">
                            <p>
                                IMS Hospital is providing you the best services, All Age people can come for treatment,
                                we providing you the best services from our side.
                            </p>
                            
                        </div>
                    </div>
                    <div className="foot-div-3 pe-2">
                        <div>
                            <h3 style={{ fontSize: '20px' ,fontWeight:'600'}}>Contacts</h3>
                            <div className='mt-3'>
                                <b><i style={{fontSize:'20px'}} className='bi bi-telephone-fill pe-2'></i>9154979572</b>
                                <p className='pt-2'><span style={{fontSize:'20px'}} className='bi bi-geo-alt-fill pe-2'></span>D.no.19-5-12/1 Near Swatantra hospital Rajamahendravaram Head office: shoba esidency.shapur Nagar Hyderabad</p>
                            </div>
                        </div>
                    </div>
                    <div className="foot-div-3 ms-4">
                        <div>
                            <h3 style={{ fontSize: "20px",fontWeight:'600' }}>Information</h3>
                            <ul>
                                <li onClick={()=>navigate('/faq')}>FAQ's</li>
                                <li onClick={()=>navigate('/termsandconditions')}>Terms and Conditions</li>
                                <li onClick={()=>navigate('/privacy')}>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}