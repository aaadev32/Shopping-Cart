import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch