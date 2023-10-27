import { BarChartOutlined, InfoCircleOutlined, ProjectOutlined, SettingOutlined, WindowsOutlined } from "@ant-design/icons";

export const URLst='http://172.16.33.178:3000/api'
export const DASHBOARD_SIDEBAR_LINKS = [
    {
      key: "Dashboard",
      label: "Dashboard",
      path: "dashboard",
      icon: <WindowsOutlined />,
    },
    {
      key: "project",
      label: "Projects",
      path: "projects",
      icon: <ProjectOutlined />,
    },
    {
      key: "user-management",
      label: "User mgt",
      path: "user-managment",
      icon: <WindowsOutlined />,
    },
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
  