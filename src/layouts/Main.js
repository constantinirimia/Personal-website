import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Analytics from "../components/Template/Analytics";
import Atmosphere from "../components/Template/Atmosphere";
import Console from "../components/Template/Console";
import Navigation from "../components/Template/Navigation";
import SideBar from "../components/Template/SideBar";
import ScrollToTop from "../components/Template/ScrollToTop";

const Main = (props) => {
  const [consoleOpen, setConsoleOpen] = useState(false);

  useEffect(() => {
    const onKey = (event) => {
      const tag = event.target && event.target.tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA";

      if (event.key === "/" && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        setConsoleOpen(true);
      }

      if (event.key === "Escape") {
        setConsoleOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <Atmosphere />
      <Helmet
        link="/favicon.ico"
        titleTemplate="%s | Constantin Irimia"
        defaultTitle="Constantin Irimia"
        defer={false}
      >
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <div id="wrapper">
        <Navigation />
        <div id="main">{props.children}</div>
        {props.fullPage ? null : <SideBar />}
      </div>
      <Console open={consoleOpen} onClose={() => setConsoleOpen(false)} />
    </HelmetProvider>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Constantin Irimia's personal website.",
};

export default Main;
