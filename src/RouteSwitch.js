import { BrowserRouter, Routes, Route, Router, HashRouter } from "react-router-dom";
import App from "./App";
import Shop from "./pages/Shop";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            < HashRouter basename="/">
                <Route path="/" element={<App />} />
                <Route path="/Shop" element={<Shop />} />
            </HashRouter>
        </BrowserRouter>
    );
};

export default RouteSwitch;