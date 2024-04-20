import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteDeleteUser } from "../../../services/apiService";
import { toast } from "react-toastify";
const ModalDeleteUser = (props) => {
  //   const [show, setShow] = useState(false);
  const { show, setShow, user, resetUserDelete, fetchData, page } = props;

  const handleClose = () => {
    setShow(false);
    resetUserDelete({});
  };

  const handleDelete = async () => {
    let response = await deleteDeleteUser(user.id);
    if (response && response.EC === 0) {
      toast.success("Delete user success");
      handleClose();
      fetchData(page);
      // setPage(1);
    }
    if (response && response.EC === 1) {
      toast.error(response.EM);
    }
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete user <b>{user.email}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
