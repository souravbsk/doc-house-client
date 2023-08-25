import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import WithOutHeaderFooter from "../Layouts/WithOutHeaderFooter";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DocViewProfile from "../Pages/DocViewProfile/DocViewProfile";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import Appointment from "../Pages/Appointment/Appointment";
import Dashboard from "../Layouts/Dashboard";
import DocPortal from "../Dashboard/DocPortalAdmin/DocPortal/DocPortal";
import MyAppointment from "../Dashboard/PatientsDashboard/UserDashboard/MyAppointment";
import AdminDashboard from "../Layouts/AdminDashboard";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/doctorProfile/:id",
                element:<DocViewProfile></DocViewProfile>,
                loader:({params}) => fetch(`http://localhost:5000/doctors/${params.id}`)
            },
            {
                path:"/appointment",
                element:<Appointment></Appointment>
            },
       
        ]
    },
    {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"/dashboard/my-appointment",
                element:<MyAppointment></MyAppointment>
                

            },
            
        ]
    },
    {
        path:"/admin-dashboard",
        element:<AdminDashboard></AdminDashboard>,
        children:[
            {
                path:"/admin-dashboard",
                element:<DocPortal></DocPortal>
                

            },
        ]
    },
    {
        path:"/",
        element:<WithOutHeaderFooter></WithOutHeaderFooter>,
        children:[
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
    {
        path:"*",
        element:<NotFound></NotFound>
    }
])

export default router;