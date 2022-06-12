import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./Characters.css"
import CardCharacters from '../../components/Characters/CardCharacters.jsx';


export default function Characters() {

    const [personagens, setPersonagens] = useState([])
    const [loading, setLoading] = useState(false);
    
    const urlAPI = `https://swapi.dev/api/people/?search=`

    useEffect( () => { load() }, [] )

    async function load() {
        try {
            const response = await axios.get(urlAPI)
            setPersonagens(response.data.results)
        }catch(erro) {
            console.log(erro)
        }
    }

   return (
    <div className="content">
        {personagens.map( (personagem) => { return <CardCharacters key={personagem.name} personagem={personagem} /> } )}
    </div>
    

   );

}
