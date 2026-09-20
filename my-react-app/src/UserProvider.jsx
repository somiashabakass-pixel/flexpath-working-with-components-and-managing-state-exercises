import { useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }) {
  const [user] = useState({
    name: "Somaia",
    age: 28,
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
export default UserProvider;
