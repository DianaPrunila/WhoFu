import aboutUs from "/images/other/aboutUs.png";
import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
const Contact = () => {
  return (
    <div className="page">
      <div className="TopBanner flex mb-5">
        <div className=" flex relative ">
          <h3 className="w-[300px] absolute sm:text-3xl md:text-3xl lg:text-5xl font-bold  text-navBg ml-9  sm:mt-3 mt-5  lg:pt-8 lg:pl-8">
            Contact
          </h3>
        </div>
        <img src={aboutUs} alt="Contact" className="w-full " />
      </div>

      <div className="content flex flex-wrap ">
        <div className="strawberries flex justify-center">
          <img src="/images/other/capsuni.png" alt="capsuni" className=" " />
        </div>
        <div className="info lg:w-2/3  flex-col flex sm:w-full md:w-full">
          <div className="w-full px-20">
            <div className="love w-full">
              <h4 className="text-navBg text-3xl">We Love to Hear From You</h4>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>
            </div>
            <div className="cols w-full flex   justify-between flex-col ">
              <div className="flex  flex-row  flex-wrap justify-between">
                <div className="textLeft mr-3 flex-col flex ">
                  <h5 className="text-navBg">OUR STORE</h5>
                  <p className="text-slate-600">
                    Box 565, Charlestown, Nevis, West
                    <br />
                    Indies,Caribbean
                  </p>
                  <h5 className="text-navBg">CONTACT INFORMATION</h5>
                  <p className="text-slate-600">
                    (844) 1800-3355 <br />
                    info@example.com
                  </p>
                </div>
                <div className="textRight">
                  <h6>OUR BUSINESS HOURS</h6>
                  <p className="text-slate-600">
                    Monday - Friday: <br />
                    8am - 4pm <br />
                    Saturday, Sunday:
                    <br /> 9am - 5pm
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="formSpace justify-end mt-10 mb-20">
                <h4 className="text-3xl mb-3 text-navBg">Leave A Message</h4>
                <div className="forms w-full">
                  <form>
                    <MDBRow className="mb-4">
                      <MDBCol>
                        <MDBInput id="form6Example1" label="Your Name" />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      type="email"
                      id="form6Example5"
                      label="Email"
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      type="tel"
                      id="form6Example6"
                      label="Subject"
                    />

                    <MDBInput
                      wrapperClass="mb-4"
                      textarea
                      id="form6Example7"
                      rows={9}
                      label="Message"
                    />

                    <button
                      className=" px-3 py-2  bg-lightGreen
                    hover:bg-navBg text-white  active:bg-lightGreen text-bold text-xl rounded-full"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
