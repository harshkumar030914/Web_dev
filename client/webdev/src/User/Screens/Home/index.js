import React from "react";
import Header from "./component/Header";
const Home = () => {
  const data = [
    "/slider_1.png",
    "/slider_2.png",
    "/slider_3.png",
    "/slider_4.png",
  ];
  return (
    <>
      <Header images={data} />
    </>
  );
};
export default Home;
