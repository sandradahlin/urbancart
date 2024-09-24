import useAuthContext from "../context/useAuthContext";

export default function Header() {
  const { logoutUser, setToken } = useAuthContext();

  return (
    <div>
      Headers
      <button onClick={logoutUser}>logout</button>
    </div>
  );
}
