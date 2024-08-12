import React from "react";


const Banner = ({ bannerDescription, countdown, bannerLink }) => {
  return (
    <div className="banner">
      <a href={bannerLink} target="_blank" rel="noopener noreferrer">
        <div className="banner-content">
          <p>{bannerDescription}</p>
          <div className="countdown">
            {countdown > 0
              ? `Expires in ${countdown} seconds`
              : "Banner has expired"}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Banner;
