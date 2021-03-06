import React from "react";
import "./nav.css";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquare } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiHomeAlt />
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdWorkOutline />
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquare />
      </a>
    </nav>
  );
};

export default Nav;
