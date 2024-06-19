const Farmers = () => {
  const farm = [
    {
      img: "./images/other/farmer1.jpg",
      name: "Sherri Horton",
      job: "Founder",
    },
    {
      img: "/images/other/farmer2.jpg",
      name: "Hector Stokes",
      job: "Farmer",
    },
    {
      img: "/images/other/farmer3.jpg",
      name: "Aliesha Preston",
      job: "Farmer",
    },
    {
      img: "/images/other/farmer4.jpg",
      name: "Eilyah Gould",
      job: "Farmer",
    },
  ];
  return (
    <div className="mb-4 ">
      <div className="">
        <p className="text-center text-bold  text-lightGreen ">Our Team</p>
        <h3 className="text-center text-bold  text-navBg mt-2 mb-4">
          We Are The Best Team
        </h3>
      </div>

      <div className="flex justify-evenly mb-4 ">
        {farm.map((f) => (
          <div key={f.id} className="">
            <img src={f.img} alt={f.name} className="w-40 h-72  rounded-md" />
            <p className="mt-2 mb-0 text-center text-bold">{f.name}</p>
            <p className="text-center mb-0">{f.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Farmers;
