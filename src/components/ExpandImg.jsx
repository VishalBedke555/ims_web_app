import { useEffect, useState } from "react";

export default function ExpandImageComponent(){
    const params = new URLSearchParams(window.location.search);
    const [img,setImg] = useState('')
    useEffect(()=>{
        setImg(params.get('img'))
    },[])

    return(
        <div>
            <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'16px'}}>
                <img  src={img} width="100%"/>
            </div>
        </div>
    )
}