import { FaStar } from 'react-icons/fa'
import { useState } from "react";
import './style.css'


export default function StarRating({numOfStars = 5}) {
    
    const [rating, setRating] = useState(0) ;
    const [hover, setHover] = useState(0) ; 
    const [prevClick, setPrevClick] = useState(-1)

    function handleClick(getCurrentIndex) {
        if(prevClick === getCurrentIndex) {
            setPrevClick(-1) 
            setRating(0) ;
        }
        else {
            setPrevClick(getCurrentIndex) 
            setRating(getCurrentIndex)
        }
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
    }

    function handleMouseLeave() {
        setHover(rating)
    }

    return <div className="star-rating" >
        {
            [...Array(numOfStars)].map((arrayValue, index) => {
                
                index += 1 ;

                return <FaStar
                    key = {index}
                    style={{cursor:'pointer'}}
                    className={(index <= (hover || rating)) ? 'active' : 'inactive'}
                    onClick = {()=> handleClick(index)}
                    onMouseEnter = {()=> handleMouseEnter(index)}
                    onMouseLeave = {()=> handleMouseLeave()}
                    size = {100}
                />

            })

        }



    </div>
}