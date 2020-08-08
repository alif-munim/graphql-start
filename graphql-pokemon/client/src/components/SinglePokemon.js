import React from "react";

export default function SinglePokemon({
    data: {
        name,
        url
    }
}) {
    return (
        <div className="card card-body mb-3">
            <p>{name}</p>
            <p>{url}</p>
        </div>
    )
}

