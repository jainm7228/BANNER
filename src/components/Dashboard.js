import React from "react";

const Dashboard = ({
  isBannerVisible,
  setIsBannerVisible,
  bannerDescription,
  setBannerDescription,
  countdown,
  setCountdown,
  bannerLink,
  setBannerLink,
  handleUpdateBanner,
}) => {
  const handleDescriptionChange = (e) => setBannerDescription(e.target.value);
  const handleTimerChange = (e) =>
    setCountdown(parseInt(e.target.value, 10) || 0);
  const handleLinkChange = (e) => setBannerLink(e.target.value);

  return (
    <div className="dashboard">
      <h2>Internal Dashboard</h2>
      

      <div className="control">
        <label>
          <input
            type="checkbox"
            checked={isBannerVisible}
            onChange={() => setIsBannerVisible(!isBannerVisible)}
          />
          Banner On/Off
        </label>
      </div>
      <div className="control">
        <label>
          Banner Description:
          <input
            type="text"
            value={bannerDescription}
            onChange={handleDescriptionChange}
          />
        </label>
      </div>
      <div className="control">
        <label>
          Banner Timer (seconds):
          <input type="number" value={countdown} onChange={handleTimerChange} />
        </label>
      </div>
      <div className="control">
        <label>
          Banner Link:
          <input type="text" value={bannerLink} onChange={handleLinkChange} />
        </label>
      </div>
      <button onClick={handleUpdateBanner}>Update Banner</button>
    </div>
  );
};

export default Dashboard;
