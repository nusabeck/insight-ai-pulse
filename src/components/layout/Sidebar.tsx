
import React from "react";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Calendar, 
  LineChart, 
  MessageSquare, 
  Users, 
  Settings, 
  HelpCircle,
  PanelLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Calendar, label: "Content Calendar", href: "#" },
    { icon: LineChart, label: "Analytics", href: "#" },
    { icon: MessageSquare, label: "Messaging", href: "#" },
    { icon: Users, label: "Community", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
    { icon: HelpCircle, label: "Help Center", href: "#" },
  ];

  return (
    <aside
      className={cn(
        "bg-white border-r border-gray-200 h-screen transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-60"
      )}
    >
      <div className="flex justify-end p-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-gray-700"
        >
          <PanelLeft className="h-5 w-5" />
        </Button>
      </div>

      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-1">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center px-2 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                  item.label === "Dashboard" && "bg-gray-100 text-brand-blue"
                )}
              >
                <item.icon className={cn("h-5 w-5", item.label === "Dashboard" ? "text-brand-blue" : "text-gray-500")} />
                {!collapsed && (
                  <span className="ml-3 text-sm font-medium">{item.label}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        {!collapsed && (
          <div className="flex flex-col items-center space-y-2">
            <p className="text-xs text-gray-500">Premium Plan</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-brand-blue h-1.5 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500">70% of resources used</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
