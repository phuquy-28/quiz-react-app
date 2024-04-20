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

const getAllUser = () => {
  return axios.get("api/v1/participant/all");
};

const getUserWithPage = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const putUpdateUser = (id, username, role, image) => {
  const formData = new FormData();
  formData.append("id", id);
  formData.append("username", username);
  formData.append("role", role);
  formData.append("userImage", image);
  return axios.put("api/v1/participant", formData);
};

const deleteDeleteUser = (id) => {
  const params = new URLSearchParams();
  params.append("id", id);
  return axios.delete("api/v1/participant", {
    data: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export {
  postCreateUser,
  getAllUser,
  getUserWithPage,
  putUpdateUser,
  deleteDeleteUser,
};
