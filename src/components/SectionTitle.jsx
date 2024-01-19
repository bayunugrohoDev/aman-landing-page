import React from "react";

const SectionTitle = ({ title, content, className = "", ...props }) => {
  return (
    <div {...props} className={`flex flex-col gap-6 md:gap-12 ${className}`}>
      <h2
        data-aos="fade-up"
        className="text-2xl font-normal md:text-[38px] md:leading-10"
      >
        {title}
      </h2>
      <div data-aos="fade-up">{content}</div>
    </div>
  );
};

export default SectionTitle;
