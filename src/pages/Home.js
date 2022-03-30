import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import "./Home.css";
import Search from "./Search";



function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/Gmail">Gmail</Link>
          <Link to="/Youtube">YouTube</Link>
          <Link to="/Maps">Maps</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="logo"
        />
        <div className="home__inputContainer">
          <Search/>
        </div>
      </div>
    </div>
  );
}

export default Home;