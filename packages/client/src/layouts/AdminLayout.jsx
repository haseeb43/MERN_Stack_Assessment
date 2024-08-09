import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/admin">Admin Dashboard</Link>
              <Link to="/admin/create-post">Create Post</Link>
              <Link to="/admin/update-post">Update Post</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
