import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const {loginGoogle} = useAuth()
  const navigate = useNavigate()
  const handleGoogleLogin = ()=>{
    loginGoogle()
    .then(()=>{
      toast.success("Logged in")
      navigate("/")
    })
    .catch(error=>{
      toast.error(error.message)
    })
  }
  return (
    <div className="my-4">
        <div className="text-center border-b-2 pb-2">
            <p className="text-gray-500 font-medium">Login with</p>
        </div>
      <div className="flex items-center justify-center gap-7 mt-3 bg-base-200 py-2">
      <AiOutlineGoogle onClick={handleGoogleLogin} className="text-3xl hover:cursor-pointer hover:text-4xl duration-200"/>
      <AiOutlineGithub className="text-3xl hover:cursor-pointer hover:text-4xl duration-200"/>
      </div>
    </div>
  )
}

export default SocialLogin
