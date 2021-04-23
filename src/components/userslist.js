import { useEffect,useState } from "react";
const Userslist = () => {
//   const users = [
//     { id: 0, name: "Riyas", age: 31 },
//     { id: 1, name: "ashi", age: 30 },
//   ];

  const [users, setUsers] = useState([])

  const getUsers= ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setUsers(users));
  }

  useEffect(() => {
      
    getUsers();
  }, [])

  return (
    <>
      <table style={{ width: "100" }}>
        <tr>
          <th>Firstname</th>
          <th>id</th>
          <th>Age</th>
          <th>email</th>
        </tr>
        {users.map((user) => {
          return (
            <>
              <tr>
                <td>{user.name}</td>
                <td>{user.id}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};
export default Userslist;
