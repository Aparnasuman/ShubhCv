import React from "react";
import "./skill.css"
const ProgressBar = (props) => {
    const { bgcolor, completed, langauge } = props;

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 10
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div>
            <h1 className="lang"> {`${langauge}`} </h1>
            <div style={containerStyles}>
                <div style={fillerStyles} className="animate">
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;