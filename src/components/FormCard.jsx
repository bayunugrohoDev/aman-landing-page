import React from "react";

const FormCard = (props) => {
  return (
    <div className="rounded-2xl bg-lightGrey px-4 py-8 md:px-[96px] md:py-16">
      <div className="flex flex-col gap-8">{props.children}</div>
    </div>
  );
};

export default FormCard;
