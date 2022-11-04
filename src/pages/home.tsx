import React from "react";
import Navbar from "../components/navbar.tsx";
import Inicio from "../components/inicio.tsx";
import Abilities from "../components/abilities.tsx";
import Projects from "../components/projects.tsx";


const Home = ({

}) => {
    return (
        <div>
            <Navbar />
            <Inicio />
            <Abilities />
            <Projects />
        </div>
    )
}

export default Home;