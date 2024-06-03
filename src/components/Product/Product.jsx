import { useEffect, useState } from "react"



const Product = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => setProducts(data.products))
  })
  return (
    <>
      <div className="product">
        {
            products.map(product => 
                <div className="card" key={product.id}>
                    <img src={product.images[0]} alt="" />
                    <br />
                    <br />
                    <strong>{product.title}</strong>
                    <br />
                    <br />
                    <strong>${product.price}</strong>
                </div>
            )
        }
      </div>
    </>
  )
}

export default Product
