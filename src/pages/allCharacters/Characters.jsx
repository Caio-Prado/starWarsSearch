import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./Characters.css"
import CardCharacters from '../../components/personagens/CardCharacters.jsx';
import Loader from "../../components/loader/Loading";


export default function Characters() {

    const [personagens, setPersonagens] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    
    const urlAPI = `https://swapi.dev/api/people/?search=`

    useEffect( () => { load() }, [] )

    async function load() {
        try {
            const response = await axios.get(urlAPI)
            setPersonagens(response.data.results)
            setRemoveLoading(true)
        }catch(erro) {
            console.log(erro)
        }
    }

   return (
    <div className="content">
        {personagens.map( (personagem) => { return <CardCharacters key={personagem.name} personagem={personagem} /> } )}
        {!removeLoading && <Loader />}
    </div>
    

   );

}
