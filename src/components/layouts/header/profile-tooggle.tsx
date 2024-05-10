import { CircleUserRound,  LogOut,  User} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link} from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "@/lib/constants";

export function ProfileToggle() {
    const logOut = ()=>{
        localStorage.removeItem(ACCESS_TOKEN_KEY);        
    }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="dark:text-white  dark:border-white">
        <CircleUserRound size="18px" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem   >    
            <User className="size-4"/>
             <p className="px-2">Profil</p>
        </DropdownMenuItem>
        <DropdownMenuItem >
            <LogOut className="size-4"/>
            <Link to='/login'  onClick={logOut} className="px-2">Chiqish</Link>
        </DropdownMenuItem>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
}