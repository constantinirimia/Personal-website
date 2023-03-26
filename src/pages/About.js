import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";
const aboutMeArticle = raw("../data/about.md");

const About = () => (
  <Main title="About" description="Learn about Constantin Irimia">
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading">About me</h2>
          <p>Software engineer, world explorer, and higher-purpose seeker </p>
          <p>
            {" "}
            Constantly seeking new ways to innovate, create and contribute to
            the world.
          </p>
        </div>
      </header>
      <ReactMarkdown>{aboutMeArticle}</ReactMarkdown>
    </article>
  </Main>
);

export default About;
