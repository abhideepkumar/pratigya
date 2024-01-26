import React from 'react';
import './scrollablecomponents.css';

const ScrollableSections = () => {
  return (
    <div>
      <div className="section" id="section1">
        <h2>Reported By You</h2>
        <div className="scrollable-content">
          {/* Five pictures for Section 1 */}
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
      </div>

      <div className="section" id="section2">
        <h2>Recent near You</h2>
        <div className="scrollable-content">
          {/* Five pictures for Section 2 */}
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableSections;