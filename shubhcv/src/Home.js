import React from "react";
import NavigationBar from "./Component/NavigationBar.js";
import Header from "./Component/Header.js";
import Profile from "./Component/Profile.js";
import Experience from "./Component/Experience.js";
import Education from "./Component/Education.js";
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <NavigationBar />
        <Header />
        <Profile />
        <Experience />
        <Education />
      </div>
    );
  }
}
export default Home;
