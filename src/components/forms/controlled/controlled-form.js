import React, { useState } from "react";
import ProfileComponent from "../../profile/profileComponent";

function ControlledForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [usernameError] = useState(false);
  const [passwordError] = useState(false);
  const [userData] = useState({});
  const [list] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);

    // if (!usernameError && !passwordError) {
    //   sucesssSubmit(username, password);
    // }
  };

  // const userNameHandler = (event) => {
  //   const userEnteredValue = event.target.value;
  //   setUserName(userEnteredValue);
  //   console.log(userEnteredValue, "Username entering....");
  //   if (validate(userEnteredValue)) {
  //     setUserNameError(true);
  //   } else {
  //     setUserNameError(false);
  //   }
  // };
  // const passwordHandler = (event) => {
  //   const userEnteredPassword = event.target.value;
  //   setPassword(userEnteredPassword);
  //   console.log(userEnteredPassword, "Password entering....");
  //   if (validate(userEnteredPassword)) {
  //     setPasswordError(true);
  //   } else {
  //     setPasswordError(false);
  //   }
  // };

  const formHandler = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    const updatedFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(updatedFormData);
  };

  return (
    <>
      {Object.keys(userData).length > 0 ? (
        <>
          <h2>
            Wellcome {userData.firstName} {userData.lastName}
            <ProfileComponent />
          </h2>
        </>
      ) : (
        <form onSubmit={submitHandler} style={{ maxWidth: 500 }}>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="username"
              value={formData.username}
              onChange={formHandler}
            />
            {usernameError && (
              <span style={{ color: "red" }}>
                Invalid username please enter less than 15 characters
              </span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={formHandler}
            />
            {passwordError && (
              <span style={{ color: "red" }}>
                Invalid password please enter less than 15 characters
              </span>
            )}
          </div>

          {/* {error && <span style={{ color: "red" }}>{error}</span>} */}
          <div className="form-check mb-3">
            {/* <label className="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember" />{" "}
        Remember me
      </label> */}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
      <h2>List of register users</h2>
      <ol>
        {list.map((each) => (
          <li>{each}</li>
        ))}
      </ol>
    </>
  );
}

export default ControlledForm;
