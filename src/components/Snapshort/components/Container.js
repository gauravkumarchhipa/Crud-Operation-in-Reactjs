import React, {  useEffect } from 'react';
// import { useContext } from 'react';
import Gallery from './Gallery';
import Loader from './Loader';
// import { PhotoContext } from '../context/PhotoContext';

const Container = ({searchTerm}) => {
    // const {images, loading, runSearch} = useContext(PhotoContext);
    useEffect(()=>{
        // runSearch(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchTerm]);
  return (
    <div className='photo-container'>
        {/* {loading ?  */}
        <Loader/> 
        <Gallery 
        // data={images}
        />
         {/* } */}
    </div>
  );
};

export default Container