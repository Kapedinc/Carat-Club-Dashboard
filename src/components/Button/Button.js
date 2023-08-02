/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import PropTypes from "prop-types";
import React from "react";
import "./style.css";
export const Button = ({ text = "Button", state, level }) => {
    return (React.createElement("div", { className: `button ${level} ${state}` },
        React.createElement("div", { className: "text-wrapper" }, text)));
};
Button.propTypes = {
    text: PropTypes.string,
    state: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
    level: PropTypes.oneOf(["primary", "inline", "secondary"]),
};
//# sourceMappingURL=Button.js.map