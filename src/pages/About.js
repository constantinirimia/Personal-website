import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";

const markdown = raw("../data/about.md");

const count = markdown
  .split(/\s+/)
  .map((s) => s.replace(/\W/g, ""))
  .filter((s) => s.length).length;

const About = () => (
  <Main title="About" description="Learn about Constantin Irimia">
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/about">About Me</Link>
          </h2>
          <p>(in exactly {count} words)</p>
        </div>
      </header>

      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  </Main>
);

export default About;
