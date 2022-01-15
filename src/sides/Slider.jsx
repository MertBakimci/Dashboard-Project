import React,{useEffect,useState} from "react";
import {
  AiFillInfoCircle,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import slide_items from "../Datas/slides";
import { prevItem,nextItem } from "../js/slide";




function Slider() {
  const [ifMobile,setIfMobile] = useState(false);
  const checkScreenSize = () => {
    if(window.innerWidth <= 1000) {
      setIfMobile(true);
    } else {
      setIfMobile(false);
    }
  }

  useEffect(() => {
   checkScreenSize();
  }, [])

  window.addEventListener('resize', checkScreenSize);




  return (
    <div className="slider w-100 flex justify-start">
      <div className="payments flex g-10 align-center">
        <h4>MAKE PAYMENTS</h4>
        <i className="fas fa-info"/> 
        {ifMobile === true && 
              <div className="mobile-buttons flex g-10">
              <i className="fas fa-chevron-left" id="mobile_prev" onClick={()=> prevItem()} />
              <i className="fas fa-chevron-right" id="mobile_next" onClick={()=> nextItem()}  />
              </div>
       }
      </div>

     
      
      
      <div className="slider-wrapper flex justify-between align-center">
      {ifMobile === false && <i className="fas fa-chevron-left" id="prev" onClick={()=> prevItem()}  />}
        <div id="slider" className="slides flex justify-start align-start">
          {slide_items && 
            slide_items.map((item,key) =>(
              <div id="slide" key={key} className="slide g-10">
               <i className={`${item.icon_name}`}></i>
              <h5>{item.title}</h5>
            </div>
            ))
          }
        </div>
        {ifMobile === false  && <i className="fas fa-chevron-right" id="next" onClick={()=> nextItem()} />}
       
      </div>
    </div>
  );
}

export default Slider;