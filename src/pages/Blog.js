import React from "react";
import { Link, Route } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";
const firstArticle = raw("../data/blogArticles/article1.md");
const secondArticle = raw("../data/blogArticles/article2.md");

const Article1 = () => (
  <Main title="Article 1" description="Learn about Article 1">
    <article className="post markdown" id="blog">
      <ReactMarkdown>{firstArticle}</ReactMarkdown>
      <p>
        <Link to="/">Back to Blog</Link>
      </p>
    </article>
  </Main>
);

const Article2 = () => (
  <Main title="Article 2" description="Learn about Article 2">
    <article className="post markdown" id="blog">
      <ReactMarkdown>{secondArticle}</ReactMarkdown>
      <p>
        <Link to="/">Back to Blog</Link>
      </p>
    </article>
  </Main>
);

const Blog = () => (
  <Main title="About" description="Learn about Constantin Irimia">
    <article className="post markdown" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading">BLOG</h2>

          <p>
            <Link to="/article1">Article 1</Link>
          </p>
          <p>
            <Link to="/article2">Article 2</Link>
          </p>
        </div>
      </header>

      {
        // /* <Route path="/article1" component={Article1} />
        <Route path="/article2" component={Article2} />
      }
    </article>
  </Main>
);

export default Blog;
