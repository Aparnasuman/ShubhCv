import React from "react";
import "./header.css";
import shubh from "../img/shubh.jpg";
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container">


                    <div className="info-img row">
                        <div className="col-md-4">
                            <div className="img-b">
                                <div class="border"></div>
                                <img src={shubh} alt="shubh" className="d-block w-5 img-h" />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div className="info">
                                <h1 className="shubh">SHUBHAM <span className="kumar">KUMAR</span></h1>
                                <h3 className="soft">SOFTWARE DEVELOPER</h3>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default Header;