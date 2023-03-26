import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";
import { Button } from "react-bootstrap";
const article_1 = raw("../data/blogArticles/article1.md");

const Article1 = () => (
  <Main title="Article1" description="Learn about Constantin Irimia">
    <article className="post markdown" id="article1">
      <ReactMarkdown>{article_1}</ReactMarkdown>
      <p></p>
      <Button>
        <Link to="/blog">Back to Blog</Link>
      </Button>
    </article>
  </Main>
);

export default Article1;
