import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/orphanages" element={<OrphanagesMap />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
