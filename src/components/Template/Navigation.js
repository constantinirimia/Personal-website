import React from "react";
import { Link, useLocation } from "react-router-dom";

import Hamburger from "./Hamburger";
import StatusClock from "./StatusClock";
import routes from "../../data/routes";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <header id="header">
      <h1 className="index-link">
        {routes
          .filter((l) => l.index)
          .map((l) => (
            <Link key={l.label} to={l.path}>
              {l.label}
            </Link>
          ))}
      </h1>
      <nav className="links">
        <ul>
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <li key={l.label}>
                <Link
                  to={l.path}
                  className={pathname === l.path ? "is-active" : undefined}
                >
                  ./{l.command || l.path.replace("/", "")}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <StatusClock />
      <Hamburger />
    </header>
  );
};

export default Navigation;
