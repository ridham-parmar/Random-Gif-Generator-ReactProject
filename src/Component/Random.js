// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import useGif from '../CustomHook/useGif';
import Spinner from './Spinner';


const Random = () => {
    const {gif, loading, fetchData} = useGif('') ;
    // const [gif, setGif] = useState('') ;
    // const [loading, setLoading] = useState(false) ;
   
    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    
    // async function fetchData() {
    //     setLoading(true) ;
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     // console.log(url) ;
    //     const response = await axios.get(url) ;
    //     setGif(response.data.data.images.downsized_large.url) ;
    //     setLoading(false) ;
    // }

    // useEffect(() => {
    //     fetchData() ;
    // }, [])

    // function clickHandler() {
    //     fetchData() ;
    // }

  return (
    <div className="flex flex-col p-5 px-8 w-full md:w-[550px] aspect-auto gap-y-6 my-8 items-center bg-green-400 rounded-lg border-2 border-gray-800 ">
        <h3 className="uppercase text-center underline font-bold text-2xl">a random gif</h3>

        {
            loading ? (<Spinner/>) : ( <img src={gif} alt="img" className="rounded-md flex-1"/>)
        }
       
        <button onClick={() => fetchData()}
        className="uppercase w-full rounded-md p-2 font-semibold bg-white/70">
            generate
        </button>
    </div>
  )
}

export default Random