const Merch  = require('../models/Merch');
const img1 = "../assets/img10.webp"
const img2 = "../assets/img11.jpeg"
const img3  = "../assets/img12.png"
const img4 =  "../assets/img13.png"

const categoryData = [
  {
    name: "Playera LS",
    description: "Tiene el corazón de Love Song? en la parte izquirda donde está tu corazconcito ❤️",
    price: 280.00,
    imageUrl:  "/src/assets/img12.png"
  },

  {
    name: "Hoodie Pink",
 
    description: "Elaboradas con la técnica Tie-dye, cada una elaborada por nosotros",
  
    price: 380.00,
  
    imageUrl: "/src/assets/img11.jpeg"
  },

  {
    name: "Playera Pink",
 
    description: "Elaboradas con la técnica Tie-dye, cada una elaborada por nosotros",
  
    price: 280.00,
  
    imageUrl: "/src/assets/img10.webp"
  },

  {
    name: "Gorra PC",
  
    description: "Gorra bordada con mascota PC",
  
    price: 250.00,
 
    imageUrl: "/src/assets/img13.png"
  },
];

const seedCategories = () => Merch.bulkCreate(categoryData);

module.exports = seedCategories;
