/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const HeroiconsOutlineBuildingLibrary1 = ({ color = "#0F172A", className }: Props): JSX.Element => {
  return (
    <svg
      className={`heroicons-outline-building-library-1 ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 21.3926V13.1426M15.75 21.3926V13.1426M8.25 21.3926V13.1426M3 9.39258L12 3.39258L21 9.39258M19.5 21.3926V10.7251C17.0563 10.3416 14.5514 10.1426 12 10.1426C9.44861 10.1426 6.94372 10.3416 4.5 10.7251V21.3926M3 21.3926H21M12 7.14258H12.0075V7.15008H12V7.14258Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

HeroiconsOutlineBuildingLibrary1.propTypes = {
  color: PropTypes.string,
};
