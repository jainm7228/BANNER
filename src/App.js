import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";
import Content from "./components/Content";
import { fetchBannerData, updateBannerData } from "./services/api";
import "./styles/Banner.css";
import "./styles/Dashboard.css";
import "./styles/Content.css";

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [bannerDescription, setBannerDescription] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [bannerLink, setBannerLink] = useState("");

  useEffect(() => {
    fetchBannerData()
      .then((response) => {
        const { description, timer, link } = response.data;
        setBannerDescription(description || "");
        setCountdown(timer || 0);
        setBannerLink(link || "");
      })
      .catch((error) => console.error("Error fetching banner data:", error));
  }, []);

  useEffect(() => {
    if (countdown > 0 && isBannerVisible) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsBannerVisible(false);
    }
  }, [countdown, isBannerVisible]);

  const handleUpdateBanner = () => {
    updateBannerData({
      description: bannerDescription,
      timer: countdown,
      link: bannerLink,
    })
      .then((response) => console.log("Banner updated:", response))
      .catch((error) => console.error("Error updating banner:", error));
  };

  return (
    <div className="App">
      <Dashboard
        isBannerVisible={isBannerVisible}
        setIsBannerVisible={setIsBannerVisible}
        bannerDescription={bannerDescription}
        setBannerDescription={setBannerDescription}
        countdown={countdown}
        setCountdown={setCountdown}
        bannerLink={bannerLink}
        setBannerLink={setBannerLink}
        handleUpdateBanner={handleUpdateBanner}
      />

      {isBannerVisible && (
        <Banner
          bannerDescription={bannerDescription}
          countdown={countdown}
          bannerLink={bannerLink}
        />
      )}

      <Content />
      
    </div>
  );
}

export default App;
