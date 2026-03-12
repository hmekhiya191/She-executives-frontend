import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import pinImg from "@/assets/pin.jpg";

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
            <p className="eyebrow text-baby-blue mb-3">Ready to Transform Your Workforce?</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground mb-6">
              Let's Build Something{" "}
              <span className="italic text-primary">Extraordinary</span>
            </h2>
            <p className="text-baby-blue/70 text-lg mb-8 max-w-xl mx-auto">
              Whether you're a Fortune 500 rethinking your talent strategy or a rising leader ready to make your move — She Executives is your launchpad.
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
                She's Hired Campaign ✨
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={pinImg} alt="She's Hired pin" className="w-12 h-12 object-contain" />
                <div>
                  <p className="font-display text-2xl italic text-primary">She Executives</p>
                  <p className="text-[10px] tracking-[3px] uppercase text-baby-blue/50">Women in Leadership</p>
                </div>
              </div>
              <p className="text-sm text-baby-blue/50 leading-relaxed max-w-sm">
                Reinventing the workplace for greater gender diversity. HR consulting that supports and partners with business.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[2px] uppercase text-baby-blue/40 mb-4">Solutions</h4>
              <div className="flex flex-col gap-2">
                <a href="#services" className="text-sm text-baby-blue/60 hover:text-primary transition-colors">Executive Search</a>
                <a href="#services" className="text-sm text-baby-blue/60 hover:text-primary transition-colors">HR Consulting</a>
                <a href="#services" className="text-sm text-baby-blue/60 hover:text-primary transition-colors">Direct-Hire</a>
                <a href="#elearning" className="text-sm text-baby-blue/60 hover:text-primary transition-colors">E-Learning</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[2px] uppercase text-baby-blue/40 mb-4">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="mailto:Priscillaanderson@sheexecutives.com" className="text-sm text-baby-blue/60 hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email Us
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-baby-blue/60 hover:text-primary transition-colors flex items-center gap-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-baby-blue/60 hover:text-primary transition-colors flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-baby-blue/10 pt-8 text-center">
            <p className="text-xs text-baby-blue/30">
              © {new Date().getFullYear()} She Executives. All rights reserved. Women in Leadership.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
