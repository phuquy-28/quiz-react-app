import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser, getUserWithPage } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import { set } from "lodash";
const ManageUser = () => {
  const LIMIT_USER = 6;
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [listUser, setListUser] = useState([]);
  const [userUpdate, setUserUpdate] = useState({});
  const [userDelete, setUserDelete] = useState({});
  useEffect(() => {
    fetchData(page);
  }, []);

  const fetchData = async (page) => {
    let response = await getUserWithPage(page, LIMIT_USER);
    if (response && response.EC === 0) {
      setListUser(response.DT.users);
      setTotalPage(response.DT.totalPages);
      console.log(response.DT.users);
    }
  };

  const handleClickUpdate = (user) => {
    setShowModalUpdate(true);
    setUserUpdate(user);
  };

  const handleClickDelete = (user) => {
    setShowModalDelete(true);
    setUserDelete(user);
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
            handleClickDelete={handleClickDelete}
            fetchData={fetchData}
            totalPage={totalPage}
            page={page}
            setPage={setPage}
          />
        </div>
        <ModalCreateUser
          show={showModal}
          setShow={setShowModal}
          fetchData={fetchData}
          page={page}
          setPage={setPage}
        />
        <ModalUpdateUser
          show={showModalUpdate}
          setShow={setShowModalUpdate}
          userUpdate={userUpdate}
          fetchData={fetchData}
          resetUserUpdate={setUserUpdate}
          page={page}
        />
        <ModalDeleteUser
          show={showModalDelete}
          setShow={setShowModalDelete}
          user={userDelete}
          fetchData={fetchData}
          resetUserDelete={setUserDelete}
          page={page}
        />
      </div>
    </div>
  );
};

export default ManageUser;
