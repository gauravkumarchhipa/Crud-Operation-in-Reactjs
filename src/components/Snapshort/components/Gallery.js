import React from 'react'
// import NoImage from "./NoImage";
// import Image from "./Image";

const Gallery = (props) => {
    // const results = props.data;
    let images;
    let noImages;

    // if(results.length > 0){
    //     images = results.map(image => {
    //         let farm = image.farm;
    //         let server = image.server;
    //         let id = image.id;
    //         let secret = image.secret;
    //         let title = image.title;
    //         let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    //         return <Image url={url} key={id} alt={title} />;
    //     });
    // }else{
    //     noImages = <NoImage />;
    // }

  return (
    <div>
        <ul>{images}</ul>
        {noImages}
    </div>
  )
}

export default Gallery