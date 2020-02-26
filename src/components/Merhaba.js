import React from 'react'


// function Merhaba(props) {
//     console.log(props);
//     return (
//         <div>
//             <h3>{props.isim}</h3>
//             <h5>{props.yas}</h5>
//             <p>{props.sehir}</p>
//         </div>
//     )
// }
// // defaultProps goes here
// Merhaba.defaultProps = {isim: 'Hasan', yas:'18', sehir:'Antalya'}
// export default Merhaba;


// // Destructuring 1. Yöntem
// function Merhaba({isim, yas, sehir}) {
//     return (
//         <div>
//             <h3>{isim}</h3>
//             <h5>{yas}</h5>
//             <p>{sehir}</p>
//         </div>
//     )
// }
// // defaultProps goes here
// Merhaba.defaultProps = {isim: 'Hasan', yas:'18', sehir:'Antalya'}
// export default Merhaba;


// Destructuring 2. Yöntem
function Merhaba(props) {

    const {isim, yas, sehir} = props;
    
    return (
        <div>
            <h3>{isim}</h3>
            <h5>{yas}</h5>
            <p>{sehir}</p>
        </div>
    )
}
// defaultProps goes here
Merhaba.defaultProps = {isim: 'Hasan', yas:'18', sehir:'Antalya'}
export default Merhaba;
