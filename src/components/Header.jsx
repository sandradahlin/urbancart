import useAuthContext from "../context/useAuthContext";

export default function Header() {
  const { logoutUser, userInfo, isAuthenticated } = useAuthContext();

  return (
    <div>
      Headers
      <button onClick={logoutUser}>logout</button>
      {isAuthenticated && <p>{userInfo?.username}</p>}
    </div>
  );
}
