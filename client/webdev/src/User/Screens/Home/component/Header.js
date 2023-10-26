import React from "react";
const Header = () => {
  const mystyle = {
    header: {
      height: "600px",
      width: "100%",
      backgroundColor: "red",
    },
  };
  return (
    <>
      <div style={mystyle.header}></div>
    </>
  );
};
export default Header;
