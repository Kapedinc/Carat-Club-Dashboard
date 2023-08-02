/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { Row } from "../Row";
import "./style.css";
export const Frame = ({ className, tableClassName, overlapGroupClassName, rowCellFrameClassName, rowCellHasSecondLabel, rowCellEllipse, rowCellLabel = "+ $5,000.00", rowCellLabel1 = "Deposit", rowCellHasDiv, rowCellImg, rowCellLabel2 = "- $2,500.00", rowRowHeaderClassName, rowCellLabel3 = "Wire", rowCellFrameClassNameOverride, rowCellVisible, rowCellLabel4 = "+ $2,500.00", rowRowHeaderClassNameOverride, rowCellEllipseClassName, rowCellLabel5 = "Deposit", }) => {
    return (React.createElement("div", { className: `frame ${className}` },
        React.createElement("div", { className: "div-2" },
            React.createElement("div", { className: "last-transactions" }, "Last Transactions"),
            React.createElement("div", { className: "div-3" },
                React.createElement(Button, { level: "inline", state: "default", text: "See all" }),
                React.createElement("img", { className: "heroicons-mini-arrow", alt: "Heroicons mini arrow", src: "/img/heroicons-mini-arrow-right-1.svg" }))),
        React.createElement("div", { className: `table ${tableClassName}` },
            React.createElement("div", { className: `overlap-group-2 ${overlapGroupClassName}` },
                React.createElement(Row, { cellLabel: "Transaction", cellLabel1: "Date", cellLabel2: "Amount", className: "row-instance", frameClassName: "design-component-instance-node", hasFrame: false, row: "header", visible: false }),
                React.createElement(Row, { cellEllipse: rowCellEllipse, cellFrameClassName: "row-3", cellFrameClassNameOverride: rowCellFrameClassName, cellHasSecondLabel: rowCellHasSecondLabel, cellLabel: rowCellLabel1, cellLabel1: "Feb 28, 2023", cellLabel2: rowCellLabel, cellSecondLabel: "000000011", cellType: "two-lines", className: "row-2", frameClassName: "design-component-instance-node", hasFrame: false, row: "first", visible: false }),
                React.createElement(Row, { cellEllipse: rowCellImg, cellFrameClassName: "row-3", cellFrameClassNameOverride: "row-4", cellHasSecondLabel: rowCellHasDiv, cellLabel: rowCellLabel3, cellLabel1: "Feb 28, 2023", cellLabel2: rowCellLabel2, cellSecondLabel: "000000011", cellType: "two-lines", className: rowRowHeaderClassName, frameClassName: "design-component-instance-node", hasFrame: false, row: "default", visible: false }),
                React.createElement(Row, { cellEllipseClassName: rowCellEllipseClassName, cellFrameClassName: "row-3", cellFrameClassNameOverride: rowCellFrameClassNameOverride, cellHasSecondLabel: rowCellVisible, cellLabel: rowCellLabel5, cellLabel1: "Feb 28, 2023", cellLabel2: rowCellLabel4, cellSecondLabel: "000000011", cellType: "two-lines", className: rowRowHeaderClassNameOverride, frameClassName: "design-component-instance-node", hasFrame: false, row: "last", visible: false })))));
};
Frame.propTypes = {
    rowCellHasSecondLabel: PropTypes.bool,
    rowCellEllipse: PropTypes.string,
    rowCellLabel: PropTypes.string,
    rowCellLabel1: PropTypes.string,
    rowCellHasDiv: PropTypes.bool,
    rowCellImg: PropTypes.string,
    rowCellLabel2: PropTypes.string,
    rowCellLabel3: PropTypes.string,
    rowCellVisible: PropTypes.bool,
    rowCellLabel4: PropTypes.string,
    rowCellLabel5: PropTypes.string,
};
//# sourceMappingURL=Frame.js.map