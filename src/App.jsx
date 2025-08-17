// import "./App.css";
import AppLayout from "./layout/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Venue from "./pages/About/Venue";
import Home from "./pages/Home";
import CommonPage from "./pages/CommonPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/venue",
          element: (
            <CommonPage buttonText="Venue" buttonLink="venue" totalCards={3} />
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
