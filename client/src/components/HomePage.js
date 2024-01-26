import React, { useState } from 'react';
import './HomePage.css';
import Header from './common/header/index';
import Footer from './common/footer/index';
import TabOptions from './common/tabOptions/TabOptions';
import ScrollableSections from './common/Scrollablecomponents/scrollablecomponents';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScr(activeTab)}
      <div className="scrollable-sections-container">
        <ScrollableSections />
      </div>
      <Footer />
    </div>
  );
};

function getCorrectScr(tab) {
  switch (tab) {
    case "Login":
      return 'login.js';
    case "Profile":
      return 'profile.js';
    default:
      return 'login.js';
  }
}

export default HomePage;