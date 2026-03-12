import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "E-Learning", href: "#elearning" },
  { label: "She's Hired", href: "/shes-hired" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card"
      style={{ background: "hsl(216 60% 13% / 0.92)", backdropFilter: "blur(20px)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display text-2xl italic text-primary">
          She <span className="text-primary-foreground font-semibold not-italic text-sm tracking-[3px] uppercase ml-1">Executives</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium tracking-wide text-baby-blue hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wide text-baby-blue hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="https://sheexecutives.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
        >
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-baby-blue hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-baby-blue hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
