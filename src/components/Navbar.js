import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="navbar-brand">
                AlkoffMarket
            </div>
            <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink 
                            className="nav-link" 
                            to="/"
                            exact>
                                Main
                        </NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink 
                            className="nav-link" 
                            to="/add">
                                Add
                        </NavLink>
                    </li>
            </ul>
        </nav>
)
    export default Navbar       
