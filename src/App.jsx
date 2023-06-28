import React from 'react'
import Random from './Component/Random'
import Tag from './Component/Tag'

const App = () => {
  return (
    <div className="background min-h-screen flex flex-col items-center">
    
        <h1 className="w-[88%] max-w-[1160px] uppercase bg-white text-center mt-10 rounded-lg p-4 font-bold text-3xl">random gifs</h1>

        <div className="w-[88%] max-w-[1160px] flex flex-col items-center">
          <Random/>
          <Tag/>
        </div>

    </div>
  )
}

export default App