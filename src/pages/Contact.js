import React from "react";
import Main from "../layouts/Main";
import ContactIcons from "../components/Contact/ContactIcons";

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Constantin Irimia via email cirimia100@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <p className="prompt">$ request freq</p>
          <h2 data-testid="heading">Contact</h2>
        </div>
      </header>
      <p>
        If the problem is messy, or you just want to talk airplanes:{" "}
        <a href="mailto:cirimia100@gmail.com">cirimia100@gmail.com</a>
      </p>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
