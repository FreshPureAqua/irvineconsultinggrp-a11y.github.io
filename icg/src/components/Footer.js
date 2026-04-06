import { Mail, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-icgblue text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left */}
        <div className="flex items-center gap-5">
          <img
            src="/icg-logo-white.png"
            alt="ICG Logo"
            className="w-16 h-16"
          />
          <div>
            <h3 className="text-xl font-bold">Irvine Consulting Group</h3>
            <p className="text-lg text-white/90 border-b border-white/40 pb-1 mt-0.5">
              Where Talent Meets Opportunity
            </p>
            <p className="text-xs text-white/40 mt-2">&copy; 2026 ICG</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/icg.uci/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/irvineconsultinggroup/about/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:irvineconsulting.grp@gmail.com"
            aria-label="Email"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
