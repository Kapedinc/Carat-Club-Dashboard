import PropTypes from "prop-types";
import "./style.css";
interface Props {
    className: any;
    tableClassName: any;
    overlapGroupClassName: any;
    rowCellFrameClassName: any;
    rowCellHasSecondLabel: boolean;
    rowCellEllipse: string;
    rowCellLabel: string;
    rowCellLabel1: string;
    rowCellHasDiv: boolean;
    rowCellImg: string;
    rowCellLabel2: string;
    rowRowHeaderClassName: any;
    rowCellLabel3: string;
    rowCellFrameClassNameOverride: any;
    rowCellVisible: boolean;
    rowCellLabel4: string;
    rowRowHeaderClassNameOverride: any;
    rowCellEllipseClassName: any;
    rowCellLabel5: string;
}
export declare const Frame: {
    ({ className, tableClassName, overlapGroupClassName, rowCellFrameClassName, rowCellHasSecondLabel, rowCellEllipse, rowCellLabel, rowCellLabel1, rowCellHasDiv, rowCellImg, rowCellLabel2, rowRowHeaderClassName, rowCellLabel3, rowCellFrameClassNameOverride, rowCellVisible, rowCellLabel4, rowRowHeaderClassNameOverride, rowCellEllipseClassName, rowCellLabel5, }: Props): JSX.Element;
    propTypes: {
        rowCellHasSecondLabel: PropTypes.Requireable<boolean>;
        rowCellEllipse: PropTypes.Requireable<string>;
        rowCellLabel: PropTypes.Requireable<string>;
        rowCellLabel1: PropTypes.Requireable<string>;
        rowCellHasDiv: PropTypes.Requireable<boolean>;
        rowCellImg: PropTypes.Requireable<string>;
        rowCellLabel2: PropTypes.Requireable<string>;
        rowCellLabel3: PropTypes.Requireable<string>;
        rowCellVisible: PropTypes.Requireable<boolean>;
        rowCellLabel4: PropTypes.Requireable<string>;
        rowCellLabel5: PropTypes.Requireable<string>;
    };
};
export {};
//# sourceMappingURL=Frame.d.ts.map