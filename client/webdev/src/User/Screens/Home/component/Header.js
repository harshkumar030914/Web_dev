import React, { useState, useEffect } from "react";
const Header = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);
  return (
    <>
      <div className="slider-container">
        <style>{styles}</style>
        <div className="slider">
          <img
            style={{ height: "500px", width: "100%" }}
            src={images[currentSlide]}
          />
          <div
            style={{
              height: "70px",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              position: "absolute",
              left: 0,
              top: 0,
            }}
          ></div>
          <div
            className="text-box"
            style={{
              height: "500px",
              marginTop: "10%",
            }}
          >
            <h1
              style={{
                fontSize: "36px",
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "Lora",
                textAlign: "left",
                paddingLeft: "4px",
                paddingRight: "4px",
              }}
            >
              {"Richird Norton photorealistic rendering as real photos"}
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "Lora",
                textAlign: "left",
                paddingLeft: "4px",
                paddingRight: "4px",
              }}
            >
              {
                "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data"
              }
            </p>
            <div className="paging-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const styles = `
.slider-container {
  position: relative;
  max-width: 100%;
}

.slider {
  display: flex;
  overflow: hidden;
  position: relative;
}

.slide {
  min-width: 100%;
  overflow: hidden;
}

.slide img {
  width: 100%;
  height: auto;
}

.text-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  color: white;
  padding: 20px;
  height:500px;
}

.text-content {
  max-width: 50%;
  margin: 0 auto;
  background-color: #888;
}

.paging-dots {
  text-align: left;
  margin-top: 10px;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color:rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: #fff;
}

@media (max-width: 768px) {
  .slider-container {
    max-width: 100%;
  }
  .text-box{
    width:80%;
  }
}

@media (max-width: 480px) {
  .slider-container {
    max-width: 100%;
  }
  .text-box{
    width:100%;
  }
  .paging-dots {
    display: none;
  }
}
`;
export default Header;
