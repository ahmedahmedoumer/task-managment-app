import { BarChartOutlined, GroupOutlined, InfoCircleOutlined, ProjectOutlined, SettingOutlined, UserOutlined, UsergroupAddOutlined, WindowsOutlined } from "@ant-design/icons";

export const URLst='https://nestapp-b1am.onrender.com/api';
export const DASHBOARD_SIDEBAR_LINKS = [
    {
      key: "Dashboard",
      label: "Dashboard",
      path: "dashboard",
      icon: <WindowsOutlined />,
    },
    {
      key: "Users",
      label: "Users",
      path: "users",
      icon: <UsergroupAddOutlined />,
    },
    {
      key: "project",
      label: "Projects",
      path: "projects",
      icon: <ProjectOutlined />,
    },
    // {
    //   key: "user-management",
    //   label: "user_management",
    //   path: "user-managment",
    //   icon: <WindowsOutlined />,
    // },
    {
      key: "Tasks",
      label: "Tasks",
      path: "tasks",
      icon: <BarChartOutlined/>,
    },
    {
      key: "Setting",
      label: "Setting",
      path: "setting",
      icon: <SettingOutlined />,
    },
    {
      key: "bout",
      label: "About",
      path : "about",
      icon :<InfoCircleOutlined />
    }
  ];
  