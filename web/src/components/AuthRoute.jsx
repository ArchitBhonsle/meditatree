import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

export default function AuthRoute({ component: Component, rest }) {
  const { loggedOut } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        !loggedOut ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
