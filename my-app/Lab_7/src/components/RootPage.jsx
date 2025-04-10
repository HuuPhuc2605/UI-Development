import Header from "../router/Header";

import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        {/* Sidebar trái */}
        <aside className="w-[300px]  py-8">
          <Header />
        </aside>

        {/* Nội dung chính */}
        <main className="flex-1 bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>

      {/* Footer vẫn ở dưới */}
    </div>
  );
};

export default RootPage;
