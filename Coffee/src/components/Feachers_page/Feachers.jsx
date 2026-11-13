import React from "react";
import { useState } from "react";
import "./Feachers.css";

function Feachers(){

    function Card(){
        const [IsLike, setIsLike] = useState(false)
        const like = ()=>{
            setIsLike(true)
        }
        const unlike = ()=>{
            setIsLike(false)
        }
        function IsLiked(name){
            return(
                <div className="like--btn">
                {IsLike ? <h3 onClick={unlike}>❤️</h3> : <h3 onClick={like}>🤍</h3>}
                </div> 
            )
           
        }


        return(
            <div className="card">
                <div className="img-container">
                    <img src="./public/img_crd/images.jpg" />
                </div>
                <div className="card-content">
                    <h4>Black Coffee</h4>
                    <p>Price 50.00/=</p>
                    <div className="btn-div">
                        <IsLiked/>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        )

    }

    return(
        <section id="Feachers">
            <div className="feachers-container">
                <div className="card-divs">
                    <div className="tittle">
                        <h1>Hey <span>😎</span>. Check out our  Feachers</h1>
                        <p>We provide the best quality of coffee you could never get anywhere, trust me on that. <br />
                        And don't forget that for our evry five hundred customers we give the five hundred a free card so go throuh on our feachers some thing may intrest you.
                        </p>
                    </div>
                    <div className="container-card">
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                    <div className="time">
                        <h1>6:00 MORNING - 5:30 EVENING</h1>
                        <p>We are devoted workers who wake up arly to make shure you have a smile alry in the morning</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Feachers