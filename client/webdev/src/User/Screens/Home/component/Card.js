import React from "react";
const Card = ({ image }) => {
  return (
    <>
      <div style={{ backgroundColor: "#fff" }}>
        <div className="card" style={{ display: "flex" }}>
          <img
            className="card-img-top"
            src={image}
            alt="Card image cap"
            style={{ height: "300px" }}
          />
          <div className="card-body">
            <p
              className="card-title"
              style={{
                fontFamily: "Lora",
                fontWeight: 400,
                fontSize: "12px",
                textAlign: "left",
                color: "rgba(108, 117, 125, 1)",
              }}
            >
              08.08.2021
            </p>
            <p
              className="card-title"
              style={{
                fontFamily: "Lora",
                fontSize: "larger",
                fontWeight: 600,
                fontSize: "18px",
                color: "#495057",
                textAlign: "left",
              }}
            >
              Dream destinations to visit this year in Paris
            </p>
            <p
              className="card-text"
              style={{
                fontFamily: "Lora",
                fontWeight: 400,
                fontSize: "14px",
                color: "#495057",
                textAlign: "left",
              }}
            >
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
            <hr />
            <div
              style={{
                width: "100%",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img
                      src="./Blog_1.png"
                      alt="Card image cap"
                      style={{
                        height: "55px",
                        width: "55px",
                        borderRadius: "55px",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    marginLeft: "3%",
                  }}
                >
                  <div
                    style={{
                      padding: "10px",
                      fontSize: "16px",
                      fontFamily: "Lora",
                      fontWeight: 600,
                    }}
                  >
                    By David Tomas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
