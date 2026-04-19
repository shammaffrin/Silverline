import React from 'react';
import { Navigate } from 'react-router-dom';
import OverVision from '../Components/Overviewmission';
import OverWelcome from '../Components/OverviewWelcome';
import AchieversBoard from '../Components/OverVIEWABoard';
import ManagementMessage from '../Components/ManagementMessage';
import Video from '../Components/Video';

const Overview = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <OverWelcome />
      <ManagementMessage/>
      <Video/>
      <OverVision/>
    </div>
  );
};

export default Overview;
