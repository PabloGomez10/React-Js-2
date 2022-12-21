import React, { Component } from "react";
import NavBar from "./componentes/navBar";
import ItemListContainer from "./componentes/itemListContainer";
import Card from "./componentes/card";
import { Outlet, Route, Routes } from "react-router-dom";
import Descripcion from "./componentes/descripcion"
import datos from "./backend.json"


function App() {
  
    return (
      <div className="">
     <NavBar/>
     <Routes>
      <Route exact path = "/" element = { <ItemListContainer Bienvenidos= "Bienvenidos a Delta Informatica"/>} />
      <Route path="/productos" element = {<Card/>}/>
      <Route path="/productos/:nombre" element={ <Descripcion datos={datos}/>}/>
     </Routes>

     {/* <ItemListContainer Bienvenidos= "Bienvenidos a Delta Informatica"/> */}
     
<Outlet/>
    </div>
    );

}



export default App;
