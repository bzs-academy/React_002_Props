import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Merhaba from './components/Merhaba';
import Button from './components/Button';
import Card from './components/Card';

// import images from assets folder
import resim1 from './assets/user1.jpeg';
import resim2 from './assets/user2.jpeg';


function App() {
  return (
      <div>
          <Card source={resim1} kisi= "Ahmet Yilmaz" text="Alan sorumlusu lorem lorem lorem " />
          <Card source={resim2} kisi= "Ayse Yilmaz" text="Yönetici lorem lorem loremlorem lorem" />
          <Card source={'/images/userPublic.jpeg'} kisi= "Ali Kara" text="Asistan lorem lorem lorem lorem lorem" />

          <Welcome isim="Hasan Yildiz" yas="35"   sehir="Istanbul"/>
          <Welcome />
         
          <hr/>

          <Merhaba isim="Ali Uzungol"  yas="25" sehir="Trabzon"/>
          <Merhaba />
         
          
          <hr/>
          <Button text="Read more"/>
          <Button />
          
      </div>
  );
}

export default App;
