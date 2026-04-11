import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-7 h-7 text-primary fill-primary" />
              <span className="text-2xl font-bold font-[var(--font-heading)]">FurniGive</span>
            </div>
            <p className="text-background/60 leading-relaxed max-w-sm">
              Making furniture donation simple, impactful, and accessible for everyone. Every piece matters.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-background/90">Quick Links</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li className="hover:text-primary cursor-pointer transition-colors">How It Works</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Donate Now</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Our Impact</li>
              <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-background/90">Contact</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li>hello@furnigive.org</li>
              <li>(555) 123-4567</li>
              <li>Mon–Sat, 8am–6pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-background/40 text-sm">
          © 2026 FurniGive. Made with <Heart className="w-3 h-3 inline text-primary fill-primary" /> for communities everywhere.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
