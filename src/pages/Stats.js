import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Personal from "../components/Stats/Personal";
import Site from "../components/Stats/Site";

const Stats = () => (
  <Main title="Fun Stats" description="Some statistics about Constantin IRIMIA">
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/stats">Fun Stats</Link>
          </h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Stats;
