import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./Characters.css"
import CardCharacters from '../../components/characters/CardCharacters';


export default function AllCharacters() {

    const [personagens, setPersonagens] = useState([])

    useEffect( () => { load() }, [] )

    async function load() {
        try {
            const response = await axios.get(`https://swapi.dev/api/people/?page=${1}`)
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
