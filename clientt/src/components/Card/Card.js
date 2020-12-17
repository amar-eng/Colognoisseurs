import React from 'react'

 const Card = (name, long, sillage, desc) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{long}</h1>
            <h1>{sillage}</h1>
            <h1>{desc}</h1>
        </div>
    )
}

export default Card