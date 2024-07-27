import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({list}) => {
  return (
    <div>
      <ul>
        {list.map((item, index) => {
          const {name , ...rest} = item;
          <Tile key={index} name={name} description={rest}/>
        })}
      </ul>
    </div>
  );
};
