import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Visualizar from "../pages/visualizar";
import Cadastrar from "../pages/Cadastro";
import Editar from "../pages/Editar";
import Deletar from "../pages/Deletar";
import Ativas from "../pages/visualizar/ativas";
import Desativadas from "../pages/visualizar/Desativadas";

function MainRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Visualizar />}/>
                <Route path="/Ativas" element={<Ativas />}/>
                <Route path="/Desativadas" element={<Desativadas />}/>
                <Route path="/Cadastrar" element={<Cadastrar />} />
                <Route path="/Editar" element={<Editar />} />
                <Route path="/Deletar" element={<Deletar />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes