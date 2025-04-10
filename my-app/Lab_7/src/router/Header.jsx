import {
  LayoutDashboard,
  Folder,
  Users,
  PieChart,
  MessageSquare,
  Code,
  MoreHorizontal,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <aside className="w-[300px] h-screen bg-white flex flex-col justify-between px-6 py-8 shadow">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
        <div className="w-8 h-8 bg-yellow-300 rounded-full -ml-1"></div>
        <h1 className="text-4xl font-bold text-black ml-2">Logo</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-3 flex flex-col">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-pink-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </NavLink>

        <NavLink
          to="/apioverview"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-pink-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <Folder className="w-5 h-5" />
          Projects
        </NavLink>

        <NavLink
          to="/grid"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-pink-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <Users className="w-5 h-5" />
          Teams
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-pink-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <PieChart className="w-5 h-5" />
          Analytics
        </NavLink>

        <NavLink
          to="/messages"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-pink-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <MessageSquare className="w-5 h-5" />
          Messages
        </NavLink>

        <NavLink
          to="/integrations"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-pink-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <Code className="w-5 h-5" />
          Integrations
        </NavLink>
      </nav>

      {/* Middle button */}
      <div className="flex justify-center my-6">
        <button className="w-10 h-10 flex items-center justify-center bg-white shadow-md rounded-xl hover:bg-gray-50">
          <MoreHorizontal className="text-gray-600" />
        </button>
      </div>

      {/* V2.0 banner */}
      <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200 text-center">
        <img
          src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1744284065/Selection_1_jrtwm8.png"
          alt="Update"
          className="mx-auto mb-4"
        />
        <p className="font-semibold text-gray-800">V2.0 is available</p>
        <button className="mt-2 w-[200px] px-4 py-1 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
          Try now
        </button>
      </div>
    </aside>
  );
};

export default Header;
