import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Sparkles, Star } from "lucide-react";
import pinImg from "@/assets/pin.jpg";

const tiers = [
  {
    number: "Tier 01",
    name: "The Spark",
    price: "$25",
    description: "Grab a She's Hired tee and wear the movement. Every purchase funds a job-readiness kit for a woman re-entering the workforce.",
    featured: false,
  },
  {
    number: "Tier 02",
    name: "The Catalyst",
    price: "$100",
    description: "Sponsor a woman's resume makeover + interview coaching session. Includes the exclusive She's Hired enamel pin — the one Fortune 500 recruiters are already asking about.",
    featured: true,
  },
  {
    number: "Tier 03",
    name: "The Trailblazer",
    price: "$500",
    description: "Fund a full career transition package: resume, LinkedIn optimization, mock interviews, and 90 days of mentorship. Your name on our Wall of Change Agents.",
    featured: false,
  },
];

const steps = [
  { title: "Choose Your Level", description: "Pick the tier that matches your passion and budget." },
  { title: "We Match a Woman", description: "Your contribution is paired with a woman ready to level up." },
  { title: "She Gets Hired", description: "Watch the transformation. You'll get updates on her journey." },
  { title: "The Ripple Effect", description: "One hire changes a family, a community, an industry." },
];

const ShesHired = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="gradient-hero relative overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-10"
          style={{ background: "hsl(var(--primary))" }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-10"
          style={{ background: "hsl(var(--coral))" }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-baby-blue/60 text-sm mb-8 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to She Executives
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow text-baby-blue mb-4">She Executives Presents</p>
            <h1 className="font-display text-6xl md:text-8xl font-semibold text-primary-foreground leading-[0.95] mb-3">
              <span className="italic text-primary">She's</span><br />Hired
            </h1>
            <p className="font-display text-xl md:text-2xl italic text-baby-blue mb-6">A Labor of Love Initiative</p>
            <span className="inline-block px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-[2px] uppercase">
              2025 Campaign
            </span>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-primary px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="font-display text-8xl text-primary-foreground/15 leading-none block">"</span>
          <p className="font-display text-2xl md:text-3xl italic text-primary-foreground max-w-lg mx-auto mb-5 leading-relaxed">
            Every woman deserves to hear 'You're hired' — and mean it.
          </p>
          <p className="text-xs font-semibold tracking-[2px] uppercase text-primary-foreground/60">— Priscilla Anderson, Founder</p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-card">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-3">The Mission</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              More Than a Campaign —<br />It's a <span className="italic text-primary">Movement</span>
            </h2>
            <p className="body-text mb-6">
              She's Hired is She Executives' labor of love — a grassroots campaign to bridge the employment gap for women of color, career-changers, and returning professionals. In an era where the HR consulting industry is booming ($53B+ projected), we believe the growth shouldn't just benefit corporations. It should lift up the women who power them.
            </p>
            <p className="body-text">
              Every dollar raised goes directly to career services: professional development workshops, resume writing, interview prep, and placement support. No overhead fluff. Just women getting hired.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { num: "67%", label: "of women of color face hiring bias" },
              { num: "2.5×", label: "longer job search for returning moms" },
              { num: "$0", label: "cost to candidates — always" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-5 rounded-xl bg-background border-t-[3px] border-primary"
              >
                <span className="stat-number block mb-1">{s.num}</span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pin Section */}
      <section className="section-padding bg-background text-center">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-3">The Pin</p>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-2">
              Wear the Movement
            </h2>
          </motion.div>
          <motion.div
            className="my-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.img
              src={pinImg}
              alt="She's Hired enamel pin"
              className="w-64 h-64 object-contain"
              style={{ filter: "drop-shadow(0 12px 32px rgba(27,43,75,0.18))" }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <p className="body-text max-w-md mx-auto mb-4">
            The She's Hired pin isn't just an accessory — it's a statement. Every pin purchased funds real career services for a real woman. Pin it on your blazer. Start a conversation. Change a life.
          </p>
          <p className="text-sm font-semibold tracking-wider uppercase text-primary flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> Every pin tells a story
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-card">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="eyebrow mb-3">How It Works</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Your Impact in <span className="italic text-primary">4 Steps</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 pb-8 relative"
              >
                {i < steps.length - 1 && (
                  <div className="absolute left-[30px] top-[68px] w-0.5 h-[calc(100%-68px)]" style={{ background: "linear-gradient(to bottom, hsl(var(--primary)), transparent)" }} />
                )}
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 relative z-10">
                  <span className="font-display text-xl font-bold text-primary">{i + 1}</span>
                </div>
                <div className="pt-2">
                  <h4 className="font-display text-xl font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-padding gradient-hero">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="eyebrow text-baby-blue mb-3">Join the Movement</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground">
              Choose Your <span className="italic text-primary">Impact Level</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card rounded-2xl p-7 relative overflow-hidden ${tier.featured ? "border-primary/40 bg-primary/10" : ""}`}
              >
                {tier.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[9px] font-bold tracking-[2px] uppercase">
                    Start Here
                  </span>
                )}
                <p className="text-[10px] font-bold tracking-[3px] uppercase text-baby-blue/60 mb-2">{tier.number}</p>
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-display text-2xl font-semibold text-primary-foreground">{tier.name}</h3>
                  <span className="font-display text-lg text-primary">{tier.price}</span>
                </div>
                <p className="text-sm text-baby-blue/60 leading-relaxed mb-5">{tier.description}</p>
                <a
                  href="https://sheexecutives.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-6 py-3 text-xs font-semibold tracking-wider uppercase rounded-full transition-all ${
                    tier.featured
                      ? "bg-primary text-primary-foreground hover:scale-105"
                      : "border border-baby-blue/30 text-baby-blue hover:bg-baby-blue/10"
                  }`}
                >
                  Join Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-8 h-8 text-primary-foreground/30 mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              Be the Reason She Gets Hired
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Join hundreds of allies, companies, and change agents who believe that when she wins, we all win.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://sheexecutives.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-primary-foreground text-navy font-semibold text-sm tracking-wide hover:scale-105 transition-transform"
              >
                Support the Campaign
              </a>
              <a
                href="mailto:Priscillaanderson@sheexecutives.com"
                className="px-8 py-4 rounded-full border border-primary-foreground/40 text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary-foreground/10 transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep px-6 py-10 text-center">
        <p className="font-display text-2xl italic text-primary mb-1">She Executives</p>
        <p className="text-[10px] tracking-[3px] uppercase text-baby-blue/40 mb-6">Women in Leadership</p>
        <div className="flex justify-center gap-6 mb-6">
          <Link to="/" className="text-xs text-baby-blue/40 hover:text-primary transition-colors">Home</Link>
          <a href="https://sheexecutives.com" target="_blank" rel="noopener noreferrer" className="text-xs text-baby-blue/40 hover:text-primary transition-colors">Book Now</a>
          <a href="mailto:Priscillaanderson@sheexecutives.com" className="text-xs text-baby-blue/40 hover:text-primary transition-colors">Contact</a>
        </div>
        <p className="text-[11px] text-baby-blue/20">© {new Date().getFullYear()} She Executives. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShesHired;
