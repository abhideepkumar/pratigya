import React from 'react';
import './scrollablecomponents.css';

const ScrollableSections = () => {
  return (
    <div>
      <div className="section" id="section1">
        <h2>Reported By You</h2>
        <div className="scrollable-content">
          {/* Five pictures for Section 1 */}
          <div className="image">
            <img src="https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=58-631&mode=design&t=93rxjSYQ1Zh6WKg2-4" alt="Image 1" />
          </div>
          <div className="image">
            <img src="https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=58-613&mode=design&t=93rxjSYQ1Zh6WKg2-4" alt="Image 2" />
          </div>
          <div className="image">
            <img src="https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=58-595&mode=design&t=93rxjSYQ1Zh6WKg2-4" alt="Image 3" />
          </div>
          <div className="image">
            <img src="https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=58-577&mode=design&t=93rxjSYQ1Zh6WKg2-4" alt="Image 4" />
          </div>
          <div className="image">
            <img src="https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=58-631&mode=design&t=93rxjSYQ1Zh6WKg2-4" alt="Image 5" />
          </div>
        </div>
      </div>

      <div className="section" id="section2">
        <h2>Recent near You</h2>
        <div className="scrollable-content">
          {/* Five pictures for Section 2 */}
          <div className="image">
            <img src="https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=50-436&mode=design&t=93rxjSYQ1Zh6WKg2-4" alt="Image 6" />
          </div>
          <div className="image">
            <img src="https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=50-434&mode=design&t=93rxjSYQ1Zh6WKg2-4" alt="Image 7" />
          </div>
          <div className="image">
            <img src="https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=50-455&mode=design&t=93rxjSYQ1Zh6WKg2-4" alt="Image 8" />
          </div>
          <div className="image">
            <img src="https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=50-434&mode=design&t=93rxjSYQ1Zh6WKg2-4" alt="Image 9" />
          </div>
          <div className="image">
            <img src="https://www.figma.com/file/rZBEWKCGRrqFtkrn69rBFx/SIH-app?type=design&node-id=50-473&mode=design&t=93rxjSYQ1Zh6WKg2-4" alt="Image 10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableSections;
