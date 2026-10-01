import React, { useState } from "react";
import PropTypes from "prop-types";

const Skills = ({ stack }) => {
  const [active, setActive] = useState(stack[0] ? stack[0].id : null);
  const current = stack.find((group) => group.id === active) || stack[0];

  if (!current) {
    return null;
  }

  return (
    <div className="skills" id="skills">
      <div className="link-to" />
      <div className="title">
        <h3>Stack</h3>
        <p className="skills-lede">
          Not a completeness contest. These are the tools I will still defend
          in a design review.
        </p>
      </div>

      <div className="stack-shell">
        <div className="stack-nav" role="tablist" aria-label="Stack domains">
          {stack.map((group) => (
            <button
              type="button"
              role="tab"
              aria-selected={group.id === current.id}
              className={`stack-nav__item ${
                group.id === current.id ? "is-active" : ""
              }`}
              key={group.id}
              onClick={() => setActive(group.id)}
            >
              <span className="stack-nav__id">{group.id}</span>
              {group.label}
            </button>
          ))}
        </div>

        <div className="stack-panel" role="tabpanel">
          <p className="stack-panel__prompt">
            $ inspect ./{current.id}
          </p>
          <h4>{current.label}</h4>
          <p>{current.blurb}</p>
          <ul className="stack-chips">
            {current.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  stack: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      blurb: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
};

Skills.defaultProps = {
  stack: [],
};

export default Skills;
