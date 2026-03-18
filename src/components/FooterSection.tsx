import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Instagram, Facebook, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import pinImg from "@/assets/She-logo.png";
import "@/components/Hero.css"

const FooterSection = () => {
  return (
    <>
      {/* CTA Banner */}
      <section className="section-padding gradient-hero relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5"
          style={{ background: "hsl(var(--primary))" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow text-baby-blue mb-3">
              Ready to Transform Your Workforce?
            </p>

            <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground mb-6">
              SHE's {" "}
              <span className="italic text-primary"> HIRED</span>
            </h2>

            <p className="text-baby-blue/70 text-lg mb-8 max-w-xl mx-auto">
              Pledge to hire 100 women in 120 days. Join Nike, Google, Target, and progressive companies committed to closing the gender gap in leadership. 
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://sheexecutives.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:scale-105 transition-transform"
              >
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/shes-hired"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-baby-blue/30 text-baby-blue font-medium text-sm tracking-wide hover:bg-baby-blue/10 transition-colors"
              >
                She's Hired Campaign
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep text-baby-blue px-6 py-16">
        <div className="max-w-7xl mx-auto md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
<div className="md:col-span-1 flex flex-col items-start gap-4">
  
  {/* Logo */}
  <img
    src={pinImg}
    alt="She Executives logo"
    className="footer-logo"
  />

  {/* Text */}
  <p className="font-body text-sm text-baby-blue/50 leading-relaxed max-w-xs">
    Redefining the workplace for gender diversity. HR consulting that supports and partners with business.
  </p>

</div>

{/* Services */}
<div>
  <h4 className="font-display text-lg font-semibold mb-4 text-accent">Services</h4>
  <ul className="space-y-2 text-sm text-baby-blue/60">
    <li><Link to="/services" className="hover:text-accent">Executive Placement</Link></li>
    <li><Link to="/services" className="hover:text-accent">Direct Hire</Link></li>
    <li><Link to="/services" className="hover:text-accent">HR Consulting</Link></li>
    <li><Link to="/elearning" className="hover:text-accent">E-Learning</Link></li>
  </ul>
</div>

{/* Initiatives (MIDDLE NOW) */}
<div>
  <h4 className="font-display text-lg font-semibold mb-4 text-accent">Initiatives</h4>
  <ul className="space-y-2 text-sm text-baby-blue/60">
    <li><Link to="/shes-hired">She's Hired</Link></li>
    <li><Link to="/about">SHE Cares</Link></li>
    <li><Link to="/about">DEI Resources</Link></li>
  </ul>
</div>

{/* Connect (LAST NOW) */}
<div>
  <h4 className="font-display text-lg font-semibold mb-4 text-accent">Connect</h4>
  <ul className="space-y-2 text-sm text-baby-blue/60">
    <li className="flex gap-2">
      <Mail className="w-4 h-4 text-accent" />
      <a href="mailto:Priscillaanderson@sheexecutives.com">Email Us</a>
    </li>
    <li className="flex gap-2">
      <Linkedin className="w-4 h-4 text-accent" />
      <a href="https://linkedin.com" target="_blank">LinkedIn</a>
    </li>
    <li className="flex gap-2">
      <Instagram className="w-4 h-4 text-accent" />
      <a href="https://instagram.com" target="_blank">Instagram</a>
    </li>
    <li className="flex gap-2">
      <Facebook className="w-4 h-4 text-accent" />
      <a href="https://facebook.com" target="_blank">Facebook</a>
    </li>
  </ul>
</div>
</div>

          <div className="mt-12 pt-8 border-t border-baby-blue/10 flex justify-between">
            <p className="text-sm text-baby-blue/50">
              © {new Date().getFullYear()} She Executives. All Rights Reserve.
            </p>
            <p className="text-sm flex items-center gap-1 text-baby-blue/50">
              Built with <Heart size={14} className="text-accent" />
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;