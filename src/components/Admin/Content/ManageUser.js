import ModalCreateUser from "./ModalCreateUser";

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
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
