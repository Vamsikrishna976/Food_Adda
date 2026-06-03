import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
      },
    };
  };



  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Vamsikrishna976");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
    // console.log(jsonData);
  };

  render() {
    const { name, avatar_url, bio, blog } = this.state.userInfo;
    return (
      <div className="about">
        <div className="user-card">
          <img src={avatar_url} alt={name} />
          <h2>{name}</h2>
          <h3>{bio}</h3>
          <Link
            to={blog}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            Visit My Portfolio
          </Link>{" "}
        </div>
      </div>
    );
  };
};
export default About;
