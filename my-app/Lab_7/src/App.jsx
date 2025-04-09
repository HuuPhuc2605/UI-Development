import DataTable from "./components/DataTable";
import Grid from "./components/Grid";
import APIOverview from "./components/APIOverview";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./components/RootPage";
const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [
      { path: "", element: <Grid /> },
      { path: "/apioverview", element: <APIOverview /> },
      { path: "/datatable", element: <DataTable /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
