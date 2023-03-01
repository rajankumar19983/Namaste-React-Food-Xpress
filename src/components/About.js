import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass.js"
import ProfileFunctionalComponent from "./Profile.js"
import { Component } from "react";

class About extends Component {

  constructor(props) {
    super(props);
    // console.log("parent - constructor");
  }


  async componentDidMount() {
    //Best place to make an API call

    // console.log("parent - CDM");
  }

  render() {
    // console.log("parent - render");
    return (
      <div className="about-us">
        <h1>About Us Page</h1>
        <p>This is the Namaste React Live Course Chapter 07 - Finding The Path</p>
        {/* <Outlet /> */}
        {/* <Profile name={"RajanClass"} /> */}
        <ProfileFunctionalComponent />
      </div>
    );
  }
}

export default About;