import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <span className="text-xl font-bold font-[var(--font-heading)] text-foreground">FurniGive</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#how" className="hover:text-primary transition-colors">How It Works</a>
          <a href="#categories" className="hover:text-primary transition-colors">Categories</a>
          <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
        </div>

        <div className="hidden md:block">
          <Button variant="hero" className="rounded-full">Donate Now</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
          <a href="#how" className="block text-muted-foreground hover:text-primary">How It Works</a>
          <a href="#categories" className="block text-muted-foreground hover:text-primary">Categories</a>
          <a href="#impact" className="block text-muted-foreground hover:text-primary">Impact</a>
          <Button variant="hero" className="rounded-full w-full mt-2">Donate Now</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
