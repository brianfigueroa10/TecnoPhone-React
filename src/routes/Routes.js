import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";
import Checkout from "../pages/Checkout/Checkout";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import NotFound from "../pages/PageNotFound/NotFound";
import Congratulation from "../pages/Congratulation/Congratulation";
import Contact from "../pages/Contact/Contact";
import Orders from "../pages/Orders/Orders.jsx";
import { useEffect } from "react";
import Login from "../pages/Login/Login";



function Routes() {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplazarse hacia la parte superior de la página al montar el componente
    }, []);
    return (
        <ReactDomRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/misOrdenes" element={<Orders />} />
            <Route path="/congratulation" element={
                <ProtectedRoute redirectTo="/register">
                    <Congratulation />
                </ProtectedRoute>} />
            <Route path="/checkout" element={
                    <ProtectedRoute redirectTo="/register">
                        <Checkout />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<NotFound />} />
        </ReactDomRoutes>
    );
}

export default Routes;
