import PropTypes from "prop-types";
import { AiOutlineDelete, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyCartCard = ({ product, products, setProducts }) => {
  const handleDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://piston-server-gh0fdb7cb-jubair-ahmeds-projects.vercel.app/cart/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if(data.deletedCount > 0){
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your product has been deleted.",
                  "success"
                );
              }
              const remaining = products.filter(product => product._id !== _id)
              setProducts(remaining)
            });

         
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  return (
    <div>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="md:h-96 w-full object-cover  rounded-t-lg"
            src={product.img}
            alt={product.name}
          />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Price: ${product.price}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
          <div className="flex items-center gap-3 justify-end">
            <button onClick={() => handleDelete(product._id)}>
              <AiOutlineDelete className="text-orange-800 text-2xl duration-300 hover:text-3xl" />
            </button>
            <Link to="/">
              <AiOutlineHome className="text-orange-800 text-2xl duration-300 hover:text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

MyCartCard.propTypes = {
  product: PropTypes.object,
  products: PropTypes.array,
  setProducts: PropTypes.func
};

export default MyCartCard;
