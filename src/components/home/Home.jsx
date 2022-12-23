import React from 'react'
import { Link } from "react-router-dom"


function Home() {

    return (
        <Link to="/canvas" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            // width: '100%',
            textDecoration: 'none',
        }}>
            <button type="submit"
                style={{
                    width: "200px", height: "50px", borderRadius: "5px",
                    color: "white", backgroundColor: "black", border: "none"
                }}>
                Create interactive video</button>
        </Link>
    )
}

export default Home 