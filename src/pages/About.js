import React from "react";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";

const aboutMeArticle = raw("../data/about.md");

const About = () => (
  <Main title="About" description="About Constantin Irimia, staff software engineer and pilot">
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <p className="prompt">$ cat ./about.md</p>
          <h2 data-testid="heading">About</h2>
        </div>
      </header>
      <ReactMarkdown>{aboutMeArticle}</ReactMarkdown>
    </article>
  </Main>
);

export default About;
