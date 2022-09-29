import React from "react";
import Navigation from '../components/Navigation';
import UutisLista from "../components/testaus/UutisLista";

interface Testi1Props {

};
 
const Testi1: React.FC<Testi1Props> = () => {
    return ( 
        <div className="app">
        <Navigation />
        <div className="card-container">
        <UutisLista uutisLista={[]} uutisTitle={""} uutisContent={""} />
        </div>    
            testi1
        </div>
     );
}
 
export default Testi1;