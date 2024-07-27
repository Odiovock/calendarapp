import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contactList}) => {
  return (
    <div>
      <ul>
        {contactList.map((contact, index) => {
          const {name , ...rest} = contact;
          <Tile key={index} name={name} description={rest}/>
        })}
      </ul>
    </div>
  );
};
