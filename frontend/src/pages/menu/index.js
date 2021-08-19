import React from 'react';
import './menu.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Cadastro from '../cadastro';
import Lista from '../lista';




const Menu = () => {
    return(
        <div className="menu">

            <nav>
                <img src="https://morpheustecnologia.com/wp-content/uploads/2019/04/morpheus-1.svg" alt="morpheus-logo">
                </img>
                <Router>
                    <ul>
                        <li>
                            <Link to= "/cadastro" className="cadastrarButton" >
                                Cadastrar
                            </Link>
                        </li>
                        <li>
                            <Link to= "/lista" className="listarButton">
                                Listar
                            </Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/cadastro">
                            <Cadastro />
                        </Route>
                        <Route path="/lista">
                            <Lista />
                        </Route>
                    </Switch>

                </Router>
            </nav>

        </div>
    
    )
}



export default Menu;