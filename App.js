import React from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';
import Searchbar from './Searchbar';
import Imageslist from "./imageslist"


class App extends React.Component
{
    state={images:[]}
     onsearchsubmit= async (text)=>{
        //console.log(text);
        //requests
        const responce=await axios.get('https://api.unsplash.com/search/photos/',
        {
            params:{query : text} ,  
                headers:{ 
                Authorization: 'Client-ID 6bc7d0f01943dff0b179500b49a7190ba0cd62e678ceed0cfcf3acd825dabeb7'
                }
        }
       
        );
        //console.log(responce.data.results);
        this.setState({images:responce.data.results});
    };
    render()
    {
    return (<div className="ui container" style={{marginTop:"50px"}}>
        <Searchbar  onsubmit={this.onsearchsubmit} />
        Instructions: Enter your query into the searchbar and hit enter.<br />
        found:{this.state.images.length} images

        <Imageslist images={this.state.images} />
        </div>);
    }    
}

export default App;