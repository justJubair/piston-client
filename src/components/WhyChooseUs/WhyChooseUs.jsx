import { LuBadgeCheck } from "react-icons/lu";
import { FaUserFriends, FaRegMoneyBillAlt } from "react-icons/fa";
const WhyChooseUs = () => {
  return (
    <div className="mb-24 px-4">
      <h2
      data-aos="fade-up"
      data-aos-duration="2000"
      className="text-center mb-10 mt-16 md:mt-28 text-4xl font-bold"
    >
      Why <span className="text-orange-800">choose</span> us?
    </h2>
    <div className="max-w-screen-lg mx-auto gap-10 lg:gap-20 flex flex-col lg:flex-row">
        <div className="flex flex-col items-center">
            <span><LuBadgeCheck size={60} className="text-orange-600"/></span>
            <h3 className="text-xl font-bold text-gray-500 my-4">Wide range of brands</h3>
            <p className="text-center text-gray-500 w-9/12 lg:w-full">Mercedes-Benz is a luxury brand famed for opulence and cutting-edge tech. Chevrolet, an American classic, delivers dependable performance across trucks, SUVs, and cars.</p>
        </div>
        <div className="flex flex-col items-center">
            <FaUserFriends size={60} className="text-green-400"/>
            <h3 className="text-xl font-bold text-gray-500 my-4">Trusted by our clients</h3>
            <p className="text-center text-gray-500 w-9/12 lg:w-full">Embraced and valued by our clients for our steadfast commitment to providing reliable, innovative, and high-quality solutions. With a foundation built on trust, integrity, trusted and dependable partner.</p>
        </div>
        <div className="flex flex-col items-center"> 
            <FaRegMoneyBillAlt size={60} className="text-blue-500"/>
            <h3 className="text-xl font-bold text-gray-500 my-4">Fast & easy financing</h3>
            <p className="text-center text-gray-500 w-9/12 lg:w-full">We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
        </div>
    </div>
    </div>
  )
}

export default WhyChooseUs
