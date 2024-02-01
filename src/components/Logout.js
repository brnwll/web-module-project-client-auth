import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    axiosWithAuth()
      .post("/logout")
      .then(() => {
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  }, [navigate]);
  return null;
}

export default Logout;
