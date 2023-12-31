﻿/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/
import React from 'react';
import Ellipse4Image from 'src/assets/images/Selection_Ellipse_4.png';
import { styled } from '@mui/material/styles';
import { SelectionProps } from 'src/types';
const StateDefault = styled('div')(({ theme }) => ({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(233, 236, 239, 1)`,
    boxSizing: `border-box`,
    borderRadius: `12px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    width: '100%',
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `20px`,
    height: 'auto',
}));
const Frame133 = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `0px`,
});
const Frame132 = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `0px`,
});
const Ellipse4 = styled('img')({
    height: `16px`,
    width: `16px`,
    margin: `0px`,
});
const Label = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(33, 37, 41, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `500`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    margin: `0px 0px 0px 12px`,
}));
const Frame134 = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px 0px 0px 28px`,
    boxSizing: `border-box`,
    margin: `4px 0px 0px 0px`,
});
const DescriptionInOneOrMo = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(134, 142, 150, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `13px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `18px`,
    textTransform: `none`,
    width: `162px`,
    margin: `0px`,
}));
function Selection(props) {
    return (React.createElement(StateDefault, { className: props.className },
        React.createElement(Frame133, null,
            React.createElement(Frame132, null,
                React.createElement(Ellipse4, { src: Ellipse4Image, loading: "lazy", alt: 'Ellipse 4' }),
                React.createElement(Label, null, `Label`)),
            React.createElement(Frame134, null,
                React.createElement(DescriptionInOneOrMo, null, `Description in one or more lines`)))));
}
export default Selection;
//# sourceMappingURL=Selection.js.map