import React, { Component } from 'react';


class Button extends Component {

    handleClick = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(`${e.target.innerHTML} button clicked`);
    }


    render () {

        return (
            <button 
                    onClick = {this.handleClick}
            style={{padding:'10px 20px', margin:'0 10px'}}>{this.props.text}</button>
        )
    }

}


// defaultProps goes here
Button.defaultProps = {text: 'I am a button'}

export default Button;

