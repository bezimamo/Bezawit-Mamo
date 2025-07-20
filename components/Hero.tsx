import Image from "next/image";
import profilePic from "../public/images/bezi.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-indigo-100 via-white to-pink-100 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
        {/* Profile Image */}
        <div>
          <Image
            src={profilePic}
            alt="Bezawit Mamo"
            width={200}
            height={200}
            className="rounded-full shadow-lg ring-4 ring-indigo-200"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Hi, I'm <span className="text-indigo-600">Bezawit Mamo</span> 👋
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-xl mb-6">
            A passionate Software Engineering student and front-end developer focused on building clean, beautiful, and user-friendly web interfaces.
          </p>
          <a
            href="#projects"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition shadow-md"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
