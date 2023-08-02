import PropTypes from "prop-types";
import "./style.css";
interface Props {
    text: string;
    state: "disabled" | "focused" | "hover" | "default";
    level: "primary" | "inline" | "secondary";
}
export declare const Button: {
    ({ text, state, level }: Props): JSX.Element;
    propTypes: {
        text: PropTypes.Requireable<string>;
        state: PropTypes.Requireable<string>;
        level: PropTypes.Requireable<string>;
    };
};
export {};
//# sourceMappingURL=Button.d.ts.map