import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>

      <header>
        <h2>Constantin Irimia</h2>
        <h3>Full Stack Software Engineer </h3>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Constantin Irimia is a senior software engineer with a proven track
        record of delivering impactful projects for top US tech and financial
        companies using the latest technologies.{" "}
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/skills") ? (
            <Link to="/skills" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Constantin Irimia <Link to="/">cirimia100@gmail.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
