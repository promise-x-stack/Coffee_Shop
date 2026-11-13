import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Coffee from "./Scene.jsx"
import './Landing_page.css'
import { DirectionalLight } from 'three'


function LandingPage(){

    function ThreeDmodule(){
    
        return(
            <div className="threed-module">
                
                <Canvas camera={{position:[0,5,5],fov: 40}} >
                    <ambientLight intensity={0.8} color="#676783"/>
                    <directionalLight position={[5,5,5]} intensity={3}/>
                    <OrbitControls/>
                    <Coffee/>
                </Canvas>
            
                
            </div>
            )
          
        }
    

    function Content(){
        
       return(
            <div className="lading-page-text-content">
                <div className="text">
                    <h1>WE Make Your <span>
                        BODY
                        </span><br />
                     AMAIZING and Confidence TO Face The Day</h1><br /> <br />
                     <p>Enjoy your every cup with a smile on your face, at our Coffe Shop. <br />
                     Visit now to get yours today</p>
                </div>
            </div>
       )
    }

    function EndText(){
        return(
            <div className='paragraph'>
                <h5>Evry year we award our five hundred th customer a one full month free coffee card. <br/>
                Get your five hundred cup's of coffee and get free therty days more free of chearge. Start now</h5>
            </div>
            
        )
    }

    return(
        <section>
            <div className="landing-page">
                <div className="lading-page-container">
                    <Content/>
                    <ThreeDmodule/>
                    <EndText/>
                </div>
            </div>
        </section>
    )

}

export default LandingPage