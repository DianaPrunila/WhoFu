import TopBanner from "../parts/aboutParts/TopBanner";
import Form from "react-bootstrap/Form";
const Contact = () => {
  return (
    <div className="page">
      <TopBanner />
      <div className="content flex ">
        <div className="strawberries ">
          <img src="/images/other/capsuni.png" alt="capsuni" className=" " />
        </div>
        <div className="info w-2/3 flex-col flex">
          <div className="love w-11/12">
            <h4>We Love to Hear From You</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
            </p>
          </div>
          <div className="cols w-10/12 flex justify-between ">
            <div className="textLeft mr-3">
              <h5>OUR STORE</h5>
              <p>
                Box 565, Charlestown, Nevis, West
                <br />
                Indies,Caribbean
              </p>
              <h5>CONTACT INFORMATION</h5>
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
      </div>
      <div>
        <div className="formSpace w-2/3 justify-end">
          <h6>Leave A Message</h6>
          <div className="forms">
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  className="mb-3"
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
  );
};

export default Contact;
// <Form>
// <Form.Group
//   className="mb-3"
//   controlId="exampleForm.ControlInput1"
// >
//   <Form.Control type="text" placeholder="Your Name" />
//   <Form.Control type="email" placeholder="Email" />
//   <Form.Control type="text" placeholder="Subject" />

//   <Form.Control
//     className="mb-3"
//     as="textarea"
//     rows={3}
//     placeholder="Message"
//   />
// </Form.Group>
// </Form>
