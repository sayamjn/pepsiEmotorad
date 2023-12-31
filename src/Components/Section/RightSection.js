import React from 'react';
import "./rightSection.css"
function RightSection({currentProduct, setCurrentProduct, products, onProductChange}) {

  const handleNextClick = () => {
    const currentIndex = products.indexOf(currentProduct);
    const nextIndex = (currentIndex + 1) % products.length;
    setCurrentProduct(products[nextIndex]);
  };
  return (
    <section className="right__section d-flex ">

    <div className="section__img w-100  d-flex justify-content-center  ">
      <img
        src={currentProduct.heroImg}
        alt="Product_img"
        className="product__img"
        id="product-img"
      />
    </div>
    <div className=' d-flex mt-4 d-flex  justify-content-between flex-column align-items-end '>
        <div onClick={handleNextClick} class="next d-flex justify-content-center align-items-center">
        <p className='text-uppercase arrowP' style={{ whiteSpace: 'nowrap' }}>zero sugar</p>
    <img className='rightAwrrow' width="25" height="25" src="https://img.icons8.com/ios/50/FFFFFF/long-arrow-right.png" alt="long-arrow-right"/>

  </div>
        <div className="section__markings d-flex flex-column align-items-end">
      <div className="d-flex flex-column align-items-end nonee ">
        <p className="scale__line "></p>
        <p className="scale__line "></p>
        <p className="scale__line  third"></p>
        <p className="scale__line "></p>
        <p className="scale__line "></p>
        <p className="scale__line "></p>
        <p className="scale__line "></p>
        <p className="scale__line "></p>
        <p className="scale__line "></p>
        <p className="scale__line "></p>
        <p className="scale__line "></p>
        <p className="scale__line "></p>
        <p className="scale__line "></p>
        <p className="scale__line "></p>
      </div>

      <div className="product__quantity d-flex justify-content-between align-items-start  ">
        <div className='d-flex justify-content-between align-items-center flex-column text-centerm m-auto   '>
        <h3 className="litres" id="product-quantity">{currentProduct.quantity}</h3>
        <p className='productStats'>Serving size</p>
        </div>
    <div className='d-flex justify-content-between align-items-center flex-column text-centerm m-auto'>
    <p className="litres " id="product-quantity ">{currentProduct.serving} serving</p>
        <p className='productStats'>per container</p>
    </div>
    <div className='product__quantity-bottom'>

    </div>
      </div>
    </div>
    </div>

  </section>
  );
}

export default RightSection;
