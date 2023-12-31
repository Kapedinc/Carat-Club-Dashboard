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
import Rectangle51Image from 'src/assets/images/Cashbackoffer_Rectangle_51.png';
import Ellipse1Image from 'src/assets/images/Cashbackoffer_Ellipse_1.png';
import { styled } from '@mui/material/styles';
import Button1 from 'src/components/Button1/Button1';
import { CashbackOfferProps } from 'src/types';
const CashbackOffer1 = styled('div')(({ theme }) => ({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(241, 243, 245, 1)`,
    borderRadius: `24px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    height: `336px`,
    width: '100%',
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
}));
const Rectangle51 = styled('img')({
    height: `110px`,
    width: `352px`,
    objectFit: `cover`,
    alignSelf: `stretch`,
    margin: `0px`,
});
const Frame183 = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `24px`,
    boxSizing: `border-box`,
    margin: `-54px 0px 0px 0px`,
});
const Ellipse1 = styled('img')({
    height: `60px`,
    width: `60px`,
    objectFit: `cover`,
    margin: `0px`,
});
const Frame182 = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `20px 0px 0px 0px`,
});
const Nike = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(33, 37, 41, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `500`,
    fontSize: `16px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `24px`,
    textTransform: `none`,
    margin: `0px`,
}));
const Frame92 = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `304px`,
    margin: `8px 0px 0px 0px`,
});
const LoremIpsumDolorSitAm = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(33, 37, 41, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `0px`,
}));
const Frame184 = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `20px 0px 0px 0px`,
});
const Button2 = styled(Button1)(({ theme }) => ({
    margin: `0px`,
}));
const Q50OffOnSneakers = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(217, 140, 51, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `500`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    margin: `0px 0px 0px 16px`,
}));
function CashbackOffer(props) {
    return (React.createElement(CashbackOffer1, { className: props.className },
        React.createElement(Rectangle51, { src: Rectangle51Image, loading: "lazy", alt: 'Rectangle 51' }),
        React.createElement(Frame183, null,
            React.createElement(Ellipse1, { src: Ellipse1Image, loading: "lazy", alt: 'Ellipse 1' }),
            React.createElement(Frame182, null,
                React.createElement(Nike, null, `Nike`),
                React.createElement(Frame92, null,
                    React.createElement(LoremIpsumDolorSitAm, null, `Lorem ipsum dolor sit amet consectetur. Tortor diam ac faucibus nunc urna fringilla odio aliquam.`))),
            React.createElement(Frame184, null,
                React.createElement(Button2, null),
                React.createElement(Q50OffOnSneakers, null, `50% off on sneakers`)))));
}
export default CashbackOffer;
//# sourceMappingURL=CashbackOffer.js.map