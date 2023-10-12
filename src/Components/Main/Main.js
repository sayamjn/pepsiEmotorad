import React, { useState } from 'react';
import LeftSection from '../Section/LeftSection';
import RightSection from '../Section/RightSection';
import "./Main.css"

const products = [
  {
      name: "Pepsi Diet",
      energy: "350 cl",
      energyPercent: "8.6%",
      fat: "0g",
      fatPercent: "0%",
      sodium: "30mg",
      sodiumPercent: "1%",
      carbohydrates: "48g",
      carbohydratesPercent: "15.3%",
      protein: "0g",
      proteinPercent: "0%",
      quantity: "250ml",
      blueIcon: "img/1 Pespi blue.png",
      whiteIcon: "img/1 Pespi white.png",
      heroImg: "img/pepsi diet.png",
      serving: "1"
  },
  {
      name: "Pepsi Classic",
      energy: "150 cl",
      energyPercent: "7.8%",
      fat: "0g",
      fatPercent: "0%",
      sodium: "30mg",
      sodiumPercent: "1%",
      carbohydrates: "41g",
      carbohydratesPercent: "14%",
      protein: "0g",
      proteinPercent: "0%",
      quantity: "330ml",
      blueIcon: "img/2 can blue.png",
      whiteIcon: "img/2 can white.png",
      heroImg: "img/can.png",
      serving: "1"

  },
  {
      name: "Pepsi 500ml",
      energy: "350 cl",
      energyPercent: "12.9%",
      fat: "0g",
      fatPercent: "0%",
      sodium: "40mg",
      sodiumPercent: "2%",
      carbohydrates: "52g",
      carbohydratesPercent: "21.7%",
      protein: "0g",
      proteinPercent: "0%",
      quantity: "500ml",
      blueIcon: "img/3 Pepsi blue.png",
      whiteIcon: "img/3 Pepsi white.png",
      heroImg: "img/pepsi .5ltr.png",
      serving: "2"
      
  },
  {
      name: "Pepsi 1ltr",
      energy: "480 cl",
      energyPercent: "10.1%",
      fat: "0g",
      fatPercent: "0%",
      sodium: "45mg",
      sodiumPercent: "2.5%",
      carbohydrates: "58g",
      carbohydratesPercent: "25.8%",
      protein: "0g",
      proteinPercent: "0%",
      quantity: "1ltr",
      blueIcon: "img/4 Pepsi blue.png",
      whiteIcon: "img/4 Pepsi white.png",
      heroImg: "img/pepsi 1ltr.png",
      serving: "4"

  },
  {
      name: "Pepsi 1.5ltr",
      energy: "625 cl",
      energyPercent: "19.4%",
      fat: "0g",
      fatPercent: "0%",
      sodium: "50mg",
      sodiumPercent: "3%",
      carbohydrates: "66g",
      carbohydratesPercent: "30.9%",
      protein: "0g",
      proteinPercent: "0%",
      quantity: "1.5ltr",
      blueIcon: "img/5 Pepsi blue.png",
      whiteIcon: "img/5 Pepsi white.png",
      heroImg: "img/pepsi 1.5ltr.png",
      serving: "6"

  },
  {
      name: "Pepsi 2ltr",
      energy: "729 cl",
      energyPercent: "37.2%",
      fat: "0g",
      fatPercent: "0%",
      sodium: "560mg",
      sodiumPercent: "4%",
      carbohydrates: "69g",
      carbohydratesPercent: "33.2%",
      protein: "0g",
      proteinPercent: "0%",
      quantity: "2ltr",
      blueIcon: "img/6 Pepsi blue.png",
      whiteIcon: "img/6 Pepsi white.png",
      heroImg: "img/pepsi 2ltr.png",
      serving: "8"

  },
];


function Main() {
    const [currentProduct, setCurrentProduct] = useState(products[0]);

  
  
    const handleProductChange = (index) => {
      setCurrentProduct(products[index]);
    };

  return (
      <div className="mx-auto w-75 main__sections text-white d-flex align-items-start   ">
        {/* Left Section */}
        <LeftSection
        products={products}
        setCurrentProduct={setCurrentProduct}
        currentProduct={currentProduct}
        onProductChange={handleProductChange}
      />

        {/* Right Section */}
        <RightSection
        products={products}
        setCurrentProduct={setCurrentProduct}
        currentProduct={currentProduct}
        onProductChange={handleProductChange}  />
      </div>
  );
}

export default Main;
