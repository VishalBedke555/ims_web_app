import { useEffect, useState } from "react"
import { NavbarComponent } from "./NavbarComponent"
import './Home.css'


export default function DescriptionComponent() {
    const [img, setImg] = useState('')
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const param = new URLSearchParams(window.location.search)
    const [spin,setSpin] = useState(false)


    useEffect(()=>{
        setSpin(true)
        setImg(param.get('img'))
        setDesc(param.get('desc'))
        setTitle(param.get('title'))
        setSpin(false)
    },[])
    return (
        <div>
            <div>
                <NavbarComponent />
            </div>
            <div className="descMain text-center"> 
                <h3>{title}</h3>
                 <div className="carousel slide carousel-dark" id="topBanner" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item  active">
                            <img src={img} className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src={img} className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src={img} className="d-block w-100"/>
                        </div>
                    </div>
                    <button data-bs-slide="prev" data-bs-target="#topBanner" className="carousel-control-prev">
                        <i className='bi bi-chevron-left' style={{fontSize:'22px',color:'black'}}></i>
                        {/* <span className="carousel-control-prev-icon"></span> */}
                    </button>
                    <button data-bs-slide="next" data-bs-target="#topBanner" className="carousel-control-next">
                        <i className='bi bi-chevron-right' style={{fontSize:'22px',color:'black'}}></i>
                        {/* <span className="carousel-control-next-icon"></span> */}
                    </button>
                    <div className="carousel-indicators">
                        <button className="active" data-bs-slide-to="0" data-bs-target="#topBanner"></button>
                        <button data-bs-slide-to="1" data-bs-target="#topBanner"></button>
                        <button data-bs-slide-to="2" data-bs-target="#topBanner"></button>
                    </div>
                </div>
                <div className="desc-p"><p>{desc}</p></div>
            </div>
            {
                spin && <SpinnerComponent/>
            }
        </div>
    )
}