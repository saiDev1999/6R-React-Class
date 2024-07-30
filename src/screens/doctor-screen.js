import React from "react";
import { Link, Outlet } from "react-router-dom";

function DoctorsScreen() {
  return (
    <div>
      <h3>List of doctors</h3>
      <Link to={"new"}>New doctors</Link>
      <Link to={"old"}>Old doctors</Link>
      <Outlet />
    </div>
  );
}

export default DoctorsScreen;

export const NewDoctors = () => {
  return (
    <>
      <h3>List of new doctors</h3>
    </>
  );
};

export const OldDoctors = () => {
  return (
    <>
      <h3>List of Old doctors</h3>
    </>
  );
};
