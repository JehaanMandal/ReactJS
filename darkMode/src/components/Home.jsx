import React from 'react'
import Nav from './Nav'

function Home({mode}) {
    return (
        <>
        <h1 className=" flex bg-blue-400 p-7 justify-center text-4xl my-5" style={mode}>Welcome to JM site. </h1>
        </>
    )
}

export default Home
