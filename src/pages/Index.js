import { width } from "@fortawesome/free-brands-svg-icons/faGithub";
import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main description={"Constantin Irimia personal website. "}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <div className="post">
            <h2 data-testid="heading">
              <Link to="/">I build things that live on the internet !</Link>
            </h2>
          </div>
        </div>
      </header>
      <h5>
        Welcome to my website !<br></br>If you are curious to find out more
        about me, you are in the right place!{" "}
        <button>
          <a
            href="https://constantinirimia.com/about"
            onclick="location.href='https://constantinirimia.com/about';"
          >
            {""}
            Find out more{" "}
          </a>
        </button>
      </h5>
      <h5>
        <br></br>I'm a senior software engineer with a passion for creating
        scalable software architecture involving the use of AI and machine
        learning. I'm dedicated to staying on the cutting edge of this exciting
        field, constantly learning and experimenting with new tools and
        techniques to create software that truly makes a difference.{" "}
        <button>
          <a
            href="https://constantinirimia.com/skills"
            onclick="location.href='https://constantinirimia.com/skills';"
          >
            {""}
            See my skills{" "}
          </a>
        </button>
      </h5>
      <h5>
        <br></br>
        If you have any exciting project ideas and are interested in
        collaborating to create something amazing, don't hesitate to contact me
        anytime!{" "}
        <button>
          <a
            href="https://constantinirimia.com/contact"
            onclick="location.href='https://constantinirimia.com/contact';"
          >
            {""}
            Contact me{" "}
          </a>
        </button>
      </h5>
    </article>
  </Main>
);

export default Index;
