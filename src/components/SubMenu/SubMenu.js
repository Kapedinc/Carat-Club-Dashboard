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
import { styled } from '@mui/material/styles';
import MenuItem from 'src/components/MenuItem/MenuItem';
import { SubMenuProps } from 'src/types';
const SubMenu1 = styled('div')({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    boxShadow: `0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.2)`,
    backdropFilter: `blur(4px)`,
    WebkitBackdropFilter: `blur(4px)`,
    borderRadius: `8px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    width: '100%',
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `16px`,
    boxSizing: `border-box`,
    height: 'auto',
});
const MenuItem1 = styled(MenuItem)(({ theme }) => ({
    margin: `0px`,
}));
const MenuItem2 = styled(MenuItem)(({ theme }) => ({
    margin: `20px 0px 0px 0px`,
}));
const MenuItem3 = styled(MenuItem)(({ theme }) => ({
    margin: `20px 0px 0px 0px`,
}));
const MenuItem4 = styled(MenuItem)(({ theme }) => ({
    margin: `20px 0px 0px 0px`,
}));
const MenuItem5 = styled(MenuItem)(({ theme }) => ({
    margin: `20px 0px 0px 0px`,
}));
function SubMenu(props) {
    return (React.createElement(SubMenu1, { className: props.className },
        React.createElement(MenuItem1, null),
        React.createElement(MenuItem2, null),
        React.createElement(MenuItem3, null),
        React.createElement(MenuItem4, null),
        React.createElement(MenuItem5, null)));
}
export default SubMenu;
//# sourceMappingURL=SubMenu.js.map