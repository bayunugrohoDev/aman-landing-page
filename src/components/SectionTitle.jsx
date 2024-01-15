import React from "react";

const SectionTitle = ({ title, content, className }) => {
  return (
    <div className={`flex flex-col gap-12 ${className}`}>
      <h2 className="text-[38px] font-normal leading-10">{title}</h2>
      {content}
    </div>
  );
};

export default SectionTitle;
