import axios from "axios";

// constants
import { BASE_URL } from "../../constants";

const loginUser = (_email, _password) => {
  const data = {
    emailId: _email,
    password: _password,
    deviceToken: "",
    deviceType: "web",
    mobileContact: "",
    appname: "eventmoon",
    Country: "",
    State: "",
    City: "",
  };

  const response = axios({
    method: "POST",
    url: `${BASE_URL}/LoginByEmail`,
    data: data,
    headers: { "Content-Type": "application/json" },
  });

  return response;
};

export default loginUser;