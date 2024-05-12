import React from "react";
import Section_title from "../../components/Section_title";
import { experiences } from "../../resorces/Resorces";

const Experiences = () => {
  return (
    <div>
      <Section_title title="Experience" />

      <div className="flex">
        <div>
          {experiences.map((experience) => (
            <div>
              <h3>{experience.period}</h3>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Experiences;
