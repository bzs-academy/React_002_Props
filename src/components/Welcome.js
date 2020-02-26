import React, { Component } from 'react'

class Welcome extends Component {
    render() {

        // Destructuring
        const {isim, yas, sehir} = this.props;
        
        console.log(this.props);

        return (
            <div>
                <h3>{isim}</h3>
                <h5>{yas}</h5>
                <p>{sehir}</p>
            </div>
        )
    }
}

// defaultProps goes here
Welcome.defaultProps = {isim: 'Hasan', yas:'18', sehir:'Antalya'}


export default Welcome;

