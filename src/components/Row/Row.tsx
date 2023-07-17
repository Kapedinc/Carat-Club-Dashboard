/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Badge } from "../Badge";
import { Cell } from "../Cell";
import "./style.css";

interface Props {
  row: "default" | "first" | "hover" | "header" | "last";
  className: any;
  cellLabel: string;
  cellLabel1: string;
  frameClassName: any;
  visible: boolean;
  cellLabel2: string;
  hasFrame: boolean;
  cellEllipse: string;
  cellHasSecondLabel: boolean;
  cellFrameClassName: any;
  cellFrameClassNameOverride: any;
  cellEllipseClassName: any;
  cellType: string;
  cellSecondLabel: string;
}

export const Row = ({
  row,
  className,
  cellLabel = "Name",
  cellLabel1 = "Plan",
  frameClassName,
  visible = true,
  cellLabel2 = "Balance",
  hasFrame = true,
  cellEllipse = "/img/ellipse-3-2.png",
  cellHasSecondLabel,
  cellFrameClassName,
  cellFrameClassNameOverride,
  cellEllipseClassName,
  cellType = "image-2-lines",
  cellSecondLabel = "Second Label",
}: Props): JSX.Element => {
  return (
    <div className={`row row-${row} ${className}`}>
      <div className="frame-6">
        {["default", "first", "header", "last"].includes(row) && (
          <>
            <Cell
              className={`${row === "header" && "class"}`}
              ellipse={cellEllipse}
              ellipseClassName={cellEllipseClassName}
              hasSecondLabel={cellHasSecondLabel}
              label={cellLabel}
              secondLabel={cellSecondLabel}
              type={cellType}
            />
            <Cell
              className="cell-instance"
              frameClassName={cellFrameClassName}
              label={cellLabel1}
              type={row === "header" ? "header-left" : "text"}
            />
          </>
        )}

        {row === "hover" && (
          <>
            <Cell ellipse="/img/ellipse-3-2.png" label="Label" secondLabel="Second Label" type="image-2-lines" />
            <Cell className="cell-instance" label="Freemium" type="text" />
            <img className="group-3" alt="Group" src="/img/group-2.png" />
          </>
        )}
      </div>
      <div className={`frame-7 ${frameClassName}`}>
        {["default", "first", "header", "last"].includes(row) && (
          <>
            <>
              {visible && (
                <Cell
                  className="cell-instance"
                  label={row === "header" ? "Balance" : "$2,539"}
                  type={row === "header" ? "header-right" : "figure"}
                />
              )}
            </>
            <Cell
              className="cell-instance"
              frameClassName={cellFrameClassNameOverride}
              label={cellLabel2}
              type={row === "header" ? "header-right" : "figure"}
            />
            <>
              {hasFrame && (
                <>
                  <>
                    {row === "header" && <Cell className="cell-instance" label="Status" type="header-left" />}

                    {["default", "first", "last"].includes(row) && (
                      <div className="badge-wrapper">
                        <Badge color="green" label="Active" size="default" />
                      </div>
                    )}
                  </>
                </>
              )}
            </>
          </>
        )}

        {row === "hover" && (
          <div className="frame-wrapper">
            <div className="frame-6">
              <Cell className="cell-instance" label="$2,539" type="figure" />
              <Cell className="cell-instance" label="$2,539" type="figure" />
              <div className="badge-wrapper">
                <Badge color="green" label="Active" size="default" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Row.propTypes = {
  row: PropTypes.oneOf(["default", "first", "hover", "header", "last"]),
  cellLabel: PropTypes.string,
  cellLabel1: PropTypes.string,
  visible: PropTypes.bool,
  cellLabel2: PropTypes.string,
  hasFrame: PropTypes.bool,
  cellEllipse: PropTypes.string,
  cellHasSecondLabel: PropTypes.bool,
  cellType: PropTypes.string,
  cellSecondLabel: PropTypes.string,
};
