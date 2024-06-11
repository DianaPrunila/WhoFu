import { Link } from "react-router-dom";

const Parallax = () => {
  const parallWriting = {
    fontWeight: "bold",
    fontSize: "text-sm",
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  return (
    <>
      {/* portiune cu poza mai mare */}
      {/* scris in cerc */}
      <div className=" bg-fixed bg-cover h-96 w-full mb-6 bg-[url(./images/other/parallax.jpg)]">
        <div className="flex relative flex-col items-end justify-center mr-24">
          <img
            src="./images/other/circle.png"
            alt="NANA"
            className=" h-72 w-72 mt-16"
          />

          <p className="flex flex-wrap w-2/4">
            Find WhoFu organic store in thousands of grocery stores nationwide.
          </p>

          <div className="but absolute mt-56 justify-start ">
            <Link href="./Cart" className="">
              <button
                className="p-2 rounded-xl  bg-navBg
                    hover:bg-lightGreen  active:bg-lightGreen text-white"
                style={parallWriting}
              >
                Find Us In Store
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallax;
