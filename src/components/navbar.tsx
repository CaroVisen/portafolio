import React from "react";

const Navbar = ({

}) => {
    return(
        <div style={{backgroundColor: '#171718', height:'75px', position:'sticky', color:'#F00EA6', display:'flex', justifyContent:'space-between', alignItems:'center', padding: '0 5%'}}>
            <div style={{width:'10%'}}>
                <h2>Carolina Visentin</h2>
            </div>
            <ul className="menu">
                <li>
                    <a href="#0">
                    Inicio
                    </a>
                </li>
                <li>
                    <a href="#0">
                    Acerca de mi
                    </a>
                </li>
                <li>
                    <a href="#0">
                    Habilidades
                    </a>
                </li>
                <li>
                    <a href="#0">
                    Experiencia
                    </a>
                </li>
                <li>
                    <a href="#0">
                    Proyectos
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;