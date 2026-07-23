import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./home/Page";
import Mechanics from "./mechanics/Page";
import Services from "./services/Page";
import Login from "./components/Login";
import About from "./about/Page";





function App() {

  return (

    <>
      <Header />
      

      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/mechanics" element={<Mechanics />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/about" element={<About />}/>
       
      </Routes>

    </>

  );
}


export default App;