const Skills = () => {
  const technicalSkills = [
    'HTML/CSS',
    'JavaScript',
    'React.js',
    'Responsive Design',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Git/GitHub',
    'APIs & JSON',
    'Visual Studio Code',
    'Chrome DevTools',
    'C++',
    'DSA',
  ];

  const softSkills = [
    'Project Management',
    'Leadership',
    'Communication',
    'Problem-Solving',
  ];

  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          My Skills
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          <span className="text-gray-300 font-semibold">What I Have Learned So Far</span>
        </p>
        <div className="mt-2 w-20 h-1 bg-green-400 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-green-500 pl-3">
            Technical Skills
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {technicalSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-800 text-gray-200 py-2 px-4 rounded-lg text-sm text-center shadow-sm hover:bg-green-600 hover:text-white transition duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-3">
            Soft Skills
          </h3>
          <ul className="grid grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-800 text-gray-200 py-2 px-4 rounded-lg text-sm text-center shadow-sm hover:bg-blue-600 hover:text-white transition duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
