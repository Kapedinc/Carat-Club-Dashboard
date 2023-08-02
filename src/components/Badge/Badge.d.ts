import PropTypes from "prop-types";
import "./style.css";
interface Props {
    label: string;
    color: "orange" | "gray" | "red" | "green";
    size: "small" | "default";
}
export declare const Badge: {
    ({ label, color, size }: Props): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
    };
};
export {};
//# sourceMappingURL=Badge.d.ts.map