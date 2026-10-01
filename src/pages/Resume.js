import React from "react";

import Main from "../layouts/Main";

import Skills from "../components/Resume/Skills";
import stack from "../data/resume/skills";

const Resume = () => (
  <Main title="Stack" description="Constantin Irimia — languages, services, data, and runtime">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <p className="prompt">$ ls ./stack</p>
          <h2 data-testid="heading">Stack</h2>
          <p>
            How I actually ship: languages, services, data, and the runtime
            underneath.
          </p>
        </div>
      </header>
      <Skills stack={stack} />
    </article>
  </Main>
);

export default Resume;
