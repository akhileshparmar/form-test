import { useEffect, useState } from "react";
import FormBuilder from "./components/FormBuilder";
import Users from "./components/Users";

function App() {
  const [allUsers, setUsers] = useState([]);

  const getusers = async () => {
    const response = await fetch("http://localhost:8000/users");

    const users = await response.json();

    setUsers(users.users);
  };

  useEffect(() => {
    getusers();
  }, []);

  return (
    <>
      <div className="h-screen bg-gray-100">
        <FormBuilder getusers={getusers} />

        <Users allUsers={allUsers} />
      </div>
    </>
  );
}

export default App;
