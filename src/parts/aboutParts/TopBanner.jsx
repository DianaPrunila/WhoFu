import aboutUs from "/images/other/aboutUs.png";
import "bootstrap/dist/css/bootstrap.min.css";

const TopBanner = () => {
  return (
    <div className=" flex mb-5">
      <div className=" flex relative ">
        <h3 className="w-[300px] absolute sm:text-3xl md:text-3xl lg:text-5xl font-bold  text-navBg ml-9  sm:mt-3 mt-5  lg:pt-8 lg:pl-8">
          About us
        </h3>
      </div>
      <img src={aboutUs} alt="About" className="w-full " />
    </div>
  );
};

export default TopBanner;
