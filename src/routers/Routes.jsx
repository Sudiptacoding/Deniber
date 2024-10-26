import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import SearchResult from "../pages/SearchResult/SearchResult";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import MyProfile from "../pages/MyProfile/MyProfile";
import AddProperty from "../pages/AddProperty/AddProperty";

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
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
            {
                path: "/myprofile",
                element: <MyProfile></MyProfile>,
            },
            {
                path: "/addproperty",
                element: <AddProperty></AddProperty>,
            },

        ],
    },


]);
export default router;