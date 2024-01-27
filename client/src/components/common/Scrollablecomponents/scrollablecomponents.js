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
          <img src='https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=58-577&mode=design&t=jEaG0L13kMwOHlqN-4'alt='pictur 1'/>
          <div className="image"></div>
          <img src='https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=58-595&mode=design&t=jEaG0L13kMwOHlqN-4' alt='picture 2'/>
          <div className="image"></div>
          <img src='https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=58-613&mode=design&t=jEaG0L13kMwOHlqN-4'alt='pictur 1'/>
          <div className="image"></div>
          <img src='https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=58-631&mode=design&t=jEaG0L13kMwOHlqN-4'alt='pictur 1'/>
          <div className="image"></div>
          <img src='https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=58-577&mode=design&t=jEaG0L13kMwOHlqN-4'alt='pictur 1'/>
        </div>
      </div>

      <div className="section" id="section2">
        <h2>Recent near You</h2>
        <div className="scrollable-content">
          {/* Five pictures for Section 2 */}
          <div className="image"></div>
          <img src='https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=50-434&mode=design&t=jEaG0L13kMwOHlqN-4'alt='pic 1'/>
          <div className="image"></div>
          <img src='https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=50-436&mode=design&t=jEaG0L13kMwOHlqN-4'alt='pic 1'/>
          <div className="image"></div>
          <img src='https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=50-455&mode=design&t=jEaG0L13kMwOHlqN-4'alt='pic 1'/>
          <div className="image"></div>
          <img src='https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=50-473&mode=design&t=jEaG0L13kMwOHlqN-4'alt='pic 1'/>
          <div className="image"></div>
          <img src='https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=50-434&mode=design&t=jEaG0L13kMwOHlqN-4'alt='pic 1'/>
        </div>
      </div>
    </div>
  );
};

export default ScrollableSections;