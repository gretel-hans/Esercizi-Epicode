import { Component } from "react";

class ImageComponent extends Component{
    render(){
        return(
            <>
            <img src={this.props.LinkImmagine} alt={this.props.AltImmagine}/>
            </>
        )
    }
}

export default ImageComponent;