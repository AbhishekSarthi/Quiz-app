import React, { Component } from "react";
import "./App.css";
import Left from './components/Left';
import Intstruction from "./components/Intstruction";
import Yesterday from "./components/Yesterday";
import Nav from "./components/Nav";
import Footer from './components/Footer';
import Gmail from "./components/Gmail";

class User extends Component{
  render() {
    return (
      <div className="App">
        <Nav/>
         <div className="d-flex flex-sm-row flex-column justify-content-center ">
         <div>
            <Left/>
          </div>          
          <div className="right">
            <Intstruction/>
            <Yesterday/>
            <Gmail/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
 
export default User;