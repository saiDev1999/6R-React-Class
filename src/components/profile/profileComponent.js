import Heading1, { Heading2 } from "../headings/heading";
const ProfileComponent = () => {
  const profileDetails = {
    name: "kumar",
    mobile: 9090,
    salary: 20000,
  };
  const { name, mobile, salary } = profileDetails;
  return (
    <div>
      <h2>My name is {name}</h2>
      <h2>My salary is {salary}</h2>
      <h2>My mobile number is {mobile}</h2>
      {console.log("hii")}
      <Heading1 />
      <Heading2 />
    </div>
  );
};
export default ProfileComponent;
