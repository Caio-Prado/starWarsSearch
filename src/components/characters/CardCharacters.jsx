import React from "react"

import "./CardCharacters.css"

export default function CardCharacters({ personagem }) {
    return (
        <div className="card-character">
            <div>
                <div className="image"></div>
                <div className="card-detail">
                    <h1>{personagem.name}</h1>
                    <label>naves pilotadas</label>
                    <h2></h2>
                </div>
            </div>
        </div>
    )
}