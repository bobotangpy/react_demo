// import * as React from 'react';
import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import { logout } from "../redux/auth/actions";
import { Divider, Menu, Dropdown } from "antd";
import {
  ShoppingCartOutlined,
  SettingOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Logo from "../images/logo.png";

export function NavBarUser(props) {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // if (openModal) {
    //     props.getModalState(openModal);
    // } else {
    props.getModalState(openModal);
    // }
  }, [openModal]);

  const logout = () => {
    localStorage.clear();
  };

  const showCartModal = () => {
    setOpenModal(true);
  };

  const hideCartModal = () => {
    setOpenModal(false);
  };

  const userName = localStorage.getItem("user_name");
  const userHoroscope = localStorage.getItem("horoscope");
  const sign = require(`../images/${userHoroscope}.png`);

  const setting = (
    <Menu style={{ marginTop: "15px" }}>
      <Menu.Item>
        <a className="col-6 pr-4" onClick={showCartModal}>
          <ShoppingCartOutlined style={{ fontSize: "18px" }} /> Cart
        </a>
      </Menu.Item>
      <Menu.Item>
        <a className="col-6 pr-4" href="/myorder">
          <ProfileOutlined style={{ fontSize: "18px" }} /> My Order
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="navbar pr-0">
      <div className="col-6 leftSide">
        <div className="logo">
          <a href="/" style={{ color: "rgba(0, 0, 0, 0.65)" }}>
            <img
              src={Logo}
              className="pt-0"
              style={{ width: "60px", padding: "10px" }}
              alt="Logo"
            ></img>
            <span style={{ fontSize: "24px" }}>Zora</span>
          </a>
        </div>
      </div>
      <div
        className="col-6 rightSide"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <p
          className="desktopview"
          style={{
            fontSize: "initial",
            minWidth: "fit-content",
            marginTop: "12px",
            paddingRight: "15px",
          }}
        >
          Hello {userName}, the beautiful {userHoroscope}{" "}
          <img src={sign} alt="horoscope_sign" style={{ width: "26px" }} />
        </p>
        <p
          className="mobileview"
          style={{
            fontSize: "initial",
            minWidth: "fit-content",
            marginTop: "12px",
            paddingRight: "15px",
            display: "none",
          }}
        >
          Hello {userName}, the beautiful{" "}
          <img src={sign} alt="horoscope_sign" style={{ width: "26px" }} />
        </p>
        <Menu mode="horizontal">
          <Menu.Item>
            <Dropdown overlay={setting} placement="bottomCenter" arrow>
              <SettingOutlined />
            </Dropdown>
          </Menu.Item>
          <Menu.Item onClick={logout}>
            <a href="/" className="col-6 pr-4">
              Log Out
            </a>
          </Menu.Item>
        </Menu>
        <Cart isOpen={openModal} hideModal={hideCartModal} />
      </div>
      <Divider className="mt-0 mb-0" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapDispatchToProps)(NavBarUser);