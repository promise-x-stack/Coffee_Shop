import React from 'react'
import {useState} from 'react'
import './Contact.css'

function Contacts(){

    function ContactDiv(){

        return(
            <div className="contact-div">
                <div className="contact-header">
                    <h1>Contuct Us</h1>
                </div>
                <div className="contuct-content">
                    <ul>
                        <li>+254 7846 45278</li>
                        <li>+254 7345 34579</li>                        
                    </ul>
                </div>
            </div>
        )

    }

    function SocialHundls(){

        return(
            <div className="social-hundls contact-div">
                <div className="social-header contact-header">
                    <h1>Our hundls</h1>
                </div>
                <div className="social-content contuct-content">
                    <ul>
                        <li>Instagram</li>
                        <li>Tiktok</li>
                        <li>Facebook</li>
                        <li>Linkdin</li>
                    </ul>
                </div>
            </div>
        )

    }

    function Form(){
        
        const clik=async()=>{
            const data = document.getElementById("email")
            //console.log(data.value)
            await fetch("http://127.0.0.1:5000/users/emails", {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({"email":`${data.value}`})
            })
            .then(response=>{
                console.log(response.status)
            })
            .catch(error=>{
                console.log(error)
            })
        }

    return(
            <div className="form-container">
                <div>
                    <input type="email" id="email" name="email" placeholder='example@gmail.com' id="email" />
                    <button onClick={clik} id='btn'>Subscribe</button>
                </div>
            </div>
        )

    }

    function Wrap(){

        return(
            <div className="contact-container">
                <ContactDiv/>
                <SocialHundls/>
                <Form/>
            </div>
        )

    }

    return(

        <section id='Contacts'>
            <div className="contuct-wraper">
                <Wrap></Wrap>
            </div>
        </section>

    )

}

export default Contacts