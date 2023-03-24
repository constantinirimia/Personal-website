import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const markdown = raw("../data/about.md");

const count = markdown
  .split(/\s+/)
  .map((s) => s.replace(/\W/g, ""))
  .filter((s) => s.length).length;

const mystyle = {
  color: "#202325",
  padding: "1px",
  fontFamily: "Hanalei Fill",
  letterSpacing: 1,
  fontSize: 20,
  textTransform: "lowercase",
  textTransform: "capitalize",
  lineHeight: 1.4,
};

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
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  </Main>
);

export default About;
