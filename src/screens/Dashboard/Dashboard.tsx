import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Frame } from "../../components/Frame";
import { GraphLine } from "../../components/GraphLine";
import { MenuItem } from "../../components/MenuItem";
import { HeroiconsOutlineBuildingLibrary1 } from "../../icons/HeroiconsOutlineBuildingLibrary1";
import { HeroiconsOutlineEnvelope1 } from "../../icons/HeroiconsOutlineEnvelope1";
import { HeroiconsOutlineGift } from "../../icons/HeroiconsOutlineGift";
import "./style.css";

export const Dashboard = (): JSX.Element => {
  return (
    <div className="dashboard">
      <div className="div-4">
        <div className="navigation">
          <div className="text-wrapper-2">Hey, David! Welcome back.</div>
          <div className="frame-9">
            <Button level="secondary" state="default" text="Top Up" />
            <Button level="primary" state="default" text="Pay Bill" />
          </div>
        </div>
        <div className="frame-10">
          <div className="frame-11">
            <div className="frame-12">
              <img className="frame-13" alt="Frame" src="/img/frame-120-1.svg" />
              <img className="stacked-bar" alt="Stacked bar" src="/img/stacked-bar.png" />
            </div>
            <GraphLine
              className="graph-1-line"
              group="/img/group.png"
              groupClassName="graph-line-instance"
              text="Balance"
              text1="$1,000"
              text2="$68"
            />
            <img className="frame-14" alt="Frame" src="/img/frame-120.png" />
          </div>
          <Frame
            className="frame-117"
            overlapGroupClassName="frame-117-instance"
            rowCellEllipse="/img/ellipse-3-1.png"
            rowCellEllipseClassName="frame-19"
            rowCellFrameClassName="frame-15"
            rowCellFrameClassNameOverride="frame-17"
            rowCellHasDiv={false}
            rowCellHasSecondLabel={false}
            rowCellImg="/img/ellipse-3.png"
            rowCellLabel="- $19.99"
            rowCellLabel1="Netflix"
            rowCellLabel2="- $456.95"
            rowCellLabel3="Macy’s"
            rowCellLabel4="+ $500.00"
            rowCellLabel5="Top Up"
            rowCellVisible={false}
            rowRowHeaderClassName="frame-16"
            rowRowHeaderClassNameOverride="frame-18"
            tableClassName="frame-instance"
          />
        </div>
        <div className="overlap-4">
          <div className="new-page" />
          <div className="navbar-logo-left">
            <div className="navbar-container">
              <div className="navbar-content">
                <img className="navbar-brand" alt="Navbar brand" src="/img/navbar-brand.png" />
                <div className="navbar-menu">
                  <div className="navbar-link">
                    <div className="text-wrapper-3">About</div>
                  </div>
                  <div className="navbar-link">
                    <div className="text-wrapper-3">Features</div>
                  </div>
                  <div className="navbar-link">
                    <div className="text-wrapper-3">Pricing</div>
                  </div>
                  <div className="navbar-button">
                    <div className="text-wrapper-4">GET STARTED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="frame-20">
            <div className="frame-21">
              <div className="logo">
                <div className="frame-22">
                  <img className="k" alt="K" src="/img/k-2-1.png" />
                </div>
              </div>
              <div className="menu-wrapper">
                <div className="menu-2">
                  <Link className="menu-item-2" to="/dashboard">
                    <img
                      className="heroicons-outline-2"
                      alt="Heroicons outline"
                      src="/img/heroicons-outline-home.svg"
                    />
                    <div className="home-3">Dashboard</div>
                  </Link>
                  <div className="menu-item-2">
                    <img
                      className="heroicons-outline-2"
                      alt="Heroicons outline"
                      src="/img/heroicons-outline-inbox-stack-1.svg"
                    />
                    <div className="home-4">Accounts</div>
                  </div>
                  <div className="menu-item-2">
                    <img
                      className="heroicons-outline-3"
                      alt="Heroicons outline"
                      src="/img/heroicons-outline-banknotes-2.svg"
                    />
                    <div className="home-4">Transactions</div>
                  </div>
                  <MenuItem
                    homeClassName="menu-item-instance"
                    icon={<HeroiconsOutlineBuildingLibrary1 className="heroicons-outline-2" color="#495057" />}
                    label="Stock Rewards"
                    state="active"
                  />
                  <MenuItem
                    homeClassName="menu-item-instance"
                    icon={<HeroiconsOutlineGift className="heroicons-outline-2" color="#495057" />}
                    label="Offers"
                    state="active"
                  />
                </div>
              </div>
            </div>
            <div className="menu-wrapper">
              <div className="menu-2">
                <div className="menu-item-2">
                  <HeroiconsOutlineEnvelope1 className="heroicons-outline-2" color="#495057" />
                  <div className="home-4">Messages</div>
                  <div className="div-wrapper">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-5">3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-account">
            <div className="frame-22">
              <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-2-1.png" />
              <div className="frame-23">
                <div className="vashon-g">David Wise</div>
                <div className="partner">david@gmail.com</div>
              </div>
            </div>
            <img
              className="heroicons-outline-2"
              alt="Heroicons outline"
              src="/img/heroicons-outline-ellipsis-horizontal-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
