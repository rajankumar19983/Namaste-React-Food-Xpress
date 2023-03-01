import React from "react";

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location"
      }
    }
    console.log("child - constructor");
  }

  async componentDidMount() {
    // Best place to call API

    const data = await fetch("https://api.github.com/users/rajankumar19983")
    const json = await data.json();
    console.log(json)
    this.setState({
      userInfo: json
    });

    console.log("child - ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("child - ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child - ComponentWilUnmount");
  }

  render() {
    console.log("child - render");
    const { count } = this.state;
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
      </div>
    )
  }
}

export default Profile;