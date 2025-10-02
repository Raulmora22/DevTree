import { Moon, Sun, Rose, Computer, Fish, TreePine } from "lucide-react";
import { DevTreeConfig } from "@/config";
import { itemRounded } from "@/config";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./theme-switcher";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`cursor-pointer ${DevTreeConfig.RoundedOptions}`}
          size="icon"
        >
          {theme === "light" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
          {theme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem]" />}
          {theme === "valentine" && <Rose className="h-[1.2rem] w-[1.2rem]" />}
          {theme === "system" && <Computer className="h-[1.2rem] w-[1.2rem]" />}
          {theme === "aqua" && <Fish className="h-[1.2rem] w-[1.2rem]" />}
          {theme === "tree" && <TreePine className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={` ${DevTreeConfig.RoundedOptions} w-3 `}
        align="end"
      >
        <DropdownMenuItem
          className={` ${itemRounded} cursor-pointer`}
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>

        <DropdownMenuItem
          className={` ${itemRounded} cursor-pointer`}
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className={` ${itemRounded} cursor-pointer`}
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>

        <DropdownMenuItem
          className={` ${itemRounded} cursor-pointer`}
          onClick={() => setTheme("aqua")}
        >
          Aqua
        </DropdownMenuItem>
        <DropdownMenuItem
          className={` ${itemRounded} cursor-pointer`}
          onClick={() => setTheme("tree")}
        >
          Tree
        </DropdownMenuItem>
        <DropdownMenuItem
          className={` ${itemRounded} cursor-pointer`}
          onClick={() => setTheme("valentine")}
        >
          Valentine
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
