import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import UserApi from "../api/user/user";

const MainLayout = ({ links }) => {
  const username = JSON.parse(localStorage.getItem("userData")).username;
  console.log(`username : ${username}`);
  const navigate = useNavigate();

  const handleLogout = () => {
    UserApi.logout().then((res) => {
      toast.error(res?.data.message || "User logged out successfully");
    });

    localStorage.removeItem("authenticated");
    localStorage.removeItem("userData");

    navigate("/login");
  };

  const logoutAction = {
    label: "Logout",
    action: handleLogout,
    type: "action",
    icon: (
      <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  };

  const [open, setOpen] = useState(true);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[100vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Logo />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              <SidebarLink link={logoutAction} />
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: username,
                href: "#",
                icon: (
                  <img
                    src="https://avatar.iran.liara.run/public"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Outlet />
    </div>
  );
};

export const Logo = () => {
  return (
    <Link
      to="#"
      className="max-w-[100%] flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <img src="/logo.png" alt="Logo Image" />
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      to="#"
      className="max-w-[80%] flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <img src="/logoIcon.png" alt="Logo icon" />
    </Link>
  );
};

export default MainLayout;
