import {
  Badge,
  Col,
  Divider,
  Dropdown,
  Input,
  Menu,
  message,
  Row,
  Space,
} from "antd";
import {
  ExportOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import WithSizes from "react-sizes";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setLogOut } from "../../redux/actions";
import { useRouter } from "next/dist/client/router";

const Header = (props) => {
  const { isMobile } = props;
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.authReducer);
  const basketItemsLength = useSelector((state) => state.basketItems);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(setLogOut());
    router.push("/login");
    message.success("You loged out successfuly");
  };

  const dropdownMenu = (
    <Menu>
      <Menu.Item icon={<CreditCardOutlined className={style.header_icon} />}>
        <Link href="/profile">
          <div>
            <span className={style.header_text}>My profile</span>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item icon={<ExportOutlined className={style.header_icon} />}>
        {/* <Link href="/login"> */}

        <div className={style.header_menu} onClick={handleLogOut}>
          <span className={style.header_text}>Log out</span>
        </div>
        {/* </Link> */}
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row className={style.header} justify="space-around" align="middle">
        <Col span={6}>
          <Link href="/">
            <Image
              className={style.header_logo}
              alt="header logo"
              src="/Images/Logo.png"
              width={190}
              height={50}
            />
          </Link>
        </Col>
        <Col span={11} className={style.header_menu}>
          <Link href="/">
            <div className={style.header_menu}>
              <HomeOutlined className={style.header_icon} />
              <span className={style.header_text}>Home</span>
            </div>
          </Link>
          <Link href="/product-list">
            <div className={style.header_menu}>
              <UnorderedListOutlined className={style.header_icon} />
              <span className={style.header_text}>Product list</span>
            </div>
          </Link>
          <Link href="/contactUs">
            <div className={style.header_menu}>
              <PhoneOutlined className={style.header_icon} />
              <span className={style.header_text}>Contact Us</span>
            </div>
          </Link>
          {isAuthenticated !== null && (
            <Link href="/shopping-basket">
              <div className={style.header_menu}>
                <Badge count={basketItemsLength.length} showZero>
                  <ShoppingCartOutlined className={style.header_basket} />
                </Badge>
              </div>
            </Link>
          )}
        </Col>

        <Col span={4} className={style.user_dropdown}>
          {isAuthenticated === null ? (
            <Link href="/login">
              <div>
                <UserOutlined className={style.header_icon} />
                <span className={style.header_text}>Log in / Sign In</span>
              </div>
            </Link>
          ) : (
            <Dropdown overlay={dropdownMenu}>
              <div className={style.username}>
                <UserOutlined />
                <span className="ml-3">{isAuthenticated?.user?.username}</span>
              </div>
            </Dropdown>
          )}
        </Col>
      </Row>

      {/* mobile headers */}

      <div className={style.header_mobile}>
        <Row
          align="bottom"
          justify="space-between"
          className={style.header_top_mobile}
        >
          <Link href="/">
            <Image
              src="/Images/Logo.png"
              alt="header-logo"
              className={style.header_mobile_logo}
              width={220}
              height={40}
            />
          </Link>
          <Link href="/shopping-basket">
            <div className={style.bottom_menu}>
              <Badge count={basketItemsLength.length} showZero>
                <ShoppingCartOutlined className={style.mobile_basket} />
              </Badge>
            </div>
          </Link>
        </Row>

        <Row
          className={style.bottom_header}
          justify="space-around"
          align="middle"
        >
          <Link href="/">
            <div className={style.bottom_menu}>
              <HomeOutlined className={style.bottom_icon} />
              <span className={style.bottom_text}>Home</span>
            </div>
          </Link>
          <Link href="/product-list">
            <div className={style.bottom_menu}>
              <UnorderedListOutlined className={style.bottom_icon} />
              <span className={style.bottom_text}>Product list</span>
            </div>
          </Link>
          <Link href="/contactUs">
            <div className={style.bottom_menu}>
              <FileTextOutlined className={style.bottom_icon} />
              <span className={style.bottom_text}>Contact us</span>
            </div>
          </Link>
          {isAuthenticated === null ? (
            <Link href="/login">
              <div className={style.bottom_menu}>
                <UserOutlined className={style.bottom_icon} />
                <span className={style.bottom_text}>Log in / Sign In</span>
              </div>
            </Link>
          ) : (
            <Link href="/profile">
              <div className={style.bottom_menu}>
                <UserOutlined className={style.bottom_icon} />
                <span className={style.bottom_text}>My Profile</span>
              </div>
            </Link>
          )}
        </Row>
      </div>
    </>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 600,
  isTablet: width < 1000,
});
export default WithSizes(mapSizesToProps)(Header);
