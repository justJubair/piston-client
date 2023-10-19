import { Link, useNavigate } from "react-router-dom"
import NavbarGeneral from "../../components/Navbar/NavbarGeneral"
import useAuth from "../../hooks/useAuth"
import toast from "react-hot-toast"
import { updateProfile } from "firebase/auth"
import auth from "../../firebase/firebase.config"

const Register = () => {
    const {createUser} = useAuth()
    const navigate = useNavigate()
    const handleRegister =e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){
            return toast.error("Password must be at least six characters or longer")
        }
        if(!/[A-Z]/.test(password)){
            return toast.error("Password must have at least one capital letter")
        }
        if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            return toast.error("Password must have at least one special character")
        }
        createUser(email, password)
        .then(()=>{
            toast.success('Registered Successfully!')
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
            })
           
            navigate("/")
        })
        .catch(error=>{
            toast.error(error.message)
        })
       
        
    } 
  return (
    <div>
      <NavbarGeneral />
      <div className="flex justify-center my-9">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleRegister} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Register in to our platform
            </h5>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="John Doe"
                required
              />
            </div>
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
                placeholder="https://img.png"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
             
            </div>
            <button
              type="submit"
              className="w-full text-white bg-orange-800 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have an account?{" "}
              <Link to="/login"
                className="text-orange-800 hover:underline dark:text-blue-500"
              >
                Login Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
