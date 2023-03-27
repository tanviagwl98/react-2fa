import React from "react";
import Login from "./Login";

export default function App({ user }) {
  if (!user) return <Login />;

  return (
    <div>
      Hey, {user.username}!
      <a href="/logout">Logout</a>
    </div>
  );
}
