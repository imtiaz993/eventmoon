import axios from "axios";

// constants
import { BASE_URL } from "../../constants";

const registerUser = (_userData) => {
  const data = {
    emailId: _userData.email,
    password: _userData.password,
    deviceToken: "",
    deviceType: "",
    mobileContact: _userData?.contact || "",
    refCode: "",
    isTermsChecked: _userData.checked ? "true" : "false",
    Country: _userData?.country || "",
    State: _userData?.state || "",
    City: _userData?.city || "",
  };

  const response = axios({
    method: "POST",
    url: `${BASE_URL}/RegisterWithEmail`,
    data: data,
    headers: { "Content-Type": "application/json" },
  });

  return response;
};

export default registerUser;
