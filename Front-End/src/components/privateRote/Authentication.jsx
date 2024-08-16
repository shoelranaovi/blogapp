import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthenticationRote({ children }) {
  const User = useSelector((state) => state.user);
  const { user } = User;

  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      return navigate("/login");
    }

    if (user.role !== "Admin") {
      return navigate("/home");
    }
  }, [user, navigate]);

  return children;
}

export default AuthenticationRote;
