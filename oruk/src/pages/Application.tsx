import { BrowserRouter, Route, Routes } from "react-router-dom";
import Muokkaus from "./Muokkaus";
import Testi1 from "./Testi1";
import Testi2 from "./Testi2";
import Index from "./Index";
import Testi from "../components/testaus/testi"

interface ApplicationProps {
    
}
interface TestiProps {
    muuttuja: string,
    maattuja: string
  }
 
const Application: React.FC<TestiProps> = (props) => {
    return ( <>
    <BrowserRouter>
    <Routes>
        <Route path="/Testi2" element={<Testi2 />} />
        <Route path="/Testi1" element={<Testi1 />} />
        <Route path="/Muokkaus" element={<Muokkaus muuttuja={""} maattuja={""} />} />
        <Route path="/" element={<Index />} />
    </Routes>
    </BrowserRouter>

    </> 
    );
}
 
export default Application;