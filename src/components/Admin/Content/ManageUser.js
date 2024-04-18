import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
const ManageUser = () => {
  return (
    <div className="manager-user-container">
      <div className="title">Manage User</div>
      <div className="manager-user-content">
        <div>
          <button className="btn btn-primary">Manage User</button>
        </div>
        <div>
          <table>table</table>
        </div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUser;
