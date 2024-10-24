import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import SearchResult from "../pages/SearchResult/SearchResult";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <p>ERROR</p>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/propertydetails",
                element: <PropertyDetails></PropertyDetails>,
            },
            {
                path: "/searchresult",
                element: <SearchResult></SearchResult>,
            },

        ],
    },


]);
export default router;