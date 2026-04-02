import { Moon, Sun } from "lucide-react";
import LanguageSwitcher from "../shared/LanguageSwitcher"
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar"
import { useTheme } from "next-themes";
const Header = () => {
    const { theme, setTheme } = useTheme();
    return (
        <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-background/80 backdrop-blur-md border-b border-border
         theme-transition px-4 sm:px-6 lg:px-8 py-3 sm:py-4 h-auto sm:h-[64.8px]">
            
            <SidebarTrigger className="-ml-1" />
            <div className="flex h-16 items-center gap-2 sm:gap-4">
                <Button
                    variant="ghost"
                    size="icon"
                    className="theme-toggle"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            <LanguageSwitcher />
            </div>
        </header>
    )
}

export default Header