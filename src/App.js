import React, { useState } from "react";
import GoogleMap from "google-map-react";
import Header from "./Header";
import "./App.css";
import IpDetails from "./components/IpDetails";

const url = "https://geo.ipify.org/api/v1";
const key = "at_ls88cbWJUIEwao8XgfJi5qT1TVZCl";

const Marker = (props) => {
  return (
    <>
      <div className="pin"></div>
      <div className="pulse"></div>
    </>
  );
};

const App = () => {
  const [searchedIp, setIP] = useState("");
  const [ipLocation, setLocation] = useState({});
  const [positions, setPosition] = useState({ lat: 11.00555, lng: 76.96612 });

  const handleChange = (e) => {
    const { value } = e.target;
    setIP(value);
  };

  const handleSearch = () => {
    fetch(`${url}?apiKey=${key}&ipAddress=${searchedIp}`)
      .then((str) => str.json())
      .then((result) => {
        console.log(result);
        const {
          location: { city = "", timezone = 0, lat, lng },
          ip,
          isp,
        } = result;
        const data = {
          ip,
          isp,
          city,
          timezone,
        };
        setIP("");
        console.log(lat);
        setLocation(data);
        setPosition({ lat, lng });
      });
  };

  return (
    <div className="App">
      <Header
        handleChange={handleChange}
        handleSearch={handleSearch}
        searchedIp={searchedIp}
      />
      {Object.keys(ipLocation).length > 0 && (
        <IpDetails ipLocation={ipLocation} />
      )}

      <section style={{ width: "100%", height: "calc(100vh - 300px)" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: "AIzaSyD6OsOwB0tH9htImDgjLn_bYaCWmr8DdS8" }}
          center={[positions.lat, positions.lng]}
          zoom={12}
        >
          <Marker lat={positions.lat} lng={positions.lng} />
        </GoogleMap>
      </section>
    </div>
  );
};

export default App;
