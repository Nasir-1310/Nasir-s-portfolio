import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Nasir-1310', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nasir-uddin-953080391/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/Nasir_1310', label: 'Twitter' },
    { icon: Mail, href: 'mailto:bsse1310@iit.du.ac.bd', label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
