import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { router, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses/Courses";
import Faq from "./Pages/Faq/Faq";
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/LoginAndRegistration/Login";
import Signup from "./Pages/LoginAndRegistration/Signup";
import { Toaster } from "react-hot-toast";
import Profile from "./Others/Profile/Profile";
import Checkout from "../src/Pages/Checkout/Checkout";
import PrivateRoute from "../src/Routes/Privateroutes/Privateroutes";
import NotFound from "../src/NotFound";
import CourseDetails from "./Pages/Courses/CourseDetails/CourseDetails";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
        },

        {
          path: "/courses/:id",
          loader: ({ params }) =>
            fetch(`http://localhost:5000/course-details/${params.id}`),
          element: <CourseDetails></CourseDetails>,
        },
        {
          path: "/checkout/:id",
          loader: ({ params }) =>
            fetch(`http:localhost:5000/course-details/${params.id}`),
          element: (
            <PrivateRoute>
              <Checkout></Checkout>
            </PrivateRoute>
          ),
        },

        {
          path: "/faq",
          //   loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Faq></Faq>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },

        {
          path: "/signup",
          element: <Signup></Signup>,
        },

        {
          path: "/login",
          element: <Login></Login>,
        },

        {
          path: "/profile",
          element: <Profile></Profile>,
        },
        {
          path: "*",
          element: <NotFound></NotFound>,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;