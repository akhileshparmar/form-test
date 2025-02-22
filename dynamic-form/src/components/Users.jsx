const Users = ({ allUsers = [] }) => {
  return (
    <>
      <table className="table-auto" border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((value) => (
            <tr key={value._id}>
              <td>{value.name}</td>
              <td>{value.email}</td>

              <td>{value.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
