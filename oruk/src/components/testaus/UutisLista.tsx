import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import "./uutislista.css";


interface UutisListaProps {
    uutisLista: string[],
    uutisTitle: string,
    uutisContent: string,
    
}


const UutisLista: React.FC<UutisListaProps> = (TestiProps) => {

    const [uutisLista, setUutislista]: any = useState([]);
    
    useEffect(() => {
      axios.get("http://localhost:3001/api/get").then((response) => {
        setUutislista(response.data)
      });
    }, []);

        return ( 
            <>    
            {uutisLista.map((val: any) => {
                return (
                    <>

                    <Card className='card'>
                    <CardHeader>
                    <h3>{val['uutisTitle']}</h3>
                    </CardHeader>
                    <p>{val['uutisContent']}</p>
                    </Card>

                    </>
                )
            })}
            </>
         );
    }
     
export default UutisLista;
