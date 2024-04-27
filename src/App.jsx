import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Contact from "../pages/Contact";
import OmPharateSEO from "../components/OmPharateSEO";
function App() {
  return (
    <BrowserRouter>
      <OmPharateSEO />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
