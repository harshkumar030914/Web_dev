import React from "react";
import "../homestyle.css";
const BigPost = () => {
  return (
    <>
      <div>
        <div class="container-img">
          <img
            src="./Big_Post.png"
            alt="Snow"
            style={{ width: "100%", height: "600px" }}
          />
          <div
            style={{
              position: "absolute",
              height: "300px",
              width: "100%",
              top: "30%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
                flexDirection: "column",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "Lora",
                    fontSize: "36px",
                    fontWeight: "600",
                  }}
                >
                  Richird Norton photorealistic rendering as real photos
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Lora",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. The credibly productivate
                  seamless data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BigPost;
