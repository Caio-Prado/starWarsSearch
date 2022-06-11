import React from 'react'
import logostarWars from '../../img/logoStarWars.png'

import "./Header.css"

export default function Header(props) {
    return (
        <div className="header">
            <img src={logostarWars} alt="logo" />
            <form action="">
                <input type="text" name="search"  id="search"/>
                <button type="submit">procurar</button>
            </form>
        </div>
    )
}