import Container from "react-bootstrap/Container";

function Categories() {
  const categWriting = {
    fontWeight: "bold",
    fontSize: "14px",
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  const categ = [
    {
      id: 1,
      name: "Vegetables",
      source: "/images/foods/Vegetables.jpg",
      path: "./Vegetables",
    },
    {
      id: 2,
      name: "Grains",
      source: "/images/foods/Grains.jpg",
      path: "./Grains",
    },
    {
      id: 3,
      name: "Pasta & Noodles",
      source: "/images/foods/PastaNoodles.jpg",
      path: "./Pasta",
    },
    {
      id: 4,
      name: "Fruits",
      source: "/images/foods/Fruits.jpg",
      path: "./Fruits",
    },
    {
      id: 5,
      name: "Nuts & Seeds",
      source: "/images/foods/NutsSeeds.webp",
      path: "./NutsSeeds",
    },
    {
      id: 6,
      name: "Legumes",
      source: "/images/foods/Legumes.jpg",
      path: "./Legumes",
    },
    {
      id: 7,
      name: "Fermented foods",
      source: "/images/foods/Fermented.jpg",
      path: "./Fermented",
    },
  ];
  return (
    <Container className="p-6 mb-4">
      <div
        className="d-flex p-0 flex-wrap justify-center  gap-x-8	gap-y-3.5"
        style={{ backGround: "white" }}
      >
        {categ.map((c) => (
          <div className="img">
            <a href={c.path}>
              <Container className="p-0 ">
                <figure className="position-relative ">
                  <img
                    src={c.source}
                    alt={c.name}
                    className=" img-categories img-fluid ;"
                  />
                  <button
                    className="bottom-right p-2 rounded-xl bg-slate-50
                    hover:bg-lightGreen hover:text-white text-navBg active:bg-lightGreen"
                    style={categWriting}
                  >
                    {c.name}
                  </button>
                </figure>
              </Container>
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Categories;
