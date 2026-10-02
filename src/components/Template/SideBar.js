import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env;
const portrait = `${PUBLIC_URL}/images/me.jpg`;

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <span className="portrait">
          <img className="portrait__glow" src={portrait} alt="" aria-hidden="true" />
          <span className="portrait__frame">
            <img className="portrait__img" src={portrait} alt="Constantin Irimia" />
            <span className="portrait__scan" aria-hidden="true" />
            <span className="portrait__vignette" aria-hidden="true" />
            <span className="portrait__corners" aria-hidden="true" />
          </span>
          <span className="portrait__tag">ident · hud</span>
        </span>
      </Link>

      <header>
        <h2>Constantin Irimia</h2>
        <p className="callsign">Staff engineer · Pilot</p>
      </header>
    </section>

    <section className="blurb">
      <p>
        Production systems. Same habit in the air: brief, leave margin, do not
        trust the filed weather.
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">
            ./about
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Constantin Irimia{" "}
        <a href="mailto:cirimia100@gmail.com">cirimia100@gmail.com</a>
      </p>
    </section>
  </section>
);

export default SideBar;
