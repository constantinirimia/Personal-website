import React from "react";

const SkillBar = ({ data, categories }) => {
  const { title } = data;

  const buttonStyle = {
    width: 200,
  };

  return (
    <div
      className="button"
      contentEditable="false"
      color="red"
      style={buttonStyle}
      disabled="true"
    >
      {title}
    </div>
  );
};

export default SkillBar;
