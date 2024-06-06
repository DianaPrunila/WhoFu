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
      <div className="bg-fixed bg-cover h-5/6 mb-6 w-full bg-[url(./images/other/parallax.jpg)]">
        <div className="h-96 w-64">
          <div>
            <img
              src="./images/other/findUs.png"
              alt="NANA"
              className="d-flex justify-end"
            />
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
