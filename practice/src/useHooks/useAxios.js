import React,{ useEffect } from 'react';
import axios from 'axios';

export default function useAxios() {

  const fetchData = () => {
    axios
      .get('/posts')
      .then((res)=> {
        console.log(res)
      })
      .catch((err)=> {
        console.log(err);
      })
  }

  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])

  return (
    <div>
      
    </div>
  )
}
