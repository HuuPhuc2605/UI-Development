import DataTable from "./components/DataTable";
import Grid from "./components/Grid";
import APIOverview from "./components/APIOverview";
import Overview from "./components/Overview";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./components/RootPage";
const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [
      { path: "", element: <DataTable /> },
      { path: "/apioverview", element: <APIOverview /> },
      { path: "/grid", element: <Grid /> },
      { path: "/analytics", element: <Overview /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
