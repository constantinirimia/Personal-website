import { width } from "@fortawesome/free-brands-svg-icons/faGithub";
import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main description={"Constantin IRIMIA's personal website. "}>
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
        about me, you are in the right place.{" "}
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
        <br></br>I geek on topics that include Machine learning, Artificial
        intelligence and Blockchain and everyday, I am building things that
        improve our world for better. You can take a look at my skills, and see
        in which way I can be helpful to you.
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
        If you have some cool ideas about interesting projects and want to see
        if we can work together to create something amazing, feel free to get in
        touch with me at anytime.
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
