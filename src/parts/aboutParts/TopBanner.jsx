import aboutUs from "/images/other/aboutUs.png";
import "bootstrap/dist/css/bootstrap.min.css";

const TopBanner = () => {
  return (
    <div className=" justify-center flex mb-5">
      <div className=" flex relative ">
        <p className="w-[300px] absolute text-5xl font-bold  text-navBg ml-9 mt-5 lg:text-5xl lg:pt-8 lg:pl-8">
          About us
        </p>
      </div>
      <img src={aboutUs} alt="About" className="w-full " />
    </div>
  );
};

export default TopBanner;
