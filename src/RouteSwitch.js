import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "./App";
import Shop from "./pages/Shop";

const RouteSwitch = () => {
    return (
        < BrowserRouter basename={`/`}>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;