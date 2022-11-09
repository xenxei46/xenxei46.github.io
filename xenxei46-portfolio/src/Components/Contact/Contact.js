import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
 import user from '../../assets/user.jpg';

function Contact (){
    return(
    <div className="contact w-[80%] lg:w-[80%] h-full flex justify-center items-center flex-wrap" id="contact">
        <div>
            <div className="flex justify-center py-3">
                <div className="contact-img" >
                    <img src={user} alt="user" />
                </div>
            </div>
            <div>
                <h2 className="text-2xl flex justify-center ">Wisdom John Ikoi</h2>
            </div>
            <div className="flex py-3">
                <div className="flex">
                    <span className="flex items-center px-2">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    </span>
                     <p>Wikoiplus@gmail.com</p>
                </div>
                <div className="flex">
                <span className="flex items-center px-2">
                    <FontAwesomeIcon icon={faPhone}/>
                </span> 
                <p>+234 0906 814 0123</p>
                </div> 
            </div>
            <div className="flex justify-center">
                <div className="grid gird-cols-6 grid-cols-4 gap-4">
                    <div> <FontAwesomeIcon icon={faEnvelope}/></div>
                    <div> <FontAwesomeIcon icon={faEnvelope}/></div>
                    <div> <FontAwesomeIcon icon={faEnvelope}/></div>
                    <div> <FontAwesomeIcon icon={faEnvelope}/></div>
                </div>
            </div>
        </div>
     </div>
    )
}

export default Contact;