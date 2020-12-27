import React from "react";
import NavigationBar from "./Component/NavigationBar.js";
import Header from "./Component/Header.js";
import Profile from "./Component/Profile.js";
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <NavigationBar />
        <Header />
        <Profile />
      </div>
    );
  }
}
export default Home;
