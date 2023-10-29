import React from "react";
import "../../../../App.css";
import Card from "../component/Card";
const MainSection = () => {
  return (
    <>
      <div
        style={{
          marginTop: "4%",
          marginBottom: "4%",
          marginLeft: "4%",
          marginRight: "4%",
        }}
      >
        <p
          style={{
            fontSize: "36px",
            fontFamily: "Lora",
            fontWeight: "600",
            textAlign: "left",
          }}
        >
          {"Popular topics"}
        </p>
        <div style={{ display: "flex", marginBottom: "2%" }}>
          <div
            style={{
              padding: 5,
              margin: 5,
              fontFamily: "Lora",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            All
          </div>
          <div
            style={{
              padding: 5,
              margin: 5,
              fontFamily: "Lora",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Fashion
          </div>
          <div
            style={{
              padding: 5,
              margin: 5,
              fontFamily: "Lora",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Travel
          </div>
          <div
            style={{
              padding: 5,
              margin: 5,
              fontFamily: "Lora",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Technology
          </div>
        </div>
        <div className="cards">
          <Card image={"./Blog_1.png"} />
          <Card image={"./Blog_2.png"} />
          <Card image={"./Blog_3.png"} />
          <Card image={"./Blog_4.png"} />
          <Card image={"./Blog_5.png"} />
          <Card image={"./Blog_6.png"} />
          <Card image={"./Blog_7.png"} />
          <Card image={"./Blog_8.png"} />
          <Card image={"./Blog_3.png"} />
          <Card image={"./Blog_4.png"} />
        </div>
      </div>
    </>
  );
};
export default MainSection;
