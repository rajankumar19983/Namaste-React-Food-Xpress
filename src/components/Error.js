import { useRouteError } from "react-router-dom";
import hungry from "../assets/img/hunger.png"

const Error = () => {

  const err = useRouteError();

  return (
    <div className="error-component">
      <img className="hungry" src={hungry} alt="logo" />
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h2>{err.status + " : " + err.statusText}</h2>
    </div>
  );
}

export default Error;