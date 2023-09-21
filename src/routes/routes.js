import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Home, RotaTwo } from "../containers";


function MyRoutes() {



    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="rota-two" element={<RotaTwo/>} />
            </Routes>
        </Router>
    )
    
}

export default MyRoutes