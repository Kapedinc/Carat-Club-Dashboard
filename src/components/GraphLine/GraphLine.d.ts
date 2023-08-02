import PropTypes from "prop-types";
import "./style.css";
interface Props {
    className: any;
    text: string;
    text1: string;
    groupClassName: any;
    group: string;
    text2: string;
}
export declare const GraphLine: {
    ({ className, text, text1, groupClassName, group, text2, }: Props): JSX.Element;
    propTypes: {
        text: PropTypes.Requireable<string>;
        text1: PropTypes.Requireable<string>;
        group: PropTypes.Requireable<string>;
        text2: PropTypes.Requireable<string>;
    };
};
export {};
//# sourceMappingURL=GraphLine.d.ts.map