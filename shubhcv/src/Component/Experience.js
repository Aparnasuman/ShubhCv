import React from "react";
import "./Experience.css";
import ImgNum from "../img/Captur.PNG"
import ImgNuo from "../img/crypt.jpg"
class Experience extends React.Component {
    render() {
        return (
            <div className="container-fluid  exp">
                <div className="container main">
                    <div className="col-md-12 expr">Experience</div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div class="gradient-border box-main" id="box">

                                    <h2> SOFTWARE ENGINEER INTERN</h2>
                                    <h3>Think201</h3>
                                    <p className="detail">
                                        I used to work here mainly to develop backend of web application using typescript ,nodeJS and PostgreSQL.
                                        I worked on three project under guidence of three Intern.
                                </p>
                                </div>
                            </div>
                            <div className="col-md-6 box1">
                                <img src={ImgNum} alt="img" className="crypt" />
                            </div>


                        </div>
                        <div className="row">

                            <div className="col-md-6 box1 w-3 ">
                                <img src={ImgNuo} alt="img" className="crypt1" />
                            </div>
                            <div className="col-md-6 mtch">
                                <div class="gradient-border" id="box">

                                    <h2>MTECH RESEARCH</h2>
                                    <h3>NITK Surathkal</h3>
                                    <p className="detail">
                                        I am currently a graduate student researching in Computer Science at the National Institute of Karnataka. I have my passion for programming and am always keen to expand my horizons understanding the internal workings of the systems.I strongly believe in relating theory to practical implementation through low-level details, and this has motivated me to learn and practice up to the lowest level of system details.
                                </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
export default Experience;