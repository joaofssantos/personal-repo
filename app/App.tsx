import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ErrorPage from "./ErrorPage.tsx";

import * as Index from "./routes/index.tsx";
import * as Preview from "./routes/preview.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index.default />,
        ...Index,
      },
      {
        path: "preview",
        element: <Preview.default />,
        ...Preview,
      },
      // Add other routes in here
      // { path: 'blog/:id', element: <Blog.default />, ...Blog },
    ],
  },
], {
  basename: "/",
});

function Root() {
  return <Outlet />;
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
