import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './testi.css';

export interface UusiUutinenProps {
    muuttuja: string,
    maattuja: string,
    uutisLista: [],
    uusiContent: [],
}
 
const UusiUutinen: React.FC<UusiUutinenProps> = () => {

const [muuttuja, setmuuttuja] = useState('');
const [maattuja, setmaattuja] = useState('');
const [uutisLista, setUutislista]: any = useState([]);

const [uusiContent, setuusiContent]: any = useState([]);

useEffect(() => {
  axios.get("http://localhost:3001/api/get").then((response) => {
    setUutislista(response.data)
  });
}, []);


const submitMolemmat = () => {
    axios.post("http://localhost:3001/api/insert", {
        uutisTitle: muuttuja, 
        uutisContent: maattuja
    });

    setUutislista([
    ...uutisLista,
    { uutisTitle: muuttuja, uutisContent: maattuja },
        ]);
    };

    const deleteUutinen = (uutispoisto:string) => {
        axios.delete(`http://localhost:3001/api/delete/${uutispoisto}`);
    };

    const updateUutinen = (uutispoisto:string) => {
        axios.put('http://localhost:3001/api/update', {
            uutisTitle: uutispoisto, 
            uutisContent: uusiContent,
        });
        setuusiContent("");
    };
    return ( 
        <>
        <div className='pysty'>
        <input type="text"
        name="muuttuja"
        onChange={(e) => {
            setmuuttuja(e.target.value);
        }}
        placeholder="title here" />

        <input type="text"
        name="maattuja"
        onChange={(e) => {
            setmaattuja(e.target.value);
        }}
        placeholder="content here" />

        <button onClick={submitMolemmat}>submit</button>

        {uutisLista.map((val: any) => {
            return (
                <>
                <div className='border margin-2em'>
                <h2>{val['uutisTitle']}</h2>
                <h3>{val['uutisContent']}</h3>
                <button onClick={() => {deleteUutinen(val.uutisTitle)}}>Delete</button>
                
                <input type='text' onChange={(e) => {
                    setuusiContent(e.target.value)
                    }} />
                <button onClick={() => {updateUutinen(val.uutisTitle)}}>Update</button>
                </div>
                </>
            )
        })}

        </div>
        </>
     );
}
 
export default UusiUutinen;