import { isDisabled } from "@testing-library/user-event/dist/utils/misc/isDisabled";
import React, { useEffect, useState } from "react";
import "./Form.scss";
import View from "./View";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("user");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Form = () => {
  // const initial = { name: "", selector: "", check: false };
  const [user, setUser] = useState(getDatafromLS());
  const [name, setName] = useState("");
  const [selector, setSelector] = useState("");
  const [btn, setBtn] = useState(true);

  // const handleInput = (e) => {
  //   const { name, value} = e.target;
  //   console.log(user);

  //   setUser({ ...user, [name]: value });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, selector);
    let newUser = {
      name,
      selector,
    };
    setUser([...user, newUser]);
    setName("");
    setSelector("");
  };

  const checkHandler = (e) => {
    if (e.target.checked) {
      setBtn(!btn);
    } else {
      setBtn(!btn);
    }
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // delete book from LS
  // const deleteUser = (id) => {
  //   const deleteUser = user.filter((element, index) => {
  //     return element.id !== id;
  //   });
  //   setUser(deleteUser);
  // };

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 form">
            <form class="needs-validation" onSubmit={handleSubmit}>
              <div class="form-group was-validated">
                <label class="form-label" for="name">
                  Name
                </label>
                <input
                  class="form-control"
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div class="invalid-feedback">Enter your Name</div>
              </div>
              <div class="form-group was-validated">
                <label class="form-label" for="text">
                  Selectors
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="selector"
                  required
                  value={selector}
                  onChange={(e) => setSelector(e.target.value)}
                >
                  <option></option>
                  <option>Manufacturing</option>
                  <option>Construction materials</option>
                  <option>Electronics and Optics</option>
                  <optio>Food and Beverage</optio>
                  <option>Bakery &amp; confectionery products</option>
                  <option>Beverages</option>
                  <option>Fish &amp; fish products </option>
                  <option>Meat &amp; meat products</option>
                  <option>Milk &amp; dairy products </option>
                  <option>Other</option>
                  <option>Sweets &amp; snack food</option>
                  <option>Furniture</option>
                  <option>Bathroom/sauna </option>
                  <option>Bedroom</option>
                  <option>Children’s room </option>
                  <option>Kitchen </option>
                  <option>Living room </option>
                  <option>Office</option>
                  <option>Other (Furniture)</option>
                  <option>Outdoor </option>
                  <option>Project furniture</option>
                  <option>Machinery</option>
                  <option>Machinery components</option>
                  <option>Machinery equipment/tools</option>
                  <option>Manufacture of machinery </option>
                  <option>Maritime</option>
                  <option>Aluminium and steel workboats </option>
                  <option>Boat/Yacht building</option>
                  <option>Ship repair and conversion</option>
                  <option>Metal structures</option>
                  <option>Other</option>
                  <option>Repair and maintenance service</option>
                  <option>Metalworking</option>
                  <option>Construction of metal structures</option>
                  <option>Houses and buildings</option>
                  <option>Metal products</option>
                  <option>Metal works</option>
                  <option>CNC-machining</option>
                  <option>Forgings, Fasteners </option>
                  <option>Gas, Plasma, Laser cutting</option>
                  <option>MIG, TIG, Aluminum welding</option>
                  <optio>Plastic and Rubber</optio>
                  <option>Packaging</option>
                  <option>Plastic goods</option>
                  <option>Plastic processing technology</option>
                  <option>Blowing</option>
                  <option>Moulding</option>
                  <option>Plastics welding and processing</option>
                  <option>Plastic profiles</option>
                  <optio>Printing </optio>
                  <option>Advertising</option>
                  <option>Book/Periodicals printing</option>
                  <option>Labelling and packaging printing</option>
                  <option>Textile and Clothing</option>
                  <option>Clothing</option>
                  <option>Textile</option>
                  <option>Wood</option>
                  <option>Other (Wood)</option>
                  <option>Wooden building materials</option>
                  <option>Wooden houses</option>
                  <option>Other</option>
                  <option>Creative industries</option>
                  <option>Energy technology</option>
                  <option>Environment</option>
                  <option>Service</option>
                  <option>Business services</option>
                  <option>Engineering</option>
                  <option>Information Technology and Telecommunications</option>
                  <option>Data processing, Web portals, E-marketing</option>
                  <option>Programming, Consultancy</option>
                  <option>Software, Hardware</option>
                  <option>Telecommunications</option>
                  <option>Tourism</option>
                  <option>Translation services</option>
                  <option>Transport and Logistics</option>
                  <option>Air</option>
                  <option>Rail</option>
                  <option>Road</option>
                  <option>Water</option>
                </select>
              </div>
              <div class="form-group form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="check"
                  onChange={(e) => checkHandler(e)}
                />
                <label class="form-check-label" for="check">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                class="btn btn-lg w-100 btn-success"
                disabled={btn}
              >
                Save
              </button>
            </form>
          </div>
          <div class="col-md-6">
            {user.length > 0 && (
              <>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Selectors</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View user={user} />
                  </tbody>
                </table>
                <button
                  className="btn btn-danger btn-md"
                  onClick={() => setUser([])}
                >
                  Remove All
                </button>
              </>
            )}
            {user.length < 1 && (
              <div className="noUser">
                <p>No user are added</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
