import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";
const TableUser = (props) => {
  const [listUser, setListUser] = useState([
    { id: 1, username: "Nguyen Van A", email: "abc@gmail.com", role: "USER" },
    { id: 2, username: "Nguyen Van B", email: "abc@gmail.com", role: "USER" },
    { id: 3, username: "Nguyen Van C", email: "abc@gmail.com", role: "USER" },
    { id: 4, username: "Nguyen Van D", email: "abc@gmail.com", role: "USER" },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await getAllUser();
    if (response && response.EC === 0) {
      setListUser(response.DT);
    }
  };
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {listUser.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center">
                No data
              </td>
            </tr>
          )} */}
          {listUser.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="d-flex justify-content-around">
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-info">Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
