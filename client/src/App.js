import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Room from "./components/Room";
import NotFound from "./components/NotFound";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/room/:id" element={ <Room /> } />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </Router>
        );
    }
}

export default App;