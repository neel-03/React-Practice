import { useState } from "react"

function App() {

  const [color, setColor] = useState('cyan')

  return (
    <>
      <div className="h-screen w-full duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap bg-white px-2 py-2 rounded-full justify-center gap-1">
            <button onClick={() => setColor('red')} className="bg-red px-4 py-1 rounded-full text-white shadow-xl outline-none" style={{ backgroundColor: "red" }}>
              Red</button>
            <button onClick={() => setColor('green')} className="bg-red px-4 py-1 rounded-full text-white shadow-xl outline-none" style={{ backgroundColor: "green" }}>
              Green</button>
            <button onClick={() => setColor('blue')} className="bg-red px-4 py-1 rounded-full text-white shadow-xl outline-none" style={{ backgroundColor: "blue" }}>
              Blue</button>
            <button onClick={() => setColor('olive')} className="bg-red px-4 py-1 rounded-full text-white shadow-xl outline-none" style={{ backgroundColor: "olive" }}>
              Olive</button>
            <button onClick={() => setColor('grey')} className="bg-red px-4 py-1 rounded-full text-white shadow-xl outline-none" style={{ backgroundColor: "grey" }}>
              Gray</button>
            <button onClick={() => setColor('yellow')} className="bg-red px-4 py-1 rounded-full text-black shadow-xl outline-none" style={{ backgroundColor: "yellow" }}>
              Yellow</button>
            <button onClick={() => setColor('pink')} className="bg-red px-4 py-1 rounded-full text-black shadow-xl outline-none" style={{ backgroundColor: "pink" }}>
              Pink</button>
            <button onClick={() => setColor('purple')} className="bg-red px-4 py-1 rounded-full text-white shadow-xl outline-none" style={{ backgroundColor: "purple" }}>
              Purple</button>
            <button onClick={() => setColor('lavender')} className="bg-red px-4 py-1 rounded-full text-black shadow-xl outline-none" style={{ backgroundColor: "lavender" }}>
              Lavender</button>
            <button onClick={() => setColor('white')} className="bg-red px-4 py-1 rounded-full text-black shadow-xl outline-none" style={{ backgroundColor: "white" }}>
              White</button>
            <button onClick={() => setColor('black')} className="bg-red px-4 py-1 rounded-full text-white shadow-xl outline-none" style={{ backgroundColor: "black" }}>
              Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
