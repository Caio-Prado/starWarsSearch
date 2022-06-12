import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

import CardCharacters from '../../components/characters/CardCharacters';


export default function Busca(props) {

    const [personagens, setPersonagens] = useState([])
    const [loading, setloading] = useState(false)

    const urlAPI = "https://swapi.dev/api/people/" + props.location.search

    useEffect( () => { load() }, [props.location.search] )

    async function load() {
        try {
            setloading(true)
            const response = await axios.get(urlAPI)
            setPersonagens(response.data.results)
        }catch(erro) {
            console.log(erro)
        }
    }

   return (
    
    <Fragment>
        <div className="content">
             {personagens.map( (personagem) => { return <CardCharacters key={personagem.name} personagem={personagem} /> } )}
        </div>
    </Fragment>

   );

}
