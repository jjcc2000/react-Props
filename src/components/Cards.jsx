import React from "react";

function Card_One(props) {
  console.log(props);

  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt='profil Img' />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card_One;
