import React from "react";
import "./Profile.css"
class Profiie extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 profile">
                            <h4 className="profil">PROFILE</h4>
                            <p className="profil-a">Hello! I am Shubham Kumar, a Research Scholar in National Institute of Technology Karnataka, Surathkal.
                            I enjoy creating things that live on the internet, whether it is a web application or mobile application. My goal is to create secure, scalable products with better performance.
                            I did my Bachelors in Computer Science and Engineering from Lovely professional University and then opted for research at NITK.</p>
                        </div>
                        <div className="col-md-6 pf">
                            <div id="mainDiv">
                                <div id="boxDiv">
                                    <div id="front"></div>
                                    <div id="back"></div>
                                    <div id="left"></div>
                                    <div id="right"></div>
                                    <div id="top"></div>
                                    <div id="bottom"></div>

                                    <div class="shadow"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Profiie;