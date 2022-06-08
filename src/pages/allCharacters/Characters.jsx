import React from 'react';

import CardCharacters from '../../components/characters/CardCharacters';


export default function AllCharacters() {
   return(
    <div className="content">
        <CardCharacters />
        <CardCharacters />
        <CardCharacters />
        <CardCharacters />
    </div>
   );

}
