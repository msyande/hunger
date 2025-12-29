import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <h2>This is Hunger Web Page</h2>
      {/* <User name={"Mahima Yande(function)"} />  */}
      <UserClass name={"Mahima Yande(class)"} location={"Mumbai class"} />
    </div>
  );
};

export default About;
