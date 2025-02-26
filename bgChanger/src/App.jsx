import { useState } from "react"


function App() {

  const [bgColor,setbgColor] = useState('white')

  const bgChange = (colorChange)=>{
    setbgColor(colorChange)
  }

  return (
   <div className= {`w-full h-screen ${bgColor}`} >
    <div className="border-2 border-blue-300  rounded-3xl ">
      <div className="flex p-3 text-lg h-auto  text-white flex-wrap gap-3 justify-center ">
     
          <h2 
          onClick={()=> bgChange("bg-red-700")}
          className="border p-3 border-b-cyan-400 rounded-xl bg-red-700">Red</h2>
          <h2 
           onClick={()=> bgChange("bg-blue-700")}
          className="border p-3 border-b-cyan-400 rounded-xl bg-blue-700">Blue</h2>
          <h2 
           onClick={()=> bgChange("bg-yellow-400")}
          className="border p-3 border-b-cyan-400 rounded-xl bg-yellow-400">Yellow</h2>
          <h2
           onClick={()=> bgChange("bg-purple-700")}
           className="border p-3 border-b-cyan-400 rounded-xl bg-purple-700">Purple</h2>
          <h2 
           onClick={()=> bgChange("bg-white")}
          className="border p-3 border-b-cyan-400 rounded-xl bg-white text-black">White</h2>
          <h2 
           onClick={()=> bgChange("bg-green-700")}
          className="border p-3 border-b-cyan-400 rounded-xl bg-green-700">Green</h2>
          <h2 
           onClick={()=> bgChange("bg-pink-700")}
          className="border p-3 border-b-cyan-400 rounded-xl bg-pink-700">Pink</h2>
          <h2 
           onClick={()=> bgChange("bg-black")}
          className="border p-3 border-b-cyan-400 rounded-xl bg-black">Black</h2>
          <h2 
           onClick={()=> bgChange("bg-gray-700")}
          className="border p-3 border-b-cyan-400 rounded-xl bg-gray-700">Gray</h2>
       

      </div>
    </div>
   
   </div>
  )
}

export default App
