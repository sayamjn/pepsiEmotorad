import React from 'react';
import "./rightSection.css"
function RightSection({currentProduct}) {
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

  </section>
  );
}

export default RightSection;
