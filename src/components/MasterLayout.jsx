import { Link, Outlet } from "react-router-dom";

export default function MasterLayout() {
  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/user">User</Link>
      </aside>
      <div className="content">
        <header>
          <div>Header</div>
          <div>User Info</div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
