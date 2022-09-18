import AuthContext from "./context";
import { useContext } from "react";
import jwtDecode from "jwt-decode";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (token) => {
    const user = jwtDecode(token);
    setUser(user);
    authStorage.storeToken(token);
  };

  const logout = async () => {
    setUser(null);
    await authStorage.removeToken();
  };

  return { user, login, logout };
};
