import TopBanner from "../parts/aboutParts/TopBanner";
import Form from "react-bootstrap/Form";
const Contact = () => {
  return (
    <div className="page">
      <TopBanner />
      <div className="content flex ">
        <div className="strawberries  ">
          <img src="/images/other/capsuni.png" alt="capsuni" className=" " />
        </div>
        <div className="info w-2/3 flex-col flex">
          <div className="w-full px-20">
            <div className="love w-full">
              <h4 className="text-navBg text-3xl">We Love to Hear From You</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>
            </div>
            <div className="cols w-full flex justify-between flex-col ">
              <div className="flex  max-md:flex-wrap flex-row justify-between">
                <div className="textLeft mr-3 ">
                  <h5 className="text-navBg">OUR STORE</h5>
                  <p>
                    Box 565, Charlestown, Nevis, West
                    <br />
                    Indies,Caribbean
                  </p>
                  <h5 className="text-navBg">CONTACT INFORMATION</h5>
                  <p>
                    (844) 1800-3355 <br />
                    info@example.com
                  </p>
                </div>
                <div className="textRight">
                  <h6>OUR BUSINESS HOURS</h6>
                  <p>
                    Monday - Friday: <br />
                    8am - 4pm <br />
                    Saturday, Sunday:
                    <br /> 9am - 5pm
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="formSpace justify-end my-20">
                <h4 className="text-3xl mb-3 text-navBg">Leave A Message</h4>
                <div className="forms w-full">
                  <Form className="w-full">
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Control
                        className="mb-3 w-full focus:outline-none"
                        type="text"
                        placeholder="Your Name"
                      />
                      <Form.Control
                        className="mb-3"
                        type="email"
                        placeholder="Email"
                      />
                      <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Subject"
                      />
                      <Form.Control
                        className="mb-3"
                        as="textarea"
                        rows={3}
                        placeholder="Message"
                      />
                    </Form.Group>
                  </Form>
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
