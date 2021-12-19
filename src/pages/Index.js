import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main description={"Constantin IRIMIA's personal website. "}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">Welcome !</Link>
          </h2>
        </div>
      </header>
      <p>
        {" "}
        Welcome to my website. Please feel free to read more
        <Link to="/about"> about me.</Link>
        <br></br>
        You can take a<Link to="/skills"> look at my skills, </Link>to see if I
        may be in anyhow helpful to you, or you can read{" "}
        <Link to="stats"> some fun statistics </Link>
        about me.
        <br></br>
        If you feel that you have any ideas on how we can use algorithms and
        coding to make even a small change for the better to our society, please
        feel free to
        <Link to="/contact"> get in touch with me</Link>
      </p>
    </article>
  </Main>
);

export default Index;
