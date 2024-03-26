import mobImg1 from '../dummyImages/mobileImg1.jpg'
import mobImg2 from '../dummyImages/mobileImg2.jpg'
import mobImg3 from '../dummyImages/mobileImg3.jpg'
import mobImg4 from '../dummyImages/mobileImg4.jpg'
import mobImg5 from '../dummyImages/mobileImg5.jpg'
import mobImg6 from '../dummyImages/mobileImg6.jpg'
import mobImg7 from '../dummyImages/mobileImg7.jpg'
import mobImg8 from '../dummyImages/mobileImg8.jpg'
import mobImg9 from '../dummyImages/mobileImg9.jpg'
import mobImg10 from '../dummyImages/mobileImg10.jpg'
import mobImg11 from '../dummyImages/mobileImg11.jpg'
import mobImg12 from '../dummyImages/mobileImg12.jpg'
import mobImg13 from '../dummyImages/mobileImg13.jpg'

import { useNavigate } from 'react-router-dom'

export default function ImageCheckComponent(){
    const imgArray = [mobImg1,mobImg2,mobImg3,mobImg4,mobImg5,mobImg6,mobImg7,mobImg8,mobImg9,mobImg10,mobImg11,mobImg12,mobImg13]
    const navigate = useNavigate();
    return(
        <div>
            {
                imgArray.map((img)=>{
                    return <div style={{padding:'20px'}}>
                            <div onClick={()=>navigate(`/expandimg?img=${img}`)}><img src={img} width="100%" /></div>
                        </div>
                })
            }
        </div>
    )
}