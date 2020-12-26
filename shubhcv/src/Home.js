import React from "react";
import Navclas from "./Component/Navclas.js";
import Header from "./Component/header.js"
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Navclas />
                <Header />
            </div>
        )
    }
}
export default Home;