import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Education from "../components/Resume/Education";
import Skills from "../components/Resume/Skills";
import Courses from "../components/Resume/Courses";

import courses from "../data/resume/courses";
import degrees from "../data/resume/degrees";
import { skills, categories } from "../data/resume/skills";
import Certifications from "../components/Resume/Certifications";

const sections = ["Skills", "Certifications", "degrees", "Courses"];

const Resume = () => (
  <Main title="SKILLS" description="Constantin IRIMIA'">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="resume">SKILLS</Link>
          </h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <Skills skills={skills} categories={categories} />
      <Certifications />
      <Education data={degrees} />
      <Courses data={courses} />
      lal
    </article>
  </Main>
);

export default Resume;
