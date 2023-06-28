import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

// const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    // console.log(tag) ;
    const [gif, setGif] = useState('') ;
    const [loading, setLoading] = useState(false) ;
    // const [tag, setTag] = useState("Car") ;
   
   
    async function fetchData() {
      console.log(tag)
      setLoading(true) ;
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      // console.log(url) ;
      const response = await axios.get(tag ? (`${url}&tag=${tag}`) : (url)) ;
      setGif(response.data.data.images.downsized_large.url) ;
      setLoading(false) ;
    }

    useEffect(() => {
      fetchData(tag) ;
    }, [])

    // function clickHandler() {
    //   fetchData() ;
    // }

    // function changeHandler(event) {
    //   setTag(event.target.value) ;
    // }

    return {gif, loading, fetchData}
}

export default useGif