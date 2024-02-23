import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const tableHeaders = ["ID", "Email", "First Name", "Last Name", "Avatar"];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://reqres.in/api/users?page=1&per_page=6');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Render a loading indicator while data is being fetched
//   }

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
            <tr>
                {tableHeaders.map(item => (
                <th> key={item}</th>
                ))}
            </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td><img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
