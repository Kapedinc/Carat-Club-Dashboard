/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  text: string;
  text1: string;
  groupClassName: any;
  group: string;
  text2: string;
}

export const GraphLine = ({
  className,
  text = "Annual Spend",
  text1 = "$5,274",
  groupClassName,
  group = "/img/group-1.png",
  text2 = "$628",
}: Props): JSX.Element => {
  return (
    <div className={`graph-line ${className}`}>
      <div className="div">
        <div className="annual-spend">{text}</div>
        <div className="this-month">This month</div>
      </div>
      <div className="group">
        <div className="mar">Mar 1, 2023</div>
        <div className="overlap">
          <div className="element">$0</div>
          <div className="overlap-group">
            <img className="line" alt="Line" src="/img/line-5-1.svg" />
            <img className="img" alt="Line" src="/img/line-5-1.svg" />
            <img className="vector" alt="Vector" src="/img/vector-1-1.svg" />
          </div>
        </div>
        <div className="element-2">{text1}</div>
        <div className="mar-2">Mar 31, 2023</div>
        <img className="line-2" alt="Line" src="/img/line-4-1.svg" />
        <img className="line-3" alt="Line" src="/img/line-4-1.svg" />
      </div>
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <div className="overlap-3">
            <img className="line-4" alt="Line" src="/img/line-6-1.svg" />
            <img className={`group-2 ${groupClassName}`} alt="Group" src={group} />
          </div>
          <div className="frame-2">
            <div className="frame-3">
              <div className="ellipse" />
              <div className="mar-3">Mar 17</div>
            </div>
            <div className="element-3">{text2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

GraphLine.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  group: PropTypes.string,
  text2: PropTypes.string,
};
