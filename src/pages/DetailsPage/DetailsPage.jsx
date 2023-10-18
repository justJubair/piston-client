import { useLoaderData, useParams } from "react-router-dom"


const DetailsPage = () => {
    const {id} = useParams()
    const idInt = parseInt(id)
    const data = useLoaderData()
    const selectedProduct = data.find(product => product.id === idInt)
    
  return (
    <div className="max-w-screen-lg mx-auto px-4">
     <div className="card w-full lg:w-1/2 mx-auto glass">
  <figure><img src={selectedProduct.img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{selectedProduct.name}</h2>
    <p>{selectedProduct.description}</p>
    <p>Manufacture Year : {selectedProduct.manufacture_year}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-orange-800 text-white">Add to cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default DetailsPage
