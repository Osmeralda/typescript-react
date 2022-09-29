import React from "react";
import Navigation from '../components/Navigation'
import UutisLista from "../components/testaus/UutisLista";
import Background from "../components/videobackground/Background";
import Footer from '../components/Footer';

interface IndexProps {
    
}
 
const Index: React.FC<IndexProps> = () => {
    return ( 
        <div>
            <Navigation />
            <Background />
            <div className="front-page">
            <UutisLista uutisLista={[]} uutisTitle={""} uutisContent={""} />
            </div>
        tomii!11
        <Footer />
        </div>
     );
}
 
export default Index;