import axios from "../utils/axiosCustomize";
const postCreateUser = (email, password, username, role, image) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("username", username);
  formData.append("role", role);
  formData.append("userImage", image);
  return axios.post("api/v1/participant", formData);
};

export { postCreateUser };
