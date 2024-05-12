import React from "react";

const Section_title = ({ title = "section_tilte" }) => {
  return (
    <div>
      <p className=" text-white font-semibold text-lg">{title}</p>
      <div className=" h-1 w-8 bg-slate-500"></div>
    </div>
  );
};

export default Section_title;
