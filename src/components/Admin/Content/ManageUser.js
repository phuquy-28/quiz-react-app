import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";
const ManageUser = () => {
  const [showModal, setShowModal] = useState(false);
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
          <TableUser /> 
        </div>
        <ModalCreateUser show={showModal} setShow={setShowModal} />
      </div>
    </div>
  );
};

export default ManageUser;
