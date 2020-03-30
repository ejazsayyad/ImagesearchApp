import React from 'react';
//import ReactDOM from 'react-dom';

class Searchbar extends React.Component{
    state={text:''};
    ontextchange(event)
    {
        console.log(event.target.value);
    }

     onformsubmithandler = (e)=>{
        e.preventDefault();
        this.props.onsubmit(this.state.text);
    }

    render()
    {
        return(
        <div className="ui segment">
            <form  
                onSubmit={this.onformsubmithandler}
                className="ui form">
                <div className="field">
                 <label>Image search</label>   
                <input type="text" 
                value={this.state.text} 
                onChange = {e=>this.setState({text:e.target.value.toUpperCase()})}/>
                
                </div>
            </form>
        </div>
        );
    }
}

export default Searchbar;