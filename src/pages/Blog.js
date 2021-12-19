import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";

const ARTICLE2 = raw("../data/articles/article2.md");

console.log("mama", ARTICLE2.trimStart("end"), "tata");

const Blog = () => (
  <Main title="Blog" description="MyBlog">
    <article className="post markdown" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/about">My Blog</Link>
          </h2>
          <ReactMarkdown>{ARTICLE2}</ReactMarkdown>
        </div>
      </header>
    </article>
    <readArticle />
  </Main>
);

export default Blog;
