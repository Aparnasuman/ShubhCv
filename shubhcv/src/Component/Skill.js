import React from "react";
import "./skill.css";
import ProgressBar from "./Progressbar.js";



function Skill() {

    return (
        <div className="skill container-fluid">
            <div className="container">
                <div className="col-md-12 skil">Skill</div>

                <ProgressBar
                    label="Node Js"
                    visualParts={[
                        {
                            percentage: "80%",
                            color: "blue"
                        }
                    ]}
                />
                <ProgressBar
                    label="java"

                    visualParts={[
                        {
                            percentage: "43%",
                            color: "indianred"
                        }
                    ]}
                />
                <ProgressBar
                    label="C"
                    backgroundColor="lightgrey"
                    visualParts={[
                        {
                            percentage: "53%",
                            color: "steelblue"
                        },

                    ]}
                />
                <ProgressBar
                    label="PYTHON"
                    visualParts={[

                        {
                            percentage: "78%",
                            color: "tomato"
                        }

                    ]}
                />
            </div>
        </div>
    )

}

export default Skill;