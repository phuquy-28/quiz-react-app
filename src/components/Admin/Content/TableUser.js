
const TableUser = (props) => {
  const { listUser } = props;
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
