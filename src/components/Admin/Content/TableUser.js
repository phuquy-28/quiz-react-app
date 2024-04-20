import { set } from "lodash";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const TableUser = (props) => {
  const {
    listUser,
    handleClickUpdate,
    handleClickDelete,
    totalPage,
    fetchData,
    page,
    setPage,
  } = props;
  // const [pageCount, setPageCount] = useState(0);
  const handlePageClick = (event) => {
    setPage(+event.selected + 1);
    fetchData(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
    // setItemOffset(newOffset);
  };
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
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
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="d-flex justify-content-around">
                <button
                  className="btn btn-info"
                  onClick={() => handleClickUpdate(user)}
                >
                  Detail
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClickUpdate(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleClickDelete(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <ReactPaginate
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={totalPage}
          previousLabel="Prev"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
      </div>
    </>
  );
};

export default TableUser;
