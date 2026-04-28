import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavLink = { label: string; href: string };

const Navbar = () => {
  const navLinks = useMemo<NavLink[]>(
    () => [
      { label: "Home", href: "/" },
      { label: "Donate Financially", href: "/donate" },
      { label: "History & Founders", href: "/history-founders" },
      { label: "Volunteer", href: "/volunteer" },
    ],
    [],
  );

  const requestPickupLink = useMemo<NavLink>(() => ({ label: "Request a Pickup", href: "/pickup" }), []);

  const partnerLinks = useMemo<NavLink[]>(
    () => [
      { label: "Become a Partner", href: "/become-a-partner" },
      { label: "Community Partners", href: "/community-partners" },
      { label: "Business Partners", href: "#business-partners" },
    ],
    [],
  );

  const [activeHref, setActiveHref] = useState<string>("#");

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path === "/") {
        setActiveHref(hash || "/");
        return;
      }

      if (path === "/donate") {
        setActiveHref("/donate");
        return;
      }

      if (path === "/history-founders") {
        setActiveHref("/history-founders");
        return;
      }

      if (path === "/volunteer") {
        setActiveHref("/volunteer");
        return;
      }

      if (path === "/pickup") {
        setActiveHref("/pickup");
        return;
      }

      if (path === "/community-partners") {
        setActiveHref("/community-partners");
        return;
      }

      if (path === "/become-a-partner") {
        setActiveHref("/become-a-partner");
        return;
      }

      setActiveHref(hash || "#");
    };

    handleLocationChange();
    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between h-[88px] gap-6">
        <a
          href="/"
          onClick={() => handleNavClick("/")}
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background rounded-md"
          aria-label="Go to home"
        >
          <img
            src="/images/Pennsylvania-Logo2.png"
            alt="Pennsylvania Furniture Mission"
            className="h-14 w-auto sm:h-16"
            loading="eager"
          />
        </a>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap justify-center gap-x-8 gap-y-3 space-x-0">
              {navLinks.map((link) => {
                const isActive = activeHref === link.href;

                return (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink asChild>
                      <a
                        href={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                      >
                        <span
                          className={[
                            "relative inline-block pb-2",
                            isActive ? "text-foreground" : "",
                          ].join(" ")}
                        >
                          {link.label}
                          <span
                            aria-hidden="true"
                            className={[
                              "absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full bg-foreground transition-opacity",
                              isActive ? "opacity-100" : "opacity-0",
                            ].join(" ")}
                          />
                        </span>
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="hero" className="rounded-md">
            <a href={requestPickupLink.href} onClick={() => handleNavClick(requestPickupLink.href)}>
              {requestPickupLink.label}
            </a>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className="rounded-md"
                aria-label="Partner options"
              >
                Partner <ChevronDown className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {partnerLinks.map((link) => (
                <DropdownMenuItem key={link.label} asChild>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="cursor-pointer"
                  >
                    {link.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[360px]">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="mt-8 space-y-2">
                {[...navLinks, requestPickupLink, ...partnerLinks].map((link) => {
                  const isActive = activeHref === link.href;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={[
                        "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-accent text-foreground"
                          : "text-foreground/80 hover:bg-accent hover:text-foreground",
                      ].join(" ")}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
