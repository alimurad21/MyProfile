import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectPage from "./pages/Project";
import ResumePage from "./pages/Resume";
import "./App.css";

const router = createBrowserRouter([
  {path:'/' ,element:<RootLayout/>, children:[
    { index:true, element: <HomePage /> },
    { path: "about", element: <AboutPage /> },
    { path: "project", element: <ProjectPage /> },
    { path: "resume", element: <ResumePage /> },
  ]},
]);
function App() {
  return <div className="App">
    <RouterProvider router={router}/>;
  </div>
}

export default App;
