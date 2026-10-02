import React from "react";

const SkillBar = ({ data }) => {
  const { title } = data;

  return (
    <div className="box" contentEditable="false">
      {title}
    </div>
  );
};

export default SkillBar;
