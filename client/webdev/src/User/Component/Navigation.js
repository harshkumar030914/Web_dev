import React, { useState, useEffect } from "react";
const Navigation = () => {
  const [shouldRenderContent, setShouldRenderContent] = useState(true);
  const [showsidenav, setshowsidenav] = useState(false);

  useEffect(() => {
    // Check the window width and update the state
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setshowsidenav(false);
        setShouldRenderContent(false);
      } else {
        setShouldRenderContent(true);
      }
    };
    // Add a resize event listener
    window.addEventListener("resize", handleResize);
    // Initial check when the component mounts
    handleResize();
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div
        style={{
          height: "70px",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", height: "70px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 3,
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "30px",
                color: "white",
                fontFamily: "Lora",
              }}
              className="m-5"
            >
              {"LOGO"}
            </p>
          </div>
          {shouldRenderContent ? (
            <>
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 0.6,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "Lora",
                    cursor: "pointer",
                  }}
                  className="m-5"
                >
                  {"Home"}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 0.6,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "Lora",
                    cursor: "pointer",
                  }}
                  className="m-5"
                >
                  {"About"}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 0.6,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "Lora",
                    cursor: "pointer",
                  }}
                  className="m-5"
                >
                  {"Articles"}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 0.6,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "Lora",
                    cursor: "pointer",
                  }}
                  className="m-5"
                >
                  {"Blogs"}
                </p>
              </div>
            </>
          ) : (
            <span
              onClick={() =>
                showsidenav ? setshowsidenav(false) : setshowsidenav(true)
              }
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginRight: "20px",
                cursor: "pointer",
              }}
            >
              <i
                className="fa fa-bars"
                style={{ fontSize: "25px", color: "#fff " }}
              ></i>
            </span>
          )}
        </div>
      </div>
      {showsidenav && (
        <div
          style={{
            position: "absolute",
            zIndex: 100,
            left: "0px",
            top: "0px",
            height: "100%",
            width: "300px",
            backgroundColor: "#111",
          }}
        >
          <div style={{ marginTop: "40px" }}>
            <a style={styles.text} href="#">
              About
            </a>
            <a style={styles.text} href="#">
              Services
            </a>
            <a style={styles.text} href="#">
              Clients
            </a>
            <a style={styles.text} href="#">
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
};
const styles = {
  text: {
    padding: "8px 8px 28px 0px",
    "text-decoration": "none",
    "font-size": "25px",
    color: "#818181",
    display: "block",
    cursor: "pointer",
  },
  closebtn: {
    "font-size": "36px",
    color: "white",
    cursor: "pointer",
  },
};
export default Navigation;
