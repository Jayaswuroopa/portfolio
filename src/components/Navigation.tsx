import { motion } from "framer-motion";
import { NavLink } from "./NavLink";
import { Home, User, Code, Briefcase, Mail, FileText, Github } from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/about", icon: User, label: "About" },
  { path: "/skills", icon: Code, label: "Skills" },
  { path: "/projects", icon: Briefcase, label: "Projects" },
  { path: "/contact", icon: Mail, label: "Contact" },
  { path: "/resume", icon: FileText, label: "Resume" },
  { path: "/profiles", icon: Github, label: "Profiles" },
];

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/30 border-b border-primary/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gradient"
          >
            Portfolio
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 flex items-center gap-2 text-muted-foreground hover:text-primary"
                activeClassName="bg-primary/20 text-primary"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-primary"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="w-full h-0.5 bg-primary block"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-full h-0.5 bg-primary block"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="w-full h-0.5 bg-primary block"
          />
        </div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 top-16 bg-background/95 backdrop-blur-lg"
        >
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg transition-all duration-300 hover:bg-primary/10 flex items-center gap-3 text-muted-foreground hover:text-primary"
                activeClassName="bg-primary/20 text-primary"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-lg">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

import { useState } from "react";
