import React, { useEffect, useState } from "react";
import useFetch from "../common/useFetch";
import Banner from "../common/imgComponent";
function CountryListpage() {
  const [contryData, setCountryDtat] = useState();
  const [countryEvent, setCountryEvent] = useState(null);
  const [detials, setDetials] = useState();
  const { loading, data } = useFetch("http://test.oye.direct/players.json");
  useEffect(() => {
    setCountryDtat(Object.keys(data));
  }, [data]);
  if (loading) return <h1>Loading</h1>;
  const getCountryPlayers = (countyName) => {
    setCountryEvent(countyName);
    const item_name = data[countyName]
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .map((sub, index) => (
        <div key={index} style={{ color: sub.captain === true ? "green" : "" }}>
          {sub.name} {sub.captain === true ? <b>(Captain)</b> : ""}
        </div>
      ));
    setDetials(item_name);
  };
  
  return (
    <div>
      {/* <div className="text-center headingtop">
        Country List Page and Country Details page
      </div> */}
      <div className="flex-container">
        <div className="box">
          <Banner />
        </div>
        <div className="box">
          {" "}
          <div style={{ display: "flex" }}>
            <div className="sideNavbar">
              {contryData
                ? contryData.sort().map((item, index) => (
                    <div
                      className={`sideMenuItems ${
                        countryEvent !== item ? "" : "itemBg"
                      }`}
                      key={index}
                      onClick={() => getCountryPlayers(item)}
                    >
                      {item}
                    </div>
                  ))
                : null}
            </div>
            <div style={{ margin: "2px auto" }}>
              {detials ? (
                <div className="content">
                  {detials}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CountryListpage;
