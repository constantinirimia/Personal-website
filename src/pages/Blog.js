import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";
import { Button } from "react-bootstrap";

const blogPost1 = raw("../data/blogArticles/article1.md");

const BlogPreview = ({ title, description, preview, link }) => (
  <article className="post markdown">
    <ReactMarkdown>{preview}</ReactMarkdown>
    <p>
      <Button>
        {" "}
        <Link to={link}>Read More ...</Link>{" "}
      </Button>
    </p>
  </article>
);

const Blog = () => (
  <Main title="Blog" description="Read my latest blog articles">
    <article className="post markdown" id="blog">
      <header>
        <div className="title">
          <h2>BLOG</h2>
        </div>
      </header>
      <BlogPreview preview={blogPost1.slice(0, 300)} link="/blog/blogpost1" />
    </article>
  </Main>
);

export default Blog;
