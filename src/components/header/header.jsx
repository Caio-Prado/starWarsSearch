import React, { useState } from 'react'
import logostarWars from '../../img/logoStarWars.png'

import "./Header.css"

export default function Header() {

    const [search, setSearch] = useState("")

    return (
        <div className="header">
            <img src={logostarWars} alt="logo" />
            <form action="">
                <input 
                type="text" 
                name="search"  
                id="search" 
                onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">procurar</button>
            </form>
        </div>
    )
}