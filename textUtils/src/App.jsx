import React, { useState, useRef } from 'react'


function App() {

  const [text, setText] =  useState("Type your words")


   const textRef = useRef(null)

  const toUpper = ()=>{
     setText(text.toUpperCase())
  }
  const toLower = ()=>{
     setText(text.toLowerCase())
  }

  const removeExtraSpace = ()=>{
    let someText = text.split(/\s+/).filter(Boolean).join(' ')
    setText(someText)
  }
  
  const dltText = ()=>{
    setText(" ")
  }

  const copyTextToClip =()=>{
    textRef.current?.select()
    navigator.clipboard.writeText(text)
  }



  const writeText = (e)=>[
    setText(e.target.value)
  ]

  return (
    <div className='w-full  h-screen bg-emerald-600'>
      <h1 className='text-center text-3xl text-white font-bold mb-3'> Text Utils</h1>
      <div className='flex justify-center'>
        <textarea
        ref={textRef}
        onChange={writeText}
        value= {text}
        className='border-2 p-3 border-blue-400 text-white'
         cols= {70} rows={8} ></textarea>
      </div>
      <div className='flex  justify-center gap-2 my-3 text-white'>
      <button 
      onClick={removeExtraSpace}
      className='bg-cyan-600 p-2 rounded-lg hover:bg-cyan-900'>Remove Extra Spaces</button>
      <button 
      onClick={toUpper}
      className='bg-cyan-600 p-2 rounded-lg hover:bg-cyan-900'>Capitalize Letters</button>
      <button 
       onClick={toLower}
      className='bg-cyan-600 p-2 rounded-lg hover:bg-cyan-900'>LowerCase</button>
      <button 
       onClick={dltText}
      className='bg-cyan-600 p-2 rounded-lg hover:bg-cyan-900'>Delete Texts</button>
      <button 
       onClick={copyTextToClip}
      className='bg-cyan-600 p-2 rounded-lg hover:bg-cyan-900'>Copy Text</button>


      </div>
      <div className='flex justify-center my-5 text-xl text-white flex-col items-center'> 
      <h2 className='underline'> Total words and Characters :</h2>
      <p className='my-3'> {text.split(" ").filter((txt)=> text.length !== 0 ).length}  Words {text.length} Characters</p>
    </div>

    <h2 className='text-2xl text-white text-center underline'>Check the above sentences in one line : </h2>
    <p className='text-lg text-white text-center mt-3'>{text.slice( " ")}</p>
    
    </div>
  )
}

export default App
