import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handleSubmit = e => {
    e.preventDefault()

    if (newName.trim()) {
      updateUser(newName)
      setNewName("");
    }
  }

  return (
    <div>
      <h1>Update User Name</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          placeholder="Enter new username"
        />
      <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default UpdateUser