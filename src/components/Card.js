import reviews from "../data";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function Card({review}){
    return(
        <div>
            <div>
                <img src={review.image}/>
            </div>

            <div>
                {review.name}
            </div>

            <div>
                {review.job}
            </div>

            <div>
            <FaQuoteLeft />
            </div>

            <div>
                {review.text}
            </div>

            <div>
            <FaQuoteRight />
            </div>

        </div>
    )
}

export default Card;