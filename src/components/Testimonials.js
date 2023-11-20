import { useState } from "react";
import Card from "./Card";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Testimonials({reviews}){

    const[index,setIndex]=useState(0);

    function leftHandler(){
        if(index==0){
            setIndex(reviews.length);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightHandler(){
        if(index==reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function randomHandler(){
        let random=Math.floor(Math.random()*reviews.length);
        setIndex(random);
    }
    

    return(
        <div>
            <div>
            <Card review={reviews[index]}/>
            </div>

            <div>
                <button onClick={leftHandler}><FaChevronLeft /></button>
                <button onClick={rightHandler}><FaChevronRight /></button>
            </div>

            <div><button onClick={randomHandler}>Surprise Me</button></div>
        </div>
    )
}

export default Testimonials;