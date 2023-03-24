import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";
import { render } from "ejs";
import { className } from "postcss-selector-parser";

const article1 = raw("../data/articles/article2.md");

//const title = article1.split("\n")[0];

const count = article1
  .split(/\s+/)
  .map((s) => s.replace(/\W/g, ""))
  .filter((s) => s.length).length;

const About = () => (
  <Main title="About" description="Learn about Constantin Irimia">
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading">About me</h2>
          <h2> title </h2>
          <h3>Software engineer, World explorer and Higher-purpose seeker.</h3>
        </div>
      </header>

      <ReactMarkdown>{article1}</ReactMarkdown>
    </article>
  </Main>
);

export default About;
