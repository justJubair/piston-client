import { Link } from "react-router-dom";

const BannerContent = () => {
  return (
    <div className="absolute top-32 left-5 lg:top-52 lg:left-10">
      <h1 className="text-3xl  md:leading-relaxed font-extrabold text-white md:text-5xl">
        Where Every Mile <br />
        Feels Like a <span className="text-orange-800">Victory</span> Lap!
      </h1>
      <Link to="/login">
        <button className="btn-sm btn md:btn bg-orange-800 text-white md:bg-orange-800 border-none md:text-white mt-4 hover:text-black">
          Get started
        </button>
      </Link>{" "}
    </div>
  );
};

export default BannerContent;
