import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-section-dark text-section-dark-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <div>
                <span className="text-lg font-bold font-[var(--font-heading)]">PA Furniture</span>
                <span className="block text-xs text-primary -mt-1">Mission</span>
              </div>
            </div>
            <p className="text-section-dark-foreground/50 text-sm leading-relaxed">
              Providing quality furniture to families and individuals in need since 2010. Every piece of furniture helps build a home.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-section-dark-foreground/90">Quick Links</h4>
            <ul className="space-y-2 text-section-dark-foreground/50 text-sm">
              <li className="hover:text-primary cursor-pointer transition-colors">Home</li>
              <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Donate</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Volunteer</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-section-dark-foreground/90">Contact Us</h4>
            <ul className="space-y-3 text-section-dark-foreground/50 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                (555) 123-4567
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                info@pafurnituremission.org
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                123 Community Drive, PA
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary" />
                Mon–Sat: 8am–6pm
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-section-dark-foreground/90">Stay Connected</h4>
            <p className="text-section-dark-foreground/50 text-sm mb-4">Subscribe to our newsletter for updates and stories.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-section-dark-foreground/10 border border-section-dark-foreground/20 rounded-md px-3 py-2 text-sm text-section-dark-foreground placeholder:text-section-dark-foreground/30 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-section-dark-foreground/10 pt-8 text-center text-section-dark-foreground/30 text-xs">
          © 2026 PA Furniture Mission. All rights reserved. Made with{" "}
          <Heart className="w-3 h-3 inline text-primary fill-primary" /> for communities everywhere.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
