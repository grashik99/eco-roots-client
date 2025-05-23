import { Link } from "react-router";
import errorImage from "../assets/404-error-page-templates.jpg"

const Error = () => {
  return (
    <Link to="/">
      <div><img src={errorImage} alt="errorImage" className="w-screen h-screen" /></div>
    </Link>
  );
};
export default Error;
