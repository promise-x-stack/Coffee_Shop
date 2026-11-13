import React from "react";
import './About.css'


function About(){

    function Image(){
        return(
            <div className="back-img">

            </div>
        )
    }

    function Text(){
        return(
            <div className="text-content">
                <h1>We Are a DEDICATED to make sure your day starts with a good cup of coffee to boost your ENERGY, ONE cup is equals Enengy BOOST.</h1>
            </div>
        )
    }

    return(
        <section id="About">
            <div className="about-container">
                <div className="content-container">
                    <Image/>
                    <Text/>
                </div>
            </div>
        </section>
    )
}

export default About