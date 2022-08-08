import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/navbar"
import Home from "./components/home"
import Form from "./components/form"
import Footer from "./components/footer"



function App(){
    return(
        <div>
            <Navbar />
            <Home />
            <Form />
            <Footer />
        </div>
    )
}

ReactDOM.render("App", document.getElementById("root"))