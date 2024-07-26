import React, { useRef, useState } from "react";

function UncontrolledForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({});
  const submitHandler = (event) => {
    event.preventDefault();
    const emailEntered = emailRef.current.value;
    const passwordEntered = passwordRef.current.value;
    console.log(emailEntered, passwordEntered, "User entered details");
    if (emailEntered.length < 15 && passwordEntered.length < 15) {
      setError(null);
      //allow user to submit

      sucesssSubmit(emailEntered, passwordEntered);
    } else {
      setError("Please entered <15 characters for email and password");
      // throw the error
    }
  };

  const sucesssSubmit = async (username, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const finalResponse = await response.json();

      if (finalResponse.message) {
        alert(finalResponse.message);
      } else {
        console.log(finalResponse, "final response");
        setUserData(finalResponse);
      }
    } catch (err) {}
  };

  return (
    <>
      {Object.keys(userData).length > 0 ? (
        <>
          <h2>Wellcome {userData.firstName}</h2>
        </>
      ) : (
        <form onSubmit={submitHandler}>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              ref={emailRef}
            />
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
              name="pswd"
              ref={passwordRef}
            />
          </div>

          {error && <span style={{ color: "red" }}>{error}</span>}
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
    </>
  );
}

export default UncontrolledForm;
