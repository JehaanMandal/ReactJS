import React, { useState } from 'react'
import Home from './Home'

function Nav() {
    const [mode, setMode] = useState({
        color: "black",
        backgroundColor: "white"
    })
     const [text, setText]= useState("Enable Dark Mode")
    const changeMode= ()=>{
      if(mode.color === 'white'){
        setMode({
            color: "black",
          backgroundColor: "white"
        })
        setText("Enable Dark Mode")
      
        

      }else{
       setMode({
        color: "white",
        backgroundColor: "black"
       })
       setText("Enable Light Mode")
      }
    }
   

    return (
        <div className= "h-screen w-full" style={mode}>
            <ul className='flex gap-5 p-5 text-2xl text-white flex-wrap' style={mode}>
                <li className='text-blue-600'>JM</li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
                <input type="text" className='border-1 w-70 h-12 rounded-2xl' />
                <button className=' bg-blue-700 p-2 text-lg rounded-lg'>Search</button>
                <button
                onClick={changeMode}
                className=' bg-cyan-600 p-2 text-lg rounded-lg'>{text}</button>
            </ul>
            <Home/>
        </div>
    )
}

export default Nav
