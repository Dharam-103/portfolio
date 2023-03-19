import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import{ImCross} from "react-icons/im";

const Navbar=()=>{
    const[isMobile,setIsMobile]=useState(false);
    const[navcolor,setNavcolor]=useState(false);

   
    const handleClick=()=>{
        setIsMobile((prev)=> !prev);
    }

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>400){
                setNavcolor(true)
            }else{
                setNavcolor(false)
            }
        })
    },[])
  
  return(
        <section id={navcolor ?"nav-color":"nav-menu"}>
            <div className="nav_div1">
                <a href="#home">
                    <h1 className="heading">Dharmendra</h1>
                </a>
            </div>
             <div className="nav_div2">
             <ul className={isMobile ? "list-main active":"list-main" }
              onClick={()=> setIsMobile(false)}
             >
                <li>
                    <a href="#home" className="nav-link home">Home</a>
                </li>  
                <li>
                    <a href="#about" className="nav-link about">About</a>
                </li> 
                <li>
                    <a href="#skills"  className="nav-link skills">Skills</a>
                </li> 
                <li>
                   <a href="#projects"  className="nav-link projects">Projects</a>
                </li> 
                <li>
                   <a href="#contact"  className="nav-link contact">Contact</a>
                </li> 
                <button id="resume-button-1">
                   <a href="#home" className="nav-link resume"><i className="fa-solid fa-download"></i>Resume</a>
                </button>
            </ul>
             </div>
           <div className="mobile-menu" onClick={handleClick}>
              {isMobile ?<ImCross/>:<GiHamburgerMenu/>}
           </div>
           
        </section>
    )
}

export default Navbar;