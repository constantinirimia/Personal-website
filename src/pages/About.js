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
          <h2 data-testid="heading">About me</h2>
          <h3>
            Software engineer, world explorer, and higher-purpose seeker -
            constantly seeking new ways to innovate, create, and contribute to
            the world.
          </h3>
        </div>
      </header>

      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  </Main>
);

export default About;
