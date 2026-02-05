"use client"

export default function Error({error, reset}) {
    return (
        <div>
            <h1>Error</h1>
            <p>{error}</p>
            <button onClick={reset}>Volver</button>
        </div>
    )
}