import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Rajan Choudhary",
    email: "somemail@gmail.com"
  }
});

export default UserContext;