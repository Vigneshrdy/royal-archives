import { Link } from "react-router-dom";
import { Scale, Mail, MapPin } from "lucide-react";

const links = {
  Product: ["/features", "/chat", "/pricing", "/api"],
  Resources: ["/docs", "/glossary", "/cases", "/blog"],
  Company: ["/about", "/careers", "/contact", "/press"],
  Legal: ["/terms", "/privacy", "/disclaimer", "/ethics"],
};

const linkLabels: Record<string, string[]> = {
  Product: ["Features", "Ask Nyaya", "Pricing", "API Access"],
  Resources: ["Documentation", "Legal Glossary", "Case Studies", "Blog"],
  Company: ["About Us", "Careers", "Contact", "Press Kit"],
  Legal: ["Terms of Service", "Privacy Policy", "Disclaimer", "Ethics Policy"],
};

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
              <Scale className="w-5 h-5 text-gold" />
            </div>
            <div>
              <span className="font-serif text-xl font-semibold">Nyaya AI</span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">Legal Intelligence</p>
            </div>
          </Link>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
            Justice, Explained. Law, Simplified. Making legal knowledge accessible to every citizen of India.
          </p>
          <div className="space-y-2 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold" /><span>contact@nyaya.ai</span></div>
            <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-gold" /><span>New Delhi, India</span></div>
          </div>
        </div>

        {Object.entries(links).map(([title, hrefs]) => (
          <div key={title}>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold-light">{title}</h4>
            <ul className="space-y-3">
              {hrefs.map((href, i) => (
                <li key={href}>
                  <Link to={href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {linkLabels[title][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-primary-foreground/50">© {new Date().getFullYear()} Nyaya AI. All rights reserved.</p>
        <p className="text-xs text-primary-foreground/40 text-center md:text-right max-w-md">
          Nyaya AI provides legal information, not legal advice. Always consult a qualified professional.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
