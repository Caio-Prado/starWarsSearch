import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./Characters.css"
import CardCharacters from '../../components/characters/CardCharacters';


export default function AllCharacters() {

    const [personagens, setPersonagens] = useState([])
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
