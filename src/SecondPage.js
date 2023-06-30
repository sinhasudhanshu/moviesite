import React from 'react'
import { useParams } from 'react-router-dom';

const SecondPage = () => {
    const {id} = useParams();

  return (
    
    
        <div>Our Movie { id } </div>
       
  );
};

export default SecondPage;