import React, { Component } from "react";
import "./About.css";
import pic from "../assets/pic.jpg";

export default class About extends Component {
  render() {
    return (
      /*<div>
        <p>Design your About me page </p> 
      </div>*/
      <div>
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              // Image goes here
              src={pic}
              width="20"
              height="10"
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Uyen Tran</div>
            <div className="brief_description">
              Hi, my name is Uyen Tran. I'm Computer Science junior by next fall
              at University of Nevada, Las Vegas. Few facts about me are: I can
              speak Vietnamese and I have 4 dogs. 2 of them are Shih Tzu and 2
              of them are Huskies. My habit are drawing, painting, playing video
              games. For the last semester, I was an TA for Computer Science 1
              in my school. So that are all about myself.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
