import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/orphanages" element={<OrphanagesMap />} />
                <Route path="/orphanages/create" element={<CreateOrphanage />} />
                <Route path="/orphanages/:id" element={<Orphanage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
