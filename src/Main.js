import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Work from "./Work";
import Footer from "./Footer.js";
import Services from "./Services";
class Main extends Component{
    render(){
        return(
           <HashRouter>
                <div>
                    <div>
                        <header id="fh5co-header" role="banner">
                            <div className="container">
                                <div className="header-inner">
                                    <h1><a href="index.html">Flew</a></h1>
                                    <nav role="navigation">
                                        <ul>
                                            <li><NavLink to="/Work"><a >Work</a></NavLink></li>
                                            <li><NavLink to="/Services"><a >Services</a></NavLink></li>
                                            <li><NavLink to="/Work"><a >Pricing</a></NavLink></li>
                                            <li><NavLink to="/Work"><a >About</a></NavLink></li>
                                            <li><NavLink to="/Work"><a >Contact</a></NavLink></li>
                                            <li className="cta"><NavLink to="/Work">Get started</NavLink></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </header>
                       
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Work}/>
                        <Route exact path="/Services" component={Services}/>
                    </div>
                     < Footer />
                </div>
           </HashRouter>
        )
    }
}

export default Main;