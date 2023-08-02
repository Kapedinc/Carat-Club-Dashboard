/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import PropTypes from "prop-types";
import React from "react";
import "./style.css";
export const GraphLine = ({ className, text = "Annual Spend", text1 = "$5,274", groupClassName, group = "/img/group-1.png", text2 = "$628", }) => {
    return (React.createElement("div", { className: `graph-line ${className}` },
        React.createElement("div", { className: "div" },
            React.createElement("div", { className: "annual-spend" }, text),
            React.createElement("div", { className: "this-month" }, "This month")),
        React.createElement("div", { className: "group" },
            React.createElement("div", { className: "mar" }, "Mar 1, 2023"),
            React.createElement("div", { className: "overlap" },
                React.createElement("div", { className: "element" }, "$0"),
                React.createElement("div", { className: "overlap-group" },
                    React.createElement("img", { className: "line", alt: "Line", src: "/img/line-5-1.svg" }),
                    React.createElement("img", { className: "img", alt: "Line", src: "/img/line-5-1.svg" }),
                    React.createElement("img", { className: "vector", alt: "Vector", src: "/img/vector-1-1.svg" }))),
            React.createElement("div", { className: "element-2" }, text1),
            React.createElement("div", { className: "mar-2" }, "Mar 31, 2023"),
            React.createElement("img", { className: "line-2", alt: "Line", src: "/img/line-4-1.svg" }),
            React.createElement("img", { className: "line-3", alt: "Line", src: "/img/line-4-1.svg" })),
        React.createElement("div", { className: "overlap-wrapper" },
            React.createElement("div", { className: "overlap-2" },
                React.createElement("div", { className: "overlap-3" },
                    React.createElement("img", { className: "line-4", alt: "Line", src: "/img/line-6-1.svg" }),
                    React.createElement("img", { className: `group-2 ${groupClassName}`, alt: "Group", src: group })),
                React.createElement("div", { className: "frame-2" },
                    React.createElement("div", { className: "frame-3" },
                        React.createElement("div", { className: "ellipse" }),
                        React.createElement("div", { className: "mar-3" }, "Mar 17")),
                    React.createElement("div", { className: "element-3" }, text2))))));
};
GraphLine.propTypes = {
    text: PropTypes.string,
    text1: PropTypes.string,
    group: PropTypes.string,
    text2: PropTypes.string,
};
//# sourceMappingURL=GraphLine.js.map