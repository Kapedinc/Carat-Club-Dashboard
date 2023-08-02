/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import PropTypes from "prop-types";
import React from "react";
import "./style.css";
export const Badge = ({ label = "Label", color, size }) => {
    return (React.createElement("div", { className: `badge ${color} size-${size}` },
        React.createElement("div", { className: "frame-8" },
            size === "default" && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "ellipse-3" }),
                React.createElement("div", { className: "label-2" }, label))),
            size === "small" && React.createElement(React.Fragment, null, label))));
};
Badge.propTypes = {
    label: PropTypes.string,
    color: PropTypes.oneOf(["orange", "gray", "red", "green"]),
    size: PropTypes.oneOf(["small", "default"]),
};
//# sourceMappingURL=Badge.js.map