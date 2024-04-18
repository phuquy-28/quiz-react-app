import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
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
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Email</th>
                <th>Username</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <ModalCreateUser show={showModal} setShow={setShowModal} />
      </div>
    </div>
  );
};

export default ManageUser;
