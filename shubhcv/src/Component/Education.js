import React from "react";
import "./Education.css"
class Education extends React.Component {
    render() {
        return (
            <div className="container-fluid education">
                <div className="container">
                    <div className="col-md-12 expr">Education</div>
                    <div className="col-md-12 col-md-6 ">

                        <div className="row Edu">
                            <div className="col-md-12">
                                <h5 class="item-period ">20019-present</h5>
                                <h2>National Institute of Technology, Karnataka</h2>

                                <h4>M.Tech(Research), Grade 8.5/10</h4>

                                <p>Cryptography, Algorithms and Network Security,IoT Security</p>
                            </div>
                            <div className="col-md-12">
                                <h5 class="item-period ">2015-1019</h5>
                                <h2>Lovely Professional University</h2>

                                <h4>Bachelor of Computer Science and Engineering, Grade 9.19/10</h4>

                                <p>CyberSecurity,Embedded System</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>


        )
    }
}
export default Education;