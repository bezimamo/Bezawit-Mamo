import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Bezawit Mamo</h1>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="/" className="text-gray-600 hover:text-indigo-500">Home</Link>
          <Link href="/#about" className="text-gray-600 hover:text-indigo-500">About</Link>
          <Link href="/#skills" className="text-gray-600 hover:text-indigo-500">Skills</Link>
          <Link href="/#projects" className="text-gray-600 hover:text-indigo-500">Projects</Link>
          {/* <Link href="/#experience" className="text-gray-600 hover:text-indigo-500">Experience</Link> */}
          {/* <Link href="/#resume" className="text-gray-600 hover:text-indigo-500">Resume</Link> */}
          <Link href="/#contact" className="text-gray-600 hover:text-indigo-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
