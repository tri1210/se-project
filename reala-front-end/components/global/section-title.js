import React from "react";

const SectionTitle = ({ title, position }) => {
  return (
    <div className={`section-title ${position}`}>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionTitle;

SectionTitle.defaultProps = {
  title: "Section Title",
  position: ""
};
