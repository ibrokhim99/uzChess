import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LucideProps } from "lucide-react";

export interface NavItemProps {
  icon: FC<LucideProps>;
  label: string;
  path: string;
  collapsed: boolean;
}

export default function NavItem({
  icon: Icon,
  label,
  path,
  collapsed,
}: NavItemProps) {
  return (
    <>
      {collapsed ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to={path}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg dark:text-white border-white"
                aria-label={label}
              >
                <Icon className="size-5" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <Link
          to={path}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Icon className="h-4 w-4 dark:text-white border-white" />
          {label}
        </Link>
      )}
    </>
  );
}
