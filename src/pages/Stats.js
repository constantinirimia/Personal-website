import React from "react";

import Main from "../layouts/Main";

import Personal from "../components/Stats/Personal";

const Stats = () => (
  <Main title="ATIS" description="Flight computer — Constantin Irimia">
    <article className="post" id="stats">
      <header>
        <div className="title">
          <p className="prompt">$ metar ----</p>
          <h2 data-testid="heading">ATIS</h2>
          <p>Times in Zulu. Position is not on this frequency.</p>
        </div>
      </header>
      <Personal />
    </article>
  </Main>
);

export default Stats;
