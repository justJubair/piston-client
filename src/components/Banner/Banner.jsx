// import bannerVideo from "../../assets/bannerCars.mp4"
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <div>
     
      <div className="h-screen">
      {/* <video className="h-full w-full object-cover" src={bannerVideo} muted loop autoPlay></video> */}
      </div>
      <div className="h-screen w-full absolute top-0 left-0 bg-black/75">
      </div>
      <BannerContent/>
    </div>
  );
};

export default Banner;
