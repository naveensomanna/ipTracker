import React from "react";

const IpDetails = ({ ipLocation }) => {
  return (
    <div className="cardWrapper">
      <div>
        <p>ip address</p>
        {ipLocation.ip}
      </div>
      <div>
        <p>location</p>
        {ipLocation.city}
      </div>
      <div>
        <p>timezone</p>
        {ipLocation.timezone}
      </div>
      <div>
        <p>isp</p>
        {ipLocation.isp}
      </div>
    </div>
  );
};
export default IpDetails;
