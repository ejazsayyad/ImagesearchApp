import React from "react";
import "./imglist.css"

const Imageslist=(props)=>{
    //console.log(props);
    
    const images = props.images.map((images)=>{
        return <img key={images.id} alt={images.description} src={images.urls.regular} />;
        
    });
    return(
        <div className="img-list">Images that were found for your query<br />
        <br />
            {images}
            </div>
    );
}

export default Imageslist;