import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";
import { Button } from "react-bootstrap";
const blogPost1 = raw("../data/blogArticles/article1.md");

const BlogPost1 = () => (
  <Main title="BlogPost1">
    <article className="post markdown" id="blogpost1">
      <ReactMarkdown>{blogPost1}</ReactMarkdown>
      <Button>
        <Link to="/blog">Back to Blog</Link>
      </Button>
    </article>
  </Main>
);

export default BlogPost1;
