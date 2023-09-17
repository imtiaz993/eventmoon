import axios from "axios";

// constants
import { BASE_URL } from "utils/constants";

export const forgotPassword = async (_email) => {
  const data = {
    emailId: _email,
  };

  const { data: responseData } = await axios({
    method: "POST",
    url: `${BASE_URL}/ForgetPassword`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  });

  return responseData;
};
