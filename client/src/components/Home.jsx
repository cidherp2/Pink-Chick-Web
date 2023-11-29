import { Outlet } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img4 from '../assets/img4.jpeg'
import img3 from '../assets/img3.jpeg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/img6.jpeg'
import img7 from '../assets/img7.jpeg'
import img8 from '../assets/img8.jpeg'

import Carousel from 'react-material-ui-carousel'

const Home = (props) =>{

    var items =[
        {
            name: "Kawasaki",
            description: "El baterista, el CM The man",
            imageUrl: img1
        },
        {
            name: "Rorro",
            description: "El Bassman el Back Bone de la banda, el prety boy ",
            imageUrl: img2
        },
        {
            name: "Larry",
            description: "El Frtonman, the funny lad",
            imageUrl: img3
        },
        {
            name: "Rigue",
            description: "The keys, nuestro Rick ",
            imageUrl: img4
        }
    ]

    const [firstImgLoaded, setFirstImgLoaded] = useState(false);

    return(
        <>
        <div className="proyects">
        {/* <h1 className="portfolioTitle">Pink Chicks</h1> */}
       </div>
       <img
       src = {img1}
       alt="movi night"
       onLoad={() => setFirstImgLoaded(true)}
        style={{ display: "none" }}
        />
       {firstImgLoaded && (
       <Carousel 
       animation="fade"
       autoPlay={true}
       indicators={false} 
       interval={3000}
       navButtonsAlwaysVisible={false}
       >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        
       )}
       {/* <div className="collage">
        <div id="collageImg">
      <img className="img1" src={img5} alt="Image 1" />
      <img className="img2" src={img6} alt="Image 2" />
      <img className="img3" src={img7} alt="Image 3" />
      <img className="img4" src={img8} alt="Image 4" />
      </div>
    </div> */}

       
        </>

    );
}

const Item = ({ item }) => (
    <>
    <div id ="proyectsConti">
      <img id ="proyect-Center"src={item.imageUrl} alt={item.name} className='myImage2' />
      <div className="nosotros">
      <h2 className="portfolioTitle" >{item.name}</h2>
      <h3 className="portfolioTitle" id = "portfolioTitleH3">{item.description}</h3>
      </div>
      <div id="info">
      <h1>¿Quiénes somos?</h1>
      <p className="parrainfo">Pink Chicks es la banda mexicana más fresca del momento. Nace de una amistad "de toda la vida" de sus cuatro integrantes, que se conocieron en el kínder del mismo colegio. </p>
      <p className="parrainfo" >Con este proyecto musical, ellos buscan la forma de transmitir sus ideas, experiencias, energía, buena vibra y amistad a través de su música. Viéndose reflejado en una propuesta, basada en una mezcla de influencias y estilos, muy innovadora, interesante y refrescante para la música pop en español.</p>
      </div>
     
    </div>

    </>
)

export default Home;