import React from 'react'
import { useState } from 'react';
import Spinner from './Spinner';
// import axios from 'axios';
import useGif from '../CustomHook/useGif';


const Tag = () => {
    // const [gif, setGif] = useState('') ;
    // const [loading, setLoading] = useState(false) ;

    
    const [tag, setTag] = useState("Car") ;
    
    const {gif, loading, fetchData} = useGif(tag) ;
 
    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    
    // async function fetchData() {
    //   setLoading(true) ;
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //   // console.log(url) ;
    //   const response = await axios.get(url) ;
    //   setGif(response.data.data.images.downsized_large.url) ;
    //   setLoading(false) ;
    // }

    // useEffect(() => {
    //   fetchData() ;
    // }, [])

    // function clickHandler() {
    //   fetchData() ;
    // }

    function changeHandler(event) {
      setTag(event.target.value) ;
    }

  return (
    <div className="flex flex-col p-5 w-full md:w-[550px] aspect-auto px-8 gap-y-6 my-8 items-center   bg-blue-700 rounded-lg border-2 border-gray-800 ">

        <h3 className="uppercase text-center underline font-bold text-2xl">a random {tag} gif</h3>

        {
          loading ? (<Spinner/>) : ( <img src={gif} alt="img" className="rounded-md flex-1"/>)
        }

        <input 
          placeholder='Search GIF...' 
          onChange={changeHandler}
          value={tag}
          className="w-full rounded-md p-2 text-center font-semibold bg-white/70 text-black placeholder:text-center placeholder:text-black"/>
       
        <button onClick={() => fetchData()}
          className="uppercase w-full rounded-md p-2 font-semibold bg-white/70">
          generate
        </button>
    </div>
  )
}

export default Tag