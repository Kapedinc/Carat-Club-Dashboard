﻿import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Frame } from "../../components/Frame";
import { GraphLine } from "../../components/GraphLine";
import { MenuItem } from "../../components/MenuItem";
import { HeroiconsOutlineBuildingLibrary1 } from "../../icons/HeroiconsOutlineBuildingLibrary1";
import { HeroiconsOutlineEnvelope1 } from "../../icons/HeroiconsOutlineEnvelope1";
import { HeroiconsOutlineGift } from "../../icons/HeroiconsOutlineGift";
import "./style.css";
export const Dashboard = () => {
    return (React.createElement("div", { className: "dashboard" },
        React.createElement("div", { className: "div-4" },
            React.createElement("div", { className: "navigation" },
                React.createElement("div", { className: "text-wrapper-2" }, "Hey, David! Welcome back."),
                React.createElement("div", { className: "frame-9" },
                    React.createElement(Button, { level: "secondary", state: "default", text: "Top Up" }),
                    React.createElement(Button, { level: "primary", state: "default", text: "Pay Bill" }))),
            React.createElement("div", { className: "frame-10" },
                React.createElement("div", { className: "frame-11" },
                    React.createElement("div", { className: "frame-12" },
                        React.createElement("img", { className: "frame-13", alt: "Frame", src: "/img/frame-120-1.svg" }),
                        React.createElement("img", { className: "stacked-bar", alt: "Stacked bar", src: "/img/stacked-bar.png" })),
                    React.createElement(GraphLine, { className: "graph-1-line", group: "/img/group.png", groupClassName: "graph-line-instance", text: "Balance", text1: "$1,000", text2: "$68" }),
                    React.createElement("img", { className: "frame-14", alt: "Frame", src: "/img/frame-120.png" })),
                React.createElement(Frame, { className: "frame-117", overlapGroupClassName: "frame-117-instance", rowCellEllipse: "/img/ellipse-3-1.png", rowCellEllipseClassName: "frame-19", rowCellFrameClassName: "frame-15", rowCellFrameClassNameOverride: "frame-17", rowCellHasDiv: false, rowCellHasSecondLabel: false, rowCellImg: "/img/ellipse-3.png", rowCellLabel: "- $19.99", rowCellLabel1: "Netflix", rowCellLabel2: "- $456.95", rowCellLabel3: "Macy\u2019s", rowCellLabel4: "+ $500.00", rowCellLabel5: "Top Up", rowCellVisible: false, rowRowHeaderClassName: "frame-16", rowRowHeaderClassNameOverride: "frame-18", tableClassName: "frame-instance" })),
            React.createElement("div", { className: "overlap-4" },
                React.createElement("div", { className: "new-page" }),
                React.createElement("div", { className: "navbar-logo-left" },
                    React.createElement("div", { className: "navbar-container" },
                        React.createElement("div", { className: "navbar-content" },
                            React.createElement("img", { className: "navbar-brand", alt: "Navbar brand", src: "/img/navbar-brand.png" }),
                            React.createElement("div", { className: "navbar-menu" },
                                React.createElement("div", { className: "navbar-link" },
                                    React.createElement("div", { className: "text-wrapper-3" }, "About")),
                                React.createElement("div", { className: "navbar-link" },
                                    React.createElement("div", { className: "text-wrapper-3" }, "Features")),
                                React.createElement("div", { className: "navbar-link" },
                                    React.createElement("div", { className: "text-wrapper-3" }, "Pricing")),
                                React.createElement("div", { className: "navbar-button" },
                                    React.createElement("div", { className: "text-wrapper-4" }, "GET STARTED"))))))),
            React.createElement("div", { className: "menu" },
                React.createElement("div", { className: "frame-20" },
                    React.createElement("div", { className: "frame-21" },
                        React.createElement("div", { className: "logo" },
                            React.createElement("div", { className: "frame-22" },
                                React.createElement("img", { className: "k", alt: "K", src: "/img/k-2-1.png" }))),
                        React.createElement("div", { className: "menu-wrapper" },
                            React.createElement("div", { className: "menu-2" },
                                React.createElement(Link, { className: "menu-item-2", to: "/dashboard" },
                                    React.createElement("img", { className: "heroicons-outline-2", alt: "Heroicons outline", src: "/img/heroicons-outline-home.svg" }),
                                    React.createElement("div", { className: "home-3" }, "Dashboard")),
                                React.createElement("div", { className: "menu-item-2" },
                                    React.createElement("img", { className: "heroicons-outline-2", alt: "Heroicons outline", src: "/img/heroicons-outline-inbox-stack-1.svg" }),
                                    React.createElement("div", { className: "home-4" }, "Accounts")),
                                React.createElement("div", { className: "menu-item-2" },
                                    React.createElement("img", { className: "heroicons-outline-3", alt: "Heroicons outline", src: "/img/heroicons-outline-banknotes-2.svg" }),
                                    React.createElement("div", { className: "home-4" }, "Transactions")),
                                React.createElement(MenuItem, { homeClassName: "menu-item-instance", icon: React.createElement(HeroiconsOutlineBuildingLibrary1, { className: "heroicons-outline-2", color: "#495057" }), label: "Stock Rewards", state: "active" }),
                                React.createElement(MenuItem, { homeClassName: "menu-item-instance", icon: React.createElement(HeroiconsOutlineGift, { className: "heroicons-outline-2", color: "#495057" }), label: "Offers", state: "active" })))),
                    React.createElement("div", { className: "menu-wrapper" },
                        React.createElement("div", { className: "menu-2" },
                            React.createElement("div", { className: "menu-item-2" },
                                React.createElement(HeroiconsOutlineEnvelope1, { className: "heroicons-outline-2", color: "#495057" }),
                                React.createElement("div", { className: "home-4" }, "Messages"),
                                React.createElement("div", { className: "div-wrapper" },
                                    React.createElement("div", { className: "overlap-group-3" },
                                        React.createElement("div", { className: "text-wrapper-5" }, "3"))))))),
                React.createElement("div", { className: "user-account" },
                    React.createElement("div", { className: "frame-22" },
                        React.createElement("img", { className: "ellipse-4", alt: "Ellipse", src: "/img/ellipse-2-1.png" }),
                        React.createElement("div", { className: "frame-23" },
                            React.createElement("div", { className: "vashon-g" }, "David Wise"),
                            React.createElement("div", { className: "partner" }, "david@gmail.com"))),
                    React.createElement("img", { className: "heroicons-outline-2", alt: "Heroicons outline", src: "/img/heroicons-outline-ellipsis-horizontal-1.svg" }))))));
};
//# sourceMappingURL=Dashboard.js.map