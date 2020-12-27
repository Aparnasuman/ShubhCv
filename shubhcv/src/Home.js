import React from "react";
import Navclas from "./Component/Navclas.js";
import Header from "./Component/header.js";
import Profiie from "./Component/Profile.js"
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Navclas />
                <Header />
                <Profiie />
            </div>
        )
    }
}
export default Home;