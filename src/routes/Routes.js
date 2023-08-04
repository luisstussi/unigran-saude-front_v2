import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Clients from "../pages/Clients";
import Login from "../pages/Login";
import Scheduling from "../pages/Scheduling";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" Component={Clients} />
        <Route path="/" Component={Login} />
        <Route path="/agendamento" Component={Scheduling} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
