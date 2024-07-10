import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './style.css';


export default function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (url !== "")
      fetch(`${url}?page=${page}&limit=${limit}`)
        .then((response) => {
          setLoading(true);
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setImages(data);
        })
        .catch((error) => {
          setLoading(false);
          setErrorMsg(error.message);
        });
  }, [url, limit, page]);


  function handlePrevious() {
      setCurrentSlide((currentSlide-1+images.length)%images.length)
  }

  function handleNext() {
    setCurrentSlide((currentSlide+1)%images.length)
  }

  if (loading) {
    return <div>Loading Data ! Please Wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occurred ! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={currentSlide === index ? "current-image" : "hide-current-image"}
            /> 
          ))
        : null}
          
        <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
        <span className="circle-indicators">
        {
            images && images.length ? 
            images.map((_,index)=> 
                <button 
                key={index}
                className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                onClick={()=>setCurrentSlide(index)}
                ></button>
            )
            : null
        }
        </span>

    </div>
  );
}
