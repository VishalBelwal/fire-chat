import { Chat } from "./components/chat/Chat";
import LoginPage from "./components/login/LoginPage";
import Notification from "./components/notifications/Notification";
import { SideBar } from "./components/sidebar/SideBar";
import { UserDetails } from "./components/userDetails/UserDetails";
import "./index.css";

const App = () => {
  const user = true;
  return (
    <div className="container1">
      {user ? (
        <>
          <SideBar />
          <Chat />
          <UserDetails />
        </>
      ) : (
        <LoginPage />
      )}

      <Notification />
    </div>
  );
};

export default App;
