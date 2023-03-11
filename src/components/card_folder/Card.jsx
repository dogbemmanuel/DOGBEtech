import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <article className="about_card">
        {props.the_about_icon}
      <h5>{props.card_hearder}</h5>
      <small>{props.card_sub}</small>
    </article>
  );
};

export default Card;
