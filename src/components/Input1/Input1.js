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
import HeroiconsMiniInformaImage from 'src/assets/images/Input_heroicons_mini_information_circle.svg';
import HeroiconsMiniInforma1Image from 'src/assets/images/Input_heroicons_mini_information_circle_1.svg';
import HeroiconsMiniExclaimImage from 'src/assets/images/Input_heroicons_mini_exclaimation_circle.svg';
import HeroiconsMiniChevronImage from 'src/assets/images/Input_heroicons_mini_chevron_down.svg';
import { styled } from '@mui/material/styles';
import { Input1Props } from 'src/types';
const StateDefault = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    width: '100%',
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    height: 'auto',
});
const Frame146 = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    height: `18px`,
    margin: `0px`,
});
const Email = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(73, 80, 87, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `13px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `18px`,
    textTransform: `none`,
    margin: `0px`,
}));
const HeroiconsMiniInforma = styled('img')({
    height: `auto`,
    width: `20px`,
    margin: `0px 0px 0px 8px`,
});
const Input2 = styled('div')({
    border: `1px solid rgba(233, 236, 239, 1)`,
    boxSizing: `border-box`,
    borderRadius: `20px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `10px 14px`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
});
const Placholder = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(173, 181, 189, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    margin: `0px`,
}));
const ThisIsAHelper = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(134, 142, 150, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `11px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `14px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Email1 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(73, 80, 87, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `13px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `18px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Input3 = styled('div')({
    border: `1px solid rgba(233, 236, 239, 1)`,
    boxSizing: `border-box`,
    borderRadius: `20px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `10px 14px`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
});
const Placholder1 = styled('div')(({ theme }) => ({
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
    margin: `0px`,
}));
const ThisIsAHelper1 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(134, 142, 150, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `11px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `14px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Email2 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(73, 80, 87, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `13px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `18px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Input4 = styled('div')({
    border: `1px solid rgba(233, 236, 239, 1)`,
    boxSizing: `border-box`,
    borderRadius: `20px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `10px 14px`,
    alignSelf: `stretch`,
    height: `80px`,
    margin: `8px 0px 0px 0px`,
});
const Placholder2 = styled('div')(({ theme }) => ({
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
    flex: `1`,
    margin: `0px`,
}));
const ThisIsAHelper2 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(134, 142, 150, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `11px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `14px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Email3 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(73, 80, 87, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `13px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `18px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Input5 = styled('div')({
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `20px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `10px 14px`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
});
const Placholder3 = styled('div')(({ theme }) => ({
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
    margin: `0px`,
}));
const ThisIsAHelper3 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(134, 142, 150, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `11px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `14px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Frame147 = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    height: `18px`,
    margin: `8px 0px 0px 0px`,
});
const Email4 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(73, 80, 87, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `13px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `18px`,
    textTransform: `none`,
    margin: `0px`,
}));
const HeroiconsMiniInforma1 = styled('img')({
    height: `auto`,
    width: `20px`,
    margin: `0px 0px 0px 8px`,
});
const Input6 = styled('div')(({ theme }) => ({
    backgroundColor: `rgba(248, 249, 250, 1)`,
    border: `1px solid rgba(241, 243, 245, 1)`,
    boxSizing: `border-box`,
    borderRadius: `20px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `10px 14px`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Placholder4 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(73, 80, 87, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    margin: `0px`,
}));
const ThisIsAHelper4 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(134, 142, 150, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `11px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `14px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Email5 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(73, 80, 87, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `13px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `18px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Input7 = styled('div')(({ theme }) => ({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(250, 82, 82, 1)`,
    borderRadius: `20px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    padding: `10px 14px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Placholder5 = styled('div')(({ theme }) => ({
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
    margin: `0px`,
}));
const HeroiconsMiniExclaim = styled('img')({
    height: `auto`,
    width: `20px`,
    margin: `0px`,
});
const ThisIsAHelper5 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(250, 82, 82, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `11px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `14px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Email6 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(73, 80, 87, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `13px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `18px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Input8 = styled('div')(({ theme }) => ({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(233, 236, 239, 1)`,
    boxSizing: `border-box`,
    borderRadius: `20px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    padding: `10px 14px`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
const Placholder6 = styled('div')(({ theme }) => ({
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
    margin: `0px`,
}));
const HeroiconsMiniChevron = styled('img')({
    height: `auto`,
    width: `20px`,
    margin: `0px`,
});
const ThisIsAHelper6 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(134, 142, 150, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `11px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `14px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `8px 0px 0px 0px`,
}));
function Input1(props) {
    return (React.createElement(StateDefault, { className: props.className },
        React.createElement(Frame146, null,
            React.createElement(Email, null, `Email`),
            false && (React.createElement(HeroiconsMiniInforma, { src: HeroiconsMiniInformaImage, loading: "lazy", alt: 'heroicons-mini/information-circle' }))),
        React.createElement(Input2, null,
            React.createElement(Placholder, null, `Placholder`)),
        React.createElement(ThisIsAHelper, null, `This is a helper`),
        false && React.createElement(Email1, null, `Email`),
        false && (React.createElement(Input3, null,
            React.createElement(Placholder1, null, `Placholder`))),
        false && React.createElement(ThisIsAHelper1, null, `This is a helper`),
        false && React.createElement(Email2, null, `Email`),
        false && (React.createElement(Input4, null,
            React.createElement(Placholder2, null, `Placholder`))),
        false && React.createElement(ThisIsAHelper2, null, `This is a helper`),
        false && React.createElement(Email3, null, `Email`),
        false && (React.createElement(Input5, null,
            React.createElement(Placholder3, null, `Placholder`))),
        false && React.createElement(ThisIsAHelper3, null, `This is a helper`),
        false && (React.createElement(Frame147, null,
            React.createElement(Email4, null, `Email`),
            false && (React.createElement(HeroiconsMiniInforma1, { src: HeroiconsMiniInforma1Image, loading: "lazy", alt: 'heroicons-mini/information-circle' })))),
        false && (React.createElement(Input6, null,
            React.createElement(Placholder4, null, `Placholder`))),
        false && React.createElement(ThisIsAHelper4, null, `This is a helper`),
        false && React.createElement(Email5, null, `Email`),
        false && (React.createElement(Input7, null,
            React.createElement(Placholder5, null, `Placholder`),
            React.createElement(HeroiconsMiniExclaim, { src: HeroiconsMiniExclaimImage, loading: "lazy", alt: 'heroicons-mini/exclaimation-circle' }))),
        false && React.createElement(ThisIsAHelper5, null, `This is a helper`),
        false && React.createElement(Email6, null, `Email`),
        false && (React.createElement(Input8, null,
            React.createElement(Placholder6, null, `Placholder`),
            React.createElement(HeroiconsMiniChevron, { src: HeroiconsMiniChevronImage, loading: "lazy", alt: 'heroicons-mini/chevron-down' }))),
        false && React.createElement(ThisIsAHelper6, null, `This is a helper`)));
}
export default Input1;
//# sourceMappingURL=Input1.js.map