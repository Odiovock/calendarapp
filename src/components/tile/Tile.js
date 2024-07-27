import React from "react";

export const Tile = ({name, description}) => {
  const descriptionDetails = Object.values(description);
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {descriptionDetails.map((detail, index) => {
        <p key={index} className="tile">{detail}</p>
      })}
    </div>
  );
};
