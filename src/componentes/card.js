import React from "react";
import dataJson from "../backend.json"
import {Link} from "react-router-dom"

const Card = () => {


 
 return (<div className='container-fluid row gap-15'>

             

 {dataJson.map(datos=>(

   <div className='card wd-18 col-6'>

       <img src={datos.imagenes} className="card-img-top"/>

       <h2 className='card-title fs-4'>{datos.nombre}</h2>

       {/* <p>{datos}</p> */}

       <p>Precio:{datos.precio}$</p>

        <Link to={`${datos.nombre}`}> 

       <button class="btn btn-primary" type="submit">Ver</button> </Link> 

   </div>

 ))}  

</div>);   
}
export default Card;