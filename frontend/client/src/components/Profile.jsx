import { useEffect, useState } from "react";
import { getProfile } from "../services/api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await getProfile();
        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="profile-page">
      <h1>Welcome, {user.username} 👋</h1>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Address: {user.address}</p>
    </div>
  );
}
