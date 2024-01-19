import React from "react";

const SectionTitle = ({ title, content, className = "" }) => {
  return (
    <div className={`flex flex-col gap-12 ${className}`}>
      <h2
        data-aos="flip-down"
        className="text-2xl font-normal md:text-[38px] md:leading-10"
      >
        {title}
      </h2>
      {content}
    </div>
  );
};

export default SectionTitle;
