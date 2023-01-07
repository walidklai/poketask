import React from "react";

import { IDetails } from "../core/domain/Pokemon";

interface PokemonDetailsProps {
  className?: string;
  details: IDetails;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({
  details,
  className,
}) => {
  return (
    <div className="details-container">
      {" "}
      <h3>Details</h3>
      <div className={className}>
        {details.name ? (
          <>
            <img src={details.img} />
            <ul>
              <li>
                <strong>id:</strong> {details.id}
              </li>
              <li>
                <strong>name:</strong> {details.name}
              </li>
              <li>
                <strong>height:</strong> {details.height}
              </li>
              <li>
                <strong>weight:</strong> {details.weight}
              </li>
            </ul>
          </>
        ) : (
          <div>Please select a Pokemon</div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetails;
