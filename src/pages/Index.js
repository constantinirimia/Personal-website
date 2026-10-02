import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import Notams from "../components/Template/Notams";
import stack from "../data/resume/skills";
import formatZulu from "../lib/zulu";

const capabilities = [
  {
    id: "01 / systems",
    title: "Make the hard path the default",
    body: "I design services, data paths, and failure modes so the system still answers when traffic, teams, and assumptions all change at once.",
  },
  {
    id: "02 / intelligence",
    title: "Put models in production",
    body: "Not the demo. The evaluation, the latency budget, the fallback, and the plumbing that keeps a model useful after week one.",
  },
  {
    id: "03 / airwork",
    title: "Checklists over heroics",
    body: "Same bias in a cockpit and in a codebase: brief, fly the procedure, leave margin. Staff work is making that the team default.",
  },
];

const featured = stack.filter((group) =>
  ["languages", "backend", "data", "cloud"].includes(group.id)
);

const Index = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <Main description="Constantin Irimia — staff software engineer and pilot.">
      <article className="post operator-home" id="index">
        <div className="terminal">
          <div className="terminal__chrome">
            <div className="terminal__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span>flt deck · {formatZulu(now)} · pos redacted</span>
          </div>
          <div className="terminal__body">
            <p className="prompt">$ whoami</p>
            <h1 data-testid="heading">Constantin Irimia</h1>
            <p className="role">Staff Software Engineer · Pilot</p>
            <p className="mission">
              I build systems that have to keep working when the brief is
              wrong. Software, models, the boring path between them.
            </p>
            <Notams />
            <div className="command-row">
              <Link to="/about" className="button">
                ./about
              </Link>
              <Link to="/contact" className="button">
                ./freq
              </Link>
              <span className="hint">press /</span>
            </div>
          </div>
        </div>

        <div className="capability-grid">
          {capabilities.map((item) => (
            <section className="capability" key={item.id}>
              <div className="capability__id">{item.id}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </section>
          ))}
        </div>

        <section className="debrief" id="debrief">
          <p className="debrief__id">debrief · names filed off</p>
          <h2>The green board</h2>
          <p>The model was accurate. That was the bug.</p>
          <p>
            Traffic collapsed onto a handful of answers that scored well.
            Latency fell. Errors fell. The dashboard went green and stayed
            there. A fallback already existed. Nobody owned the pager for
            “too sure.”
          </p>
          <p>
            We added a dull check: when the top answers stopped looking like a
            distribution, cut over to last known good. The model stayed. The
            victory lap did not.
          </p>
        </section>

        <section className="stack-strip" id="stack">
          <p className="debrief__id">stack</p>
          <h2>What I reach for</h2>
          <div className="stack-strip__groups">
            {featured.map((group) => (
              <div key={group.id}>
                <h3>{group.label}</h3>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </Main>
  );
};

export default Index;
