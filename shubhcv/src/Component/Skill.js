import React from "react";
import "./skill.css";
import ProgressBar from "./Progressbar.js";


const testData = [
    { bgcolor: "#6a1b9a", completed: 60, lang: "JAVA" },
    { bgcolor: "#00695c", completed: 30, lang: "PYTHON" },
    { bgcolor: "#ef6c00", completed: 70, lang: "NODEJS" },
    { bgcolor: "rgb(18 24 125)", completed: 65, lang: "cryptography" }
];
function Skill() {

    return (
        <div className="skill container-fluid">
            <div className="container">
                <div className="col-md-12 skil">Skill</div>
                {testData.map((item, idx) => (

                    <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} langauge={item.lang} />
                ))}
            </div>
        </div>
    )

}

export default Skill;