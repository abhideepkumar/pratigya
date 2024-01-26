import React from "react";
import "./header.css";

const HeaderComponent = () => {
  return (
    <div className="max-width header">
      <img
        src="client/public/img/logo2.jpg"
        alt="Logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <img
                src="client/public/img/location.png"
                alt="Location"
              />
              <div>Mysore</div>
            </div>
            <i className="fi fi-sr-play absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="location-search-wrapper">
            <div className="header-searchbar">
              <i className="fi fi-sr-marker"></i>
              <input
                placeholder="Search For query"
                className="search-input"
              />
            </div>
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58jICYPTsvxgprSe3OgY4DkqNPp6F2v82ZA&usqp=CAU"
            alt="Profile"
            className="header-profile-image"
          />
          <span className="header-username">Aryan</span>
          <i className="fi fi-rr-angle-small-sown absolute-center profile-option-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;