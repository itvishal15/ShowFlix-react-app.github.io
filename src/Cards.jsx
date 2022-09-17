import React from "react";
function Cards(props) {
  return (
    <>
      <div>
        <div className="cards">
          <div className="card">
            <img src={props.image1} alt="myPic" className="card_img" />
            <br />
            <div className="card_info">
              <h3 className="card_title">{props.Name}</h3>
              <h2 className="genres"> {props.genres}</h2>

              <a href={props.link} target="_blank" rel="noreferrer">
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
