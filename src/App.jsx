import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./home/Page";
import Mechanics from "./mechanics/Page";




function App() {

  return (

    <>
      <Header />

      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/mechanics" element={<Mechanics />}/>
      </Routes>

    </>

  );
}


export default App;