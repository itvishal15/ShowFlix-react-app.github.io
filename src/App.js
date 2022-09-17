import React, { useEffect, useState } from "react";
import "./index.css";
import Cards from "./Cards";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [choice, setChoice] = useState("");
  const [name, setName] = useState("");
  const [pname, setPname] = useState("Search...");


  const search = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/${choice}?q=${name}`)
      .then((res) => setData(res.data));
    console.log(data);
  }, [choice, name, data]);

  return (
    <>
      <div className="main_div">
        <div className="main_div">
          <div className="header">
            <h1 className="header_h1">TVmaze</h1>
            <h2 className="header_h1">Search your favourite shows</h2>
          </div>
          <div className="heading_style">
            <div className="search_div">
              <label className="label1">
                Actor
                <input
                  className="check"
                  type="radio"
                  name="tvshow"
                  value="Actor"
                  onChange={() => {
                    if (name) {
                      setName("");
                      
                    }
                    setChoice("people");
                    setPname("Search by Actor name eg: Akon...");
                  }}
                />
              </label>

              <label className="label1" name="tvshow">
                Shows
                <input
                  className="check"
                  type="radio"
                  name="tvshow"
                  value="Shows"
                  onChange={() => {
                    if (name) {
                      setName("");
                      
                    }
                    setChoice("shows");
                    setPname("Search by Show name eg: Friends...");
                  }}
                />
              </label>

              <br />
              <input
                className="input"
                value={name}
                type="text"
                placeholder={pname}
                onChange={search}
              />
            </div>
          </div>

          {data.map((val) => {
            if (choice === "people") {
              return (
                <>
                  {
                    <Cards
                      key={val?.person?.id}
                      image1={val?.person?.image?.medium}
                      Name={val?.person?.name}
                      link={val?.person?.url}
                    />
                  }
                </>
              );
            } else if (choice === "shows") {
              return (
                <>
                  <Cards
                    key={val?.show?.id}
                    image1={val?.show?.image?.medium}
                    Name={val?.show?.name}
                    link={val?.show?.url}
                    genres={val?.show?.genres[0]}
                  />
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default App;
