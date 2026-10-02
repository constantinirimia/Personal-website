import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";

const blogPost1 = raw("../data/blogArticles/article1.md");

const BlogPost1 = () => (
  <Main title="What is NLP" description="Natural Language Processing and why it matters">
    <article className="post markdown" id="blogpost1">
      <ReactMarkdown>{blogPost1}</ReactMarkdown>
      <Link to="/blog" className="button">
        cd ../journal
      </Link>
    </article>
  </Main>
);

export default BlogPost1;
