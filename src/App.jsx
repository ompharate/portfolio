import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Contact from "../pages/Contact";
import OmPharateSEO from "../components/OmPharateSEO";
function App() {
  return (

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <h1 style={{color:"red"}}>Under Maintenance</h1>
    </div>
    // <BrowserRouter>
    //   <OmPharateSEO />
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
