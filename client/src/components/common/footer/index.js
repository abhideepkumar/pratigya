// client/src/components/common/Footer/index.js

import React from 'react';
import './footer.css';

const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-icon-wrapper">
          <div className="footer-icon">
            <img src="https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png" alt="Profile" />
          </div>
          <span className="footer-text">Home</span>
        </div>
        <div className="footer-icon-wrapper">
          <div className="footer-icon">
            <img src="https://spng.pngfind.com/pngs/s/283-2836870_community-icon-transparent-background-png-download-transparent-transparent.png" alt="Community" />
          </div>
          <span className="footer-text">Community</span>
        </div>
        <div className="footer-icon-wrapper">
          <div className="footer-icon">
            <img src="https://e7.pngegg.com/pngimages/711/803/png-clipart-address-book-computer-icons-font-awesome-contact-icon-text-logo.png" alt="Contact" />
          </div>
          <span className="footer-text">Contact</span>
        </div>
        <div className="footer-icon-wrapper">
          <div className="footer-icon">
            <img src="https://png.pngtree.com/png-vector/20220622/ourmid/pngtree-red-location-map-icon-png-image_5237524.png "alt="Map" />
          </div>
          <span className="footer-text">Map</span>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
