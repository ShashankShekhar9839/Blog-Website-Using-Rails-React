import React from "react";
import Profile from "../../components/profile/Profile";
import { useAuth } from "../../context/AuthContext";

function Home() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <h2>Share Your Feelings with your Friends! </h2>
      <Profile name={user.username} />
    </div>
  );
}

export default Home;
