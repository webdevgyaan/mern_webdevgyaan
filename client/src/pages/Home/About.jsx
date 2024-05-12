import React from "react";
import Section_title from "../../components/Section_title";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "TAILWIND",
    "JAVASCRIPT",
    "REACTJS",
    "NODEJS",
    "EXPRESS",
    "MONGODB",
  ];

  return (
    <div className=" mt-4">
      <Section_title title="About Me" />

      <section className="overflow-hidden  pb-12 lg:pt-[20px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4 h-[300px]">
                <dotlottie-player
                  src="https://lottie.host/b5977059-75c3-4125-8153-f0c958fa93da/d0SnNjk12m.json"
                  background="transparent"
                  speed="1"
                  autoplay
                ></dotlottie-player>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className=" lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-5  text-body-color text-lg text-gray-600 dark:text-neutral-400">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p className="mb-8 text-lg text-body-color text-gray-600 dark:text-neutral-400">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-blue-300 text-xl">
              Here are few technologies which i have been working with recently
            </h3>

            <div className=" flex flex-wrap gap-4 mt-5">
              {skills.map((skill, index) => (
                <div className="border border-indigo-300 py-3 px-10">
                  <h3 className=" text-blue-300 ">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
