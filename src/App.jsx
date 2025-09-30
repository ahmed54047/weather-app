import "./App.css";
import Layout from "./components/Layout/Layout";
import Weather from "./components/Weather/Weather";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "", element: <Layout />, children:[
      {path: "home" , element: <Weather/>},
      {path: "news" , element: <Weather/>},
      {path: "live" , element: <Weather/>},
      {path: "contact" , element: <Weather/>},
      {path: "photo" , element: <Weather/>},
  ]}
  ]);
  return (
    <div className='bg-[#382F34]'>
    {/* <div className="bg-[url('./assets/photo2.png')] bg-no-repeat bg-center bg-cover h-screen"> */}
      <RouterProvider router={router} />
    </div>
  ); 
}
export default App;
