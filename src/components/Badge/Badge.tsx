/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  label: string;
  color: "orange" | "gray" | "red" | "green";
  size: "small" | "default";
}

export const Badge = ({ label = "Label", color, size }: Props): JSX.Element => {
  return (
    <div className={`badge ${color} size-${size}`}>
      <div className="frame-8">
        {size === "default" && (
          <>
            <div className="ellipse-3" />
            <div className="label-2">{label}</div>
          </>
        )}

        {size === "small" && <>{label}</>}
      </div>
    </div>
  );
};

Badge.propTypes = {
  label: PropTypes.string,
  color: PropTypes.oneOf(["orange", "gray", "red", "green"]),
  size: PropTypes.oneOf(["small", "default"]),
};
