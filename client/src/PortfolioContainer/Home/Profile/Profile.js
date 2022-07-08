import React from "react";
import Typical from "react-typical";
//unable to install npm i typical react
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div ClassName="profile-details">
          <div className="colz">
            <div className="Colz-icon">
              <a href="https://www.facebook.com/rashiv.mrfigs.richards">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/rashiv-richards-0b846433/">
                <i className="fa fa-linkedIn-square"></i>
              </a>
              <a href="https://twitter.com/figs_mr">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M <span className="highlighted-text">Rashiv</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev👨🏾‍💻",
                    1000,
                    "Full Stack Developer🥷🏾",
                    1000,
                    "MERN Stack Dev💻",
                    1000,
                    "Cross Platform v🖥",
                    1000,
                    "React Dev📱",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">Ready Set Code</span>
          </div>
        </div>
        <div className="profile-options">
          <button className="btn primary-btn">
            {""}
            Hire Me{""}
          </button>
          <a href="Rashiv.Richards .pdf" download="Rashiv.Richards .pdf">
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  );
}
