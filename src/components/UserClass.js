import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  //to accept props and to create state variable in class component
  constructor(props) {
    super(props); //important
    this.state = {
      userInfo: {
        login: "dummy",
        blog: "Default",
      },
    };
  }
  async componentDidMount() {
    //API call
    const data = await fetch("https://api.github.com/users/msyande");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { login, blog, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} />
        <div>
          Logged in User:{" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => loggedInUser}
          </UserContext.Consumer>
        </div>
        <h2>User: {login}</h2>
        <h3>Blog: {blog}</h3>
        <h4>Contact: mahima.yande21@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
