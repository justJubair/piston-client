import { useState } from "react";
import NavbarGeneral from "../../components/Navbar/NavbarGeneral";

const AddProduct = () => {
    const [type, setType] = useState(null)
    const [rating, setRating] = useState(5)
    const handleAddProduct = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const photo = form.photo.value
        const brand = form.brand.value
        const price = form.price.value
        const description = form.description.value
        const product = {name, photo, brand, price, type, description, rating}
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product) 
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
        })
      
    }
    const handleTypeChange = e =>{
        setType(e.target.value)
    }
    const handleRatingChange =e=>{
        setRating(e.target.value)
    }
  return (
    <div>
      <NavbarGeneral />
      <div className="w-full my-6 max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleAddProduct} className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">
            Add a new product
          </h5>
          <div>
            <label
              htmlFor="photo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="https://img.url"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Product Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Brand"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Brand
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-8 md:mb-0"
              placeholder="brand name"
              required
            />
          </div>
            <label className="mr-4" htmlFor="productType">Type of Product</label>
          <select onChange={handleTypeChange} defaultValue={"DEFAULT"} className="select select-ghost w-full max-w-xs">
            <option value="DEFAULT"  disabled>Please select the type of product</option>
            <option value={"Electric Car"}>Electric Car</option>
            <option value={"Fuel Car"}>Fuel Car</option>
            <option value={"Accessories"}>Accessories</option>
          </select>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="$500"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Short Description
            </label>
           <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" name="description" id="desc" cols="30" rows="5" placeholder="write a short description about this product..."></textarea>
          </div>

          <div onChange={handleRatingChange} className="rating">
            <label className="mr-4 font-medium  text-gray-900" htmlFor="rating">Rating</label>
            <input type="radio" value={1} name="rating-1" className="mask mask-star bg-orange-800"/>
            <input type="radio" value={2} name="rating-1" className="mask mask-star bg-orange-800" />
            <input type="radio" value={3} name="rating-1" className="mask mask-star bg-orange-800" />
            <input type="radio" value={4} name="rating-1" className="mask mask-star bg-orange-800" />
            <input type="radio" value={5} name="rating-1" className="mask mask-star bg-orange-800" />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-orange-800 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
