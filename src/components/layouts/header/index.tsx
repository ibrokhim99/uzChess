import {  PanelRightClose, PanelRightOpen } from "lucide-react";
import { Button } from "../../ui/button";
import { ModeToggle } from "./mode-toggle";
import { ProfileToggle } from "./profile-tooggle";

type HeaderProps = {
  collapsed: boolean;
  toggleCollapsed: () => void;
};

export default function Header({ collapsed, toggleCollapsed }: HeaderProps) {
  return (
    <header className="h-[57px] sticky top-0 z-10 grid bg-background  items-center grid-cols-[1fr_auto_auto] gap-2 border-b px-4">
      <Button variant="outline" size="icon" onClick={toggleCollapsed} className="dark:text-white dark:border-white">
        {collapsed ? (
          <PanelRightClose size="18px" />
        ) : (
          <PanelRightOpen size="18px" />
        )}
      </Button>

      <ModeToggle />
      <ProfileToggle/>
    </header>
  );
}
