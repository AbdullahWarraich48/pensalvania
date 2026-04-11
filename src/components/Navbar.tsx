import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Community", href: "#community" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-section-dark">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <div>
            <span className="text-lg font-bold text-section-dark-foreground font-[var(--font-heading)]">PA Furniture</span>
            <span className="block text-xs text-primary -mt-1">Mission</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-section-dark-foreground/80">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="hero" className="rounded-md">Donate Now</Button>
        </div>

        <button className="md:hidden text-section-dark-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-section-dark border-t border-section-dark-foreground/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block text-section-dark-foreground/80 hover:text-primary">
              {link.label}
            </a>
          ))}
          <Button variant="hero" className="rounded-md w-full mt-2">Donate Now</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
