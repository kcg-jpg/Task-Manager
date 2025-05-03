import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { getUsers } from '../api/users'; // This supports both usage types now

const Users = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [tokenlessUsers, setTokenlessUsers] = useState([]);
  const [error, setError] = useState('');

  // Original method (uses user.token)
  useEffect(() => {
    if (user?.token) {
      getUsers(user.token)
        .then(setUsers)
        .catch(console.error);
    }
  }, [user]);

  //  Additional example usage without passing token manually
  useEffect(() => {
    getUsers()
      .then(setTokenlessUsers)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>All Users (With Token)</h1>
      {users.map(u => (
        <div key={u._id}>
          <p>Name: {u.first_name} {u.last_name}</p>
          <p>Email: {u.email}</p>
        </div>
      ))}

      <h2>All Users (Without Explicit Token)</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {tokenlessUsers.map(user => (
        <div key={user._id}>
          <p>Username: {user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
