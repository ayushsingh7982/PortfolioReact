import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12">
        {/* Left Side: Title */}
        <div className="md:w-1/3 w-full">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
        </div>

        {/* Right Side: Description */}
        <div className="md:w-2/3 w-full text-lg text-gray-300 leading-relaxed tracking-wide">
          <p className="mb-4">
            I’m <span className="font-semibold text-white">Ayush</span>, a passionate{" "}
            <span className="text-sky-400 font-semibold">Web Developer</span> and{" "}
            <span className="text-purple-400 font-semibold">UI/UX Designer</span> who loves turning ideas
            into beautifully functional interfaces. With a strong background in{" "}
            <span className="text-green-400 font-semibold">engineering</span> and{" "}
            <span className="text-yellow-400 font-semibold">freelance experience</span>, I bring technical precision and creative energy to every project.
          </p>
          <p>
            Whether it's building sleek front-ends with{" "}
            <span className="font-semibold text-blue-300">React.js</span>, optimizing user experience, or
            collaborating in fast-paced environments, I thrive on creating impact through code and design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
