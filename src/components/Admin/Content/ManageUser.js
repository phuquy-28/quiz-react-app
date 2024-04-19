import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";
const ManageUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [listUser, setListUser] = useState([]);

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
    <div className="manager-user-container">
      <div className="title">Manage User</div>
      <div className="manager-user-content">
        <div className="btn-add-user">
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            <FcPlus />
            Add new User
          </button>
        </div>
        <div className="table-users-container">
          <TableUser listUser={listUser} />
        </div>
        <ModalCreateUser
          show={showModal}
          setShow={setShowModal}
          fetchData={fetchData}
        />
      </div>
    </div>
  );
};

export default ManageUser;
