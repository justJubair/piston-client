import React from 'react'

const TeslaCard = ({product}) => {
  return (
    <div>
     <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='md:w-96 md:h-64' src={product.img} alt={product.name}/></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p><span className='font-semibold'>Brand:</span>{product.brand}</p>
    <p><span className='font-semibold'>Type:</span>{product.type}</p>
    <div className="rating my-2">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <p>Price: ${product.price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default TeslaCard
