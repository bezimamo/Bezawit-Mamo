const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Next.js",
  "Flutter",
  "Firebase",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-20 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-6">Skills & Technologies</h2>
        <p className="text-lg text-gray-600 mb-10">
          Here are some of the technologies I've worked with:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg py-4 px-6 hover:shadow-xl transition duration-300"
            >
              <p className="text-indigo-600 font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
