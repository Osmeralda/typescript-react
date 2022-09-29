import React, {useState} from "react";
import './pages.css';
import Navigation from "../components/Navigation";
import UusiUutinen from "../components/testaus/testi";
  
interface TestiProps {
  muuttuja: string,
  maattuja: string
}
  
const Muokkaus: React.FunctionComponent<TestiProps> = (props) => {

    return(
        <div>
            <Navigation />
            <div className="muokkaus-sivu">
            <UusiUutinen muuttuja={""} maattuja={""} uutisLista={[]} uusiContent={[]} />
            </div>
        </div>
    )
}

export default Muokkaus;