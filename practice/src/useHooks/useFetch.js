import React,{ useState, useEffect } from 'react'

export default function useFetch(url) {

  useEffect((url) => { () => 
    
    fetch (url)
    .then(x => x.text())
    .then(y => console.log(y));
  }, [url])

  return (
    <div>
      
    </div>
  )
}
