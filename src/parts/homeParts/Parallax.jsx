import { Link } from "react-router-dom";

const Parallax = () => {
  const parallWriting = {
    fontWeight: "bold",
    fontSize: "14px",
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  return (
    <>
      {/* portiune cu poza mai mare */}

      <div className=" bg-fixed bg-cover h-96 w-full mb-6 bg-[url(./images/other/parallax.jpg)]">
        <div className="flex relative flex-col items-center justify-center">
          <img
            src="./images/other/circle.png"
            alt="NANA"
            className=" h-64 w-64 mt-16"
          />
          <div className="absolute mt-56 ml-1">
            <Link href="./Cart" className="">
              <button
                className="p-2 rounded-xl  bg-navBg
                    hover:bg-lightGreen  active:bg-lightGreen text-white"
                style={parallWriting}
              >
                Find a Store
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallax;
