import React from "react";
import "./Header.css";
import introPic from "../img/shubh.jpg";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container-fluid">
          <div className="info-img row">
            <div className="col-md-5">
              <div className="img-b m-auto">
                <div class="intro-pic-border"></div>
                <img
                  src={introPic}
                  alt="cv profile"
                  className="d-block w-5 img-h"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div className="info">
                <h1 className="firstName">
                  SHUBHAM <span className="lastName">KUMAR</span>
                </h1>
                <h3 className="designation">SOFTWARE ENGINEER</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
