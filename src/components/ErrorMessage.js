import { Redirect } from "react-router-dom";
import { useState } from "react";

const ErrorMessage = () => {
  const [redirect, setRedirect] = useState("/");

  return <Redirect to={redirect} />;
};

export default ErrorMessage;
