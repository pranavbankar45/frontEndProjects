import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 p-6 text-center">
      <p className="text-sm text-gray-500">
        © 2025 My Website. Built with ❤️ using React + Tailwind
      </p>
      <div className="mt-2 flex justify-center gap-4">
        <Link to="/" className="text-gray-500 hover:text-gray-900">
          Home
        </Link>
        <Link to="/about" className="text-gray-500 hover:text-gray-900">
          About
        </Link>
        <Link to="/contact" className="text-gray-500 hover:text-gray-900">
          Contact
        </Link>
      </div>
    </footer>
  );
}
