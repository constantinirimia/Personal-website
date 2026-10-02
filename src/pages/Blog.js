import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";

const blogPost1 = raw("../data/blogArticles/article1.md");

const BlogPreview = ({ preview, link }) => (
  <article className="post markdown">
    <ReactMarkdown>{preview}</ReactMarkdown>
    <p>
      <Link to={link} className="button">
        read more
      </Link>
    </p>
  </article>
);

const Blog = () => (
  <Main title="Journal" description="Notes from Constantin Irimia">
    <article className="post markdown" id="blog">
      <header>
        <div className="title">
          <p className="prompt">$ cat ./journal/*</p>
          <h2>Journal</h2>
          <p>Occasional writing. No growth-hacking. Just things I wanted to understand in public.</p>
        </div>
      </header>
      <BlogPreview
        preview={blogPost1.slice(0, 300)}
        link="/blog/what-is-nlp-and-how-it-is-useful-to-us"
      />
    </article>
  </Main>
);

export default Blog;
