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
      <div className="bg-fixed bg-cover h-full w-full mb-6 bg-[url(./images/other/parallax.jpg)]">
        <div className="h-96 w-64">
          <div className="flex justify-start items-end">
            <img src="./images/other/circle.png" alt="NANA" className="" />
            <a href="./Cart">
              <button
                className="  p-2 rounded-xl  bg-navBg
                    hover:bg-lightGreen  active:bg-lightGreen text-white"
                style={parallWriting}
              >
                Find a Store
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallax;
