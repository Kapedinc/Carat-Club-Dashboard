/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Badge } from "../Badge";
import "./style.css";

interface Props {
  secondLabel: string;
  label: string;
  type: "status" | "figure" | "two-lines" | "image-2-lines" | "header-right" | "header-left" | "text";
  className: any;
  ellipse: string;
  hasSecondLabel: boolean;
  frameClassName: any;
  ellipseClassName: any;
}

export const Cell = ({
  secondLabel = "Second Label",
  label = "Label",
  type,
  className,
  ellipse = "/img/ellipse-3-2.png",
  hasSecondLabel = true,
  frameClassName,
  ellipseClassName,
}: Props): JSX.Element => {
  return (
    <div className={`cell ${type} ${className}`}>
      {type === "image-2-lines" && (
        <>
          <img className={`ellipse-2 ${ellipseClassName}`} alt="Ellipse" src={ellipse} />
          <div className="frame-4">
            <div className="label">{label}</div>
            {hasSecondLabel && <div className="second-label">{secondLabel}</div>}
          </div>
        </>
      )}

      {["figure", "header-left", "header-right", "text", "two-lines"].includes(type) && (
        <div className={`frame-5 ${frameClassName}`}>
          {type === "two-lines" && (
            <>
              <div className="label">{label}</div>
              <div className="second-label">{secondLabel}</div>
            </>
          )}

          {["figure", "header-left", "header-right", "text"].includes(type) && <>{label}</>}
        </div>
      )}

      {type === "status" && <Badge color="green" label="Label" size="default" />}
    </div>
  );
};

Cell.propTypes = {
  secondLabel: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(["status", "figure", "two-lines", "image-2-lines", "header-right", "header-left", "text"]),
  ellipse: PropTypes.string,
  hasSecondLabel: PropTypes.bool,
};
