import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllWorking from "../pages/AllWorking";
import Attendants from "../pages/Attendants";
import Clients from "../pages/Clients";
import Config from "../pages/Config";
import Departaments from "../pages/Departaments";
import Login from "../pages/Login";
import ProfEtec from "../pages/ProfEtec";
import Profilo from "../pages/Profilo";
import Scheduling from "../pages/Scheduling/Scheduling";
import Working from "../pages/Working";


function Rota() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todos-os-funcionarios" Component={AllWorking} />
        <Route path="/atendentes" Component={Attendants}/>
        <Route path="/clientes" Component={Clients} />
        <Route path="/configurações" Component={Config} />
        <Route path="/departamentos" Component={Departaments} />
        <Route path="/" Component={Login} />
        <Route path="/professores-e-tecnicos" Component={ProfEtec} />
        <Route path="/perfil" Component={Profilo} />
        <Route path="/agendamento" Component={Scheduling}/>
        <Route path="/trabalhadores" Component={Working} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rota;
