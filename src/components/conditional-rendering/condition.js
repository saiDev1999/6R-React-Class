import CustomList from "../customList/custom-list";

const instructions = [
  "Switch on the stove",
  "Take a cooker",
  "Add Oil",
  "Fry onions",
  "Add spices",
  "Cook for 2 mins",
  "Add Rice",
  "Add water and cook for 20 mins",
  "Eat the biryani",
];

const ConditionalRendering = () => {
  const isLogin = true;
  const isAdmin = false;
  const greeting = true;
  const subscribers = 0;

  return (
    <>
      {isLogin ? (
        <>
          {isAdmin ? (
            <>
              <h2>Welcome Admin</h2>
              <CustomList list={instructions} />
            </>
          ) : (
            <>
              <h2>Welcome user</h2>

              <CustomList list={instructions} />
            </>
          )}
          {greeting && <h2>Thanks for login, Explore the content</h2>}
          {<h2>Subscribers count {subscribers}</h2>}
        </>
      ) : (
        <>
          <h3>Please login to access the instructions to prepare biryani</h3>
        </>
      )}
    </>
  );
};
export default ConditionalRendering;
