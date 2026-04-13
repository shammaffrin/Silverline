import React from 'react';
import { Navigate } from 'react-router-dom';
import OverviewBanner from '../Components/OverviewBanner';
import OverVision from '../Components/Overviewmission';
import OverViewPolicies from '../Components/OverViewPolicies'
import OverWelcome from '../Components/OverviewWelcome';
import AchieversBoard from '../Components/OverVIEWABoard';
import CommunicationSection from '../Components/OverviewCommunication';
import OrgChartSection from '../Components/OrgChart1';
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
      <OverViewPolicies />
      <OverviewBanner />
      <OrgChartSection />
      <AchieversBoard />
      <CommunicationSection />
      
    </div>
  );
};

export default Overview;
