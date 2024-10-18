import axios from 'axios';
import React, { useEffect } from 'react';

const file = () => {
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res=>console.log(res))
},[])
  return (
    <div>
      <h1>Axios tutorial</h1>
    </div>
  );
}

export default file;
