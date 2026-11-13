import React from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { DirectionalLight } from 'three';
import { CoffeeCup } from "../Take_out_page/Scene";
import './Takeout.css'

function Takeout(){

    function ThreeDmodule(){
    
        return(
            <div className="threed--module">
                
                <Canvas camera={{position:[0,5,2],fov: 70}} >
                    <ambientLight intensity={0.8} color="#676783"/>
                    <directionalLight position={[5,5,5]} intensity={3}/>
                    <directionalLight position={[-5,-5,-5]} intensity={0.5}/>
                    <OrbitControls/>
                    <CoffeeCup/>
                </Canvas>
                
            </div>
        )
          
    }

    return(
        <section>
            <div className="Three-content">
                <div className="three-text">
                    <h1>Get to Cury some with you, For the road</h1>
                    <p>We pack some to GO on  the road or to enjoy in your office. just say we do. </p>
                </div>
                <div className="contain-three">
                    <ThreeDmodule/>
                </div>
                <div className="p-text">
                    <p>Just walk onto the counter and order a take out, our workers will wrap the package nice and netly</p>
                </div>
            </div>
        </section>
    )
}

export default Takeout