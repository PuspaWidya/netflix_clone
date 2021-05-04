import React, { useEffect,useState } from 'react'
import './Nav.css'


function Nav() {

const [show, handleShow] = useState(false)
   
    
const transitionNavBar = ()=>{
    if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    // console.log(window.scrollY)
}

useEffect(() => {
    window.addEventListener("scroll",transitionNavBar);
    //cleanup
    return () => window.removeEventListener("scroll",transitionNavBar,true)
}, [])
    return (
            <div className={`nav ${show && "nav_black"}`}>
                <div className="nav_container">
                    <img
                    className="nav_logo"
                    alt=""
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"></img>
                    <img
                    className="nav_avatar"
                    alt=""
                    src="https://i.pinimg.com/564x/34/62/d2/3462d27440aa255b1c314ff16f4032b4.jpg"></img>
                </div>
            </div>
    )
}

export default Nav
