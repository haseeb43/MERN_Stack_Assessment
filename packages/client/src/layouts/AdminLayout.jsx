import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <aside>
        <nav>
          <ul>
            <li>
              <Link to="/admin">Admin Dashboard</Link>
              <Link to="/admin/create-post">Create Post</Link>
              <Link to="/admin/update-post">Update Post</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
