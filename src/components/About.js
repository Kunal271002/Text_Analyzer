import { useState } from "react";
import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function About() {
  const [dark, setDark] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const EnableDarkMode = () => {
    if (dark.color == "white") {
      setDark({
        color: "black",
        backgroundColor: "white",
      });
    } else
      setDark({
        color: "white",
        backgroundColor: "black",
      });
  };

  return (
    <div className="container" style={dark}>
      <h1 className="my-2">Developer</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={dark}
            >
              Facebook
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show "
            data-bs-parent="#accordionExample"
            style={dark}
          >
            <div className="accordion-body">
              <a
                className="btn btn-primary"
                style={{ backgroundColor: "#3b5998" }}
                href="https://www.facebook.com/profile.php?id=100011844931866"
                role="button"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={dark}
            >
              Instagram
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={dark}
          >
            <div className="accordion-body">
              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="https://www.instagram.com/_.kunnnaaal/"
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={dark}
            >
              Linked In
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={dark}
          >
            <div className="accordion-body">
              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="https://www.linkedin.com/in/kunal-sharma-413b63218/"
              >
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary my-3 "
          onClick={EnableDarkMode}
        >
          Disable Dark Mode
        </button>
      </div>
    </div>
  );
}
