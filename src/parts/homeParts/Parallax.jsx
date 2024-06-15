import { Link } from "react-router-dom";

const Parallax = () => {
  const parallWriting = {
    fontWeight: "bold",
    fontSize: "text-sm",
    fontFamily: "sans-serif",
    textAlign: "center",
    textDecorationLine: "none",
  };
  return (
    <>
      <div className=" bg-fixed bg-cover h-96 w-full mb-6 bg-[url(./images/other/parallax.jpg)]">
        <div className="flex  relative justify-end items-center mr-24">
          <img
            src="./images/other/circle.png"
            alt="NANA"
            className=" h-72 w-72 mt-16 "
          />

          <p className="flex flex-wrap w-48 absolute text-center top-[40%] right-[50px]">
            Find WhoFu organic store in thousands of grocery stores nationwide.
          </p>
          <Link
            href="./Cart"
            className="p-2 rounded-xl  bg-navBg
                    hover:bg-lightGreen  active:bg-lightGreen text-white absolute top-[70%] right-20"
            style={parallWriting}
          >
            Find Us In Store
          </Link>
        </div>
      </div>
    </>
  );
};

export default Parallax;
