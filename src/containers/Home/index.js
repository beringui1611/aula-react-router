import React from "react";


import { useNavigate, Link } from "react-router-dom";



export function Home() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/rota-two")
    }
    

    return (
        <div>
            <h1>
                OLA
                <button onClick={handleClick}>
                    proximo
                </button>

                <Link to="/rota-two">Link</Link>
            </h1>
        </div>
    )
}