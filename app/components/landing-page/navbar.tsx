import { Home, User, BookmarkCheck } from "lucide-react";
import { FloatingNav } from "../ui/floating-navbar";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Cards",
    link: "/#cards",
    icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Garanta o seu",
    link: "/#register",
    icon: (
      <BookmarkCheck className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

const Navbar = () => {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;
