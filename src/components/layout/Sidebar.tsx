"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LayoutDashboard, Users, UserRound, CalendarDays } from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Patients",
    href: "/patients",
    icon: Users,
  },
  {
    title: "Doctors",
    href: "/doctors",
    icon: UserRound,
  },
  {
    title: "Appointments",
    href: "/appointments",
    icon: CalendarDays,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200">
      <div className="h-20 flex items-center px-6 border-b">
        <div>
          <h1 className="text-xl font-bold text-blue-600">Pratama Clinic</h1>

          <p className="text-sm text-gray-500">Information System</p>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          const active = pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all
              ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Icon size={20} />

              <span>{menu.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
