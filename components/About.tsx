const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white text-gray-800"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-indigo-600">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I'm <span className="font-semibold text-gray-900">Bezawit Mamo</span>, a 4th-year Software Engineering student at Bahir Dar University with a passion for frontend development and mobile apps.  
            I have 3 months of hands-on frontend experience working with Awura Tech and Efuyegela, where I contributed to building and deploying the <a href="https://www.hiyawanimations.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Hiyaw Animation project</a>.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-gray-700">
            I specialize in React, Next.js, Tailwind CSS, and Flutter. I enjoy creating clean, responsive, and user-friendly interfaces, while constantly learning new technologies like TypeScript, Firebase, and GraphQL.  
            I am eager to collaborate on meaningful projects and expand my software development expertise.
          </p>
        </div>
        <div className="w-full h-64 sm:h-80 md:h-full rounded-xl bg-indigo-100 flex items-center justify-center">
          <p className="text-indigo-600 font-semibold text-xl">👩‍💻 Coding My Dreams...</p>
        </div>
      </div>
    </section>
  );
};

export default About;
