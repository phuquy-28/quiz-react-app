import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
const ManageUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [listUser, setListUser] = useState([]);
  const [userUpdate, setUserUpdate] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await getAllUser();
    if (response && response.EC === 0) {
      setListUser(response.DT);
    }
  };

  const handleClickUpdate = (user) => {
    setShowModalUpdate(true);
    setUserUpdate(user);
    console.log(user);
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
          <TableUser
            listUser={listUser}
            handleClickUpdate={handleClickUpdate}
          />
        </div>
        <ModalCreateUser
          show={showModal}
          setShow={setShowModal}
          fetchData={fetchData}
        />
        <ModalUpdateUser
          show={showModalUpdate}
          setShow={setShowModalUpdate}
          userUpdate={userUpdate}
        />
      </div>
    </div>
  );
};

export default ManageUser;
