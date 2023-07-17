/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HeroiconsOutlineHome5 } from "../../icons/HeroiconsOutlineHome5";
import "./style.css";

interface Props {
  label: string;
  state: "notif-active" | "inactive" | "active" | "notification";
  icon: JSX.Element;
  homeClassName: any;
}

export const MenuItem = ({
  label = "Home",
  state,
  icon = <HeroiconsOutlineHome5 className="heroicons-outline" color="#D98C33" />,
  homeClassName,
}: Props): JSX.Element => {
  return (
    <div className="menu-item">
      {["active", "inactive"].includes(state) && (
        <>
          {icon}
          <div className={`home ${state} ${homeClassName}`}>{label}</div>
        </>
      )}

      {["notif-active", "notification"].includes(state) && (
        <>
          <HeroiconsOutlineHome5
            className="heroicons-outline"
            color={state === "notif-active" ? "#D98C33" : "#495057"}
          />
          <div className={`home-2 state-${state}`}>{label}</div>
          <div className="overlap-group-wrapper">
            <div className="element-wrapper">
              <div className="element-4">3</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  state: PropTypes.oneOf(["notif-active", "inactive", "active", "notification"]),
};
