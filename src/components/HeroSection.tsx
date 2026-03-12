import { motion } from "framer-motion";
import heroImg from "@/assets/hero-diversity.jpg";
import pinImg from "@/assets/pin.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Diverse women executives in leadership" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-10"
        style={{ background: "hsl(var(--primary))" }}
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-20 h-20 rounded-full opacity-10"
        style={{ background: "hsl(var(--coral))" }}
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="eyebrow text-baby-blue mb-4">Women in Leadership • HR Consulting</p>
          <h1 className="display-heading text-primary-foreground mb-6">
            Reinventing the{" "}
            <span className="text-gradient-accent">Workplace</span>
            <br />
            One Hire at a Time
          </h1>
          <p className="text-lg leading-relaxed text-baby-blue/80 mb-8 max-w-lg">
            We don't just fill roles — we engineer inclusive talent ecosystems. From executive search to DEIB strategy, She Executives is where Fortune 500 companies come to future-proof their workforce.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://sheexecutives.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:scale-105 transition-transform"
            >
              Schedule a Talent Audit →
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full border border-baby-blue/30 text-baby-blue font-medium text-sm tracking-wide hover:bg-baby-blue/10 transition-colors"
            >
              Explore Solutions
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          className="hidden md:flex justify-center"
        >
          <div className="relative">
            <motion.img
              src={pinImg}
              alt="She's Hired enamel pin"
              className="w-72 h-72 object-contain drop-shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-coral text-primary-foreground text-xs font-bold tracking-wider uppercase"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨ She's Hired!
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Trusted By marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy-deep/80 backdrop-blur-sm py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {["Fortune 500 Ready", "✦", "DEIB Strategy", "✦", "Executive Search", "✦", "HR Consulting", "✦", "Talent Pipeline", "✦", "Leadership Development", "✦", "Fortune 500 Ready", "✦", "DEIB Strategy", "✦", "Executive Search", "✦", "HR Consulting", "✦", "Talent Pipeline", "✦", "Leadership Development", "✦"].map((item, i) => (
            <span key={i} className="mx-4 text-xs font-medium tracking-[3px] uppercase text-baby-blue/50">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
