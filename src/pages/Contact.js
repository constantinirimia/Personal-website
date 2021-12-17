import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import EmailLink from "../components/Contact/EmailLink";
import ContactIcons from "../components/Contact/ContactIcons";

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Constantin IRIMIA via email cirimia100@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <h1 style={{ fontSize: 20 }}>
          <a href={"mailto:cirimia100@gmail.com"}>Constantin Irimia</a>
        </h1>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
