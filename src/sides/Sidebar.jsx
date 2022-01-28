
import React,{ useContext,useEffect,useState} from 'react'
import Context from '../Context';
import { faHome,faGlobe,faSquare,faGraduationCap,faSchool,faPersonBooth,faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {

    const {sOpen,links,userData,setSOpen} = useContext(Context);
    const [ifSmall,setIfSmall] = useState();
    
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 1000){setIfSmall(true)}
        else{ setIfSmall(false)}
    })

    useEffect(() => {
        if (window.innerWidth <= 1000){setIfSmall(true)
        setSOpen(false)}
        else{ setIfSmall(false)}
    }, [])
  
    return (
      
        <div className={`sidebar flex flex-col justify-start g-20 ${sOpen ? 'active' :""}`}>
           
            {console.log(userData)}
            <div className="person-info flex align-start">
            {ifSmall === true && <button className="navbarClose" onClick={() => setSOpen(false)}><FontAwesomeIcon icon={faTimes} /></button>}
                <div className="person">
                    <img src="https://i.ibb.co/swkR93p/bramdejager-600x600.png" alt="" />
                </div>
                <div className="info flex flex-col g-10">
                    <div className="name">
                        <h4>{userData?.user.name}</h4>
                        <h5>{userData?.user.id.title + " :"+userData?.user.id.value}</h5>
                    </div>
                    <div className="profile">
                        <button>
                            View Profile
                        </button>
                    </div>
                </div>
            </div> 
            <div className="links flex flex-col g-5 justify-start">
           {links?.map((item, key) => 
            <div key={key} className="link flex g-10 align-center justify-start">
                <div className="icon">
                <FontAwesomeIcon icon={item.icon}/>
                </div>
                <p>{item.title}</p>
            </div>
           )}
           </div>
        </div>
    
    )
}
