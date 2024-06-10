import { CiWheat } from "react-icons/ci";
import { LuCitrus } from "react-icons/lu";
import { BsBasket } from "react-icons/bs";
import { PiFarm } from "react-icons/pi";
import { SiCodefresh } from "react-icons/si";
import { PiFlowerLotus } from "react-icons/pi";

const Quality = () => {
  const qualiL = [
    {
      id: "1",
      title: "Homemade",
      text: "Made with passion by 300+ curators across the country.",
      icon: <CiWheat />,
      color: "#e4d98b",
    },
    {
      id: "2",
      title: "100% Natural",
      text: "Eat local, consume local, closer to nature.",
      icon: <LuCitrus />,
      color: "#e4c28b",
    },
    {
      id: "3",
      title: "Curated Products",
      text: "Eat local, consume local, closer to nature.",
      icon: <BsBasket />,
      color: "#a9ebd9",
    },
  ];
  const qualiR = [
    {
      id: "4",
      title: "Modern Farm",
      text: "Made with passion by 300+ curators across the country.",
      icon: <PiFarm />,
      color: "#b3cde3",
    },
    {
      id: "5",
      title: "Alway Fresh",
      text: "Eat local, consume local, closer to nature.",
      icon: <SiCodefresh />,
      color: "#cbb1e7",
    },
    {
      id: "6",
      title: "Sustainable",
      text: "Chemical free consumption IN and ON your body.",
      icon: <PiFlowerLotus />,
      color: "#e1afbf",
    },
  ];
  return (
    <>
      <div className="mb-4">
        <div className=" text-lightGreen  flex flex-col ">
          <p className=" text- text-bold mb-2 text-center ">Our Products</p>
          <h3 className=" text-navBg mb-2 text-bold text-center">
            Highest Quality
          </h3>
        </div>
        <div className="flex justify-around ">
          <div className="left w-[33%]">
            {qualiL.map((q) => (
              <div className="flex items-center w-full">
                <span
                  style={{ background: `${q.color}` }}
                  className=" rounded-full w-[50px] h-[50px] flex justify-center items-center mr-4"
                >
                  {q.icon}
                </span>
                <div>
                  <h6 className="text-bold  text-navBg mt-2 mb-2 flex justify-start ">
                    {q.title}
                  </h6>
                  <p className="w-[300px]">{q.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className=" text-center  text-navBg w-[33%] flex justify-center flex-col">
            <div className="flex justify-center w-full">
              <img
                src="/images/other/center-complete.png"
                className="h-80 w-80"
                alt="center"
              />
            </div>
          </div>

          <div className="left w-[33%]">
            {qualiR.map((q) => (
              <div className="flex items-center w-full">
                <span
                  style={{ background: `${q.color}` }}
                  className=" rounded-full w-[50px] h-[50px] flex justify-center items-center mr-4"
                >
                  {q.icon}
                </span>
                <div>
                  <h6 className="text-bold  text-navBg mt-2 mb-2 flex justify-start">
                    {q.title}
                  </h6>
                  <p className="w-[300px]">{q.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quality;
