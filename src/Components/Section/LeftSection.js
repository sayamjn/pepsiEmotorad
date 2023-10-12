import React from 'react';
import "./leftSection.css"
function LeftSection({ products, currentProduct, setCurrentProduct, onProductChange }) {
  const handleMouseOut = (index, event) => {
    event.currentTarget.getElementsByTagName("img")[0].src = products[index].blueIcon;
  };
  const handleMouseOver = (index, event) => {
    event.currentTarget.getElementsByTagName("img")[0].src = products[index].whiteIcon;
  };
  
  const handlePrevClick = () => {
    const currentIndex = products.indexOf(currentProduct);
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    setCurrentProduct(products[prevIndex]);
  };
  


  
  return (
    
    <section className="left__section  col-5 pl-3 gap-4 pb-3">
      <div onClick={handlePrevClick} class="prev  d-flex justify-content-start align-items-start">
          <img className='leftArrow' width="25" height="25" src="https://img.icons8.com/ios/50/FFFFFF/long-arrow-left.png" alt="long-arrow-left"/>
    </div>
    <div className="product__content d-flex flex-column">

      <h1 className="product__name" id="product-name">{currentProduct.name}</h1>
      <p className="product__description  font-weight-light"> Carbonated Water, High Fructose, Corn Syrup, Caramel Color, Sugar Phosphoric Acid, Caffeine, Citric Acid, Natural Flour</p>
    </div>

    <div className="product__facts w-100 d-flex flex-column">
      <div className="facts__title mb-2 text-uppercase">
        <h5 className="">Nutrition facts</h5>
      </div>

      <div className="facts__card d-flex justify-content-between align-items-center">
        <div className="card__item fs-6 fs-md-7  gap-2 d-flex justify-content-between flex-column align-items-center text-center">
          <p className="card__title pt-2 d-flex justify-content-start">Amount Per Serving</p>
          <h4 className="card__num fs-5 fs-md-6" id="energy">{currentProduct.energy}</h4>
          <p className="card__percentage  m-0 w-100 p-1" id="energy-percent">{currentProduct.energyPercent}</p>
        </div>
        <div className="card__item fs-6 fs-md-7  gap-2 d-flex justify-content-between flex-column align-items-center text-center">
          <p className="card__title pt-2 d-flex justify-content-start">Total fat</p>
          <h4 className="card__num fs-5 fs-md-6" id="fat">
              {currentProduct.fat}
            </h4>
            <p className="card__percentage  m-0 w-100 p-1" id="fat-percent">
              {currentProduct.fatPercent}
            </p>
        </div>
        <div className="card__item fs-6 fs-md-7  gap-2 d-flex justify-content-between flex-column align-items-center text-center ">
          <p className="card__title pt-2 d-flex justify-content-start">Sodium</p>
          <h4 className="card__num fs-5 fs-md-6" id="sodium">{currentProduct.sodium}</h4>
          <p className="card__percentage  m-0 w-100 p-1" id="sodium-percent">{currentProduct.sodiumPercent}</p>
        </div>
        <div className="card__item fs-6 fs-md-7  gap-2 d-flex justify-content-between flex-column align-items-center text-center ">
          <p className="card__title pt-2 d-flex justify-content-start">Total carbohydrates</p>
          <h4 className="card__num fs-5 fs-md-6" id="carbs">{currentProduct.carbohydrates}</h4>
          <p className="card__percentage  m-0 w-100 p-1" id="carbs-percent">{currentProduct.carbohydratesPercent}</p>
        </div>
        <div className="card__item fs-6 fs-md-7  gap-2 d-flex justify-content-between flex-column align-items-center text-center ">
          <p className="card__title pt-2 d-flex justify-content-start">Protein</p>
          <h4 className="card__num fs-5 fs-md-6" id="protein">{currentProduct.protein}</h4>
          <p className="card__percentage  m-0 w-100 p-1" id="protein-percent">{currentProduct.proteinPercent}</p>
        </div>
      </div>

      <div className="facts__note font-weight-light d-flex justify-content-between align-items-start flex-column    ">
        <p className='m-0 text-secondary mt-2'>Not a significant source of other nutrients</p>
        <p className='m-0 text-secondary m-0'>* Percentage daily values are based on a 2,000 calorie diet.</p>
      </div>
    </div>

    <div className="product__buy py-3">
      <button className='mt-3 py-2 px-5 rounded-5 '>Buy Now</button>
    </div>

    <div className="product__list mt-n4 gx-5 d-flex justify-content-between align-items-center">
      {products.map((product, index) => (
        <div
          key={index}
          className="list__item img-fluid d-flex align-items-center flex-column"
          onClick={() => onProductChange(index)}
          onMouseOver={(event) => handleMouseOver(index, event)}
          onMouseOut={(event) => handleMouseOut(index, event)}
        >
          <img src={product.blueIcon} alt="" />
          <p>{product.quantity}</p>
        </div>
      ))}
    </div>
  </section>
  );
}

export default LeftSection;
