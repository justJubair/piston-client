import { useEffect } from "react";
import { useState } from "react";
import FeaturedCard from "./FeaturedCard";
import useTheme from "../../hooks/useTheme";
import { AnimatePresence, motion } from "framer-motion";
const FeaturedListings = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { theme } = useTheme();
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://piston-server-gh0fdb7cb-jubair-ahmeds-projects.vercel.app/products"
      );
      const loadedData = await res.json();
      setData(loadedData);
    };
    loadData();
  }, []);
  const framerProduct = data.find((product) => product._id === selectedId);
  
  return (
    <div className="relative lg:h-[1020px]">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className={`${
          theme && "text-white"
        } text-center mb-4 mt-24 text-4xl font-bold`}
      >
        Featured <span className="text-orange-800">Listings</span>
      </h2>
      <hr className="w-1/3 mx-auto border-b-2" />
      <div className="max-w-screen-lg mt-12 mx-auto grid gap-4 grid-cols-1 lg:grid-cols-2">
        {data.slice(4, 8).map((product) => (
          <FeaturedCard
            key={product._id}
            product={product}
            setSelectedId={setSelectedId}
          />
        ))}
        <div className="hidden lg:block absolute z-[100] top-1/2 md:top-1/3 md:left-[120px] lg:left-96">
          <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId}>
                 <motion.button onClick={() => setSelectedId(null)}>
          
                  <motion.div
                    
                  
                    data-aos="flip-left"
                    className=" relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border"
                  >
                    <motion.div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                      <motion.img
                        src={framerProduct.img}
                        className="w-full md:w-[500px] h-full object-cover"
                        alt="profile-picture"
                      />
                    </motion.div>
                    <motion.div className="p-6 text-center">
                      <motion.h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {framerProduct.name.slice(0, 20)}
                      </motion.h4>
                      <motion.p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-orange-800 to-orange-400 bg-clip-text">
                        Price: ${framerProduct.price}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                 
                   
               
                  </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    {selectedId && <div className="absolute h-full top-0 left-0 w-full bg-white/70 z-50">

</div>}
    </div>
  );
};

export default FeaturedListings;
