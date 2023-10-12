import React from 'react'

const LeftSiderbar = ({products,currentProduct,setCurrentProduct}) => {
    const handlePrevClick = () => {
        const currentIndex = products.indexOf(currentProduct);
        const prevIndex = (currentIndex - 1 + products.length) % products.length;
        setCurrentProduct(products[prevIndex]);
      };


  return (
      
      <div onClick={handlePrevClick} class="prev mt-4 d-flex justify-content-start align-items-start">
          <img className='leftArrow' width="25" height="25" src="https://img.icons8.com/ios/50/FFFFFF/long-arrow-left.png" alt="long-arrow-left"/>
    </div>
  )
}

export default LeftSiderbar
