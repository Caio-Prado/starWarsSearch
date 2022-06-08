import React from 'react'

import "./Header.css"

export default function Header(props) {
    return (
        <div className="header">
            <div className="logo">Star Wars</div>
            <input type="text" name="search"  id="search"/>
        </div>
    )
}