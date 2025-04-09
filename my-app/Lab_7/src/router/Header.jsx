import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-green-400 min-h-[80px] flex flex-row justify-center items-center space-x-12 text-white font-bold text-xl">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `min-w-[150px] py-1 text-center rounded-lg font-bold ${
            isActive ? "text-green-700" : "hover:bg-green-700 text-white"
          }`
        }
      >
        Grid
      </NavLink>
      <NavLink
        to="/apioverview"
        className={({ isActive }) =>
          `min-w-[150px] py-1 text-center rounded-lg font-bold ${
            isActive ? "text-green-700" : "hover:bg-green-700 text-white"
          }`
        }
      >
        API over View
      </NavLink>
      <NavLink
        to="/datatable"
        className={({ isActive }) =>
          `min-w-[150px] py-1 text-center rounded-lg font-bold ${
            isActive ? "text-green-700" : "hover:bg-green-700 text-white"
          }`
        }
      >
        DataTable API
      </NavLink>
    </div>
  );
};

export default Header;
