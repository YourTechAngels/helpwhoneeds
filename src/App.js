import React from "react";
import "./App.css";
import AppNavBar from "./components/structure/AppNavBar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Footer from "./components/structure/Footer";
import LoginTest from "./components/login/LoginTest";
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <AppNavBar />
                <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/login">
                    <LoginTest />
                </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
