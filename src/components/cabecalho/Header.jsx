import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'

import logostarWars from '../../img/logoStarWars.png'

import "./Header.css"

function Header(props) {

    const [search, setSearch] = useState("")

    function buscar(e) {
        props.history.push("/busca?search=" + search)
    }

    return (
        <div className="header">
            <img src={logostarWars} alt="logo" className='logo' />
            <form onSubmit={buscar}>
                <input 
                type="text" 
                name="search"  
                id="search" 
                onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit"><BiSearchAlt2 /></button>
            </form>
        </div>
    )
}

export default withRouter(Header)