import {
  Bell,
  BookAudio,
  BookOpenCheck,
  Dices,
  FileQuestion,
  LibraryBig,
  Medal,
  Newspaper,
  Package,
  Puzzle,
  Radio,
  StickyNote,
  Swords,
  Users,
} from "lucide-react";
import { Button } from "../../ui/button";
import NavItem from "./nav-item";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type SidebarProps = {
  collapsed: boolean;
};

const navItems = [
  {
    path: "/courses",
    label: "Courses",
    icon: BookAudio,
  },
  {
    path: "/",
    label: "Grandmasters",
    icon: Medal,
  },
  {
    path: "/",
    label: "News",
    icon: Newspaper,
  },
  {
    path: "/",
    label: "Books",
    icon: LibraryBig,
  },
  {
    path: "/",
    label: "Afisha",
    icon: StickyNote,
  },
  {
    path: "/",
    label: "Tournaments",
    icon: Swords,
  },
  {
    path: "/",
    label: "Modules",
    icon: Package,
  },
  {
    path: "/",
    label: "Lessons",
    icon: BookOpenCheck,
  },
  {
    path: "/",
    label: "Quiz",
    icon: FileQuestion,
  },
  {
    path: "/",
    label: "Life Streams",
    icon: Radio,
  },
  {
    path: "/",
    label: "Puzzles",
    icon: Puzzle,
  },
  {
    path: "/",
    label: "Teachers",
    icon: Users,
  },
  {
    path: "/",
    label: "Notifications",
    icon: Bell,
  },
];

export default function Sidebar({ collapsed }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 z-20 max-h-screen min-h-screen inset-y flex flex-col border-r bg-background",
        collapsed ? "w-[56px]" : "w-[220px]"
      )}
    >
      {collapsed ? (
        <div className="border-b p-2">
          <Link to="/">
            <Button variant="ghost" size="icon" aria-label="Home" >
              <Dices className="size-5  dark:text-white" />
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex h-[57px] items-center border-b px-4 lg:h-[57px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="text-black dark:text-white">UzChess</span>
            <Dices className="size-5  dark:text-white" />
          </Link>
        </div>
      )}
      <nav
        className={cn(
          "grid ",
          collapsed
            ? "gap-1 p-2"
            : "items-start px-2 text-sm font-medium lg:px-4"
        )}
      >
        {navItems.map((item, index) => (
          <NavItem key={index} collapsed={collapsed} {...item} />
        ))}
      </nav>
    </aside>
  );
}
