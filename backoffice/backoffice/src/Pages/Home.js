import React from 'react'
import logo from './../Images/1.jpeg';

function Home() {
    return (
        <div className="home">
            {/* <h1>Home</h1>
            <br></br> */}
            <br></br>
            <img src={logo} alt="Logo" className="logo" width="100%" height="500%"></img>
        </div>
    )
}

export default Home