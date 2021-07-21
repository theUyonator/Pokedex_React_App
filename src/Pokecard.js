import React from "react";
import "./Pokecard.css";

const Pokecard = (props) => (
    <div className="Pokecard">
        <div className="Pokecard_title">{props.name}</div>
        <img className="Pokecard_img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}/>
        <div className="Pokecard_data">Type: {props.type}</div>
        <div className="Pokecard_data">EXP:{props.exp}</div>
    </div>
);

export default Pokecard;