import UserProfile from "./UserProfile";
import UserStats from "./UserStats";
import Settings from "./Settings";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <UserProfile />
      <UserStats />
      <Settings />
    </div>
  );
}

export default Dashboard;
