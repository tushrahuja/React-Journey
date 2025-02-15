import React from 'react'

const product = {
  name: "Laptop",
  price: 1200,
  availability: "In stock",
}

const ProductInfo = () => {
  return (
    <div>
      <h3> Name: {product.name}</h3>
      <h3>Price: ${product.price}</h3>
      <h3>Availability: {product.availability}</h3>
    </div>
  )
}

export default ProductInfo