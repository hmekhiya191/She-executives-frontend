import { motion } from "framer-motion";

const stats = [
  { number: "15+", label: "Years in HR & Recruiting", emoji: "💼" },
  { number: "500+", label: "Women Placed in Leadership", emoji: "👑" },
  { number: "40%", label: "More Diverse Candidate Slates", emoji: "📊" },
  { number: "98%", label: "Client Retention Rate", emoji: "🤝" },
];

const MissionSection = () => {
  return (
    <section id="mission" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: "hsl(var(--primary))" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5" style={{ background: "hsl(var(--coral))" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow text-baby-blue mb-3">Our Mission</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-secondary-foreground leading-tight mb-6">
              Changing the Face of Business,{" "}
              <span className="italic text-primary">One New-Hire at a Time</span>
            </h2>
            <p className="text-base leading-relaxed text-baby-blue/70 mb-6">
              She Executives doesn't simply fill positions — we create workplace solutions by placing, searching for, and supporting powerful women and men who embrace creativity through diversity. With empathy for the industries we serve, we lead the evolution of how women are represented in every company in the world.
            </p>
            <p className="text-base leading-relaxed text-baby-blue/70">
              Founded by Priscilla Anderson, a 15+ year HR veteran who has partnered with Fortune 500 manufacturers, consumer goods companies, and supply chain leaders, She Executives is driven by a single passion: helping women take their rightful place in leadership roles while helping client companies prosper through inclusion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-default"
              >
                <span className="text-3xl mb-2 block">{stat.emoji}</span>
                <span className="font-display text-3xl md:text-4xl font-bold text-primary block mb-1">{stat.number}</span>
                <span className="text-xs text-baby-blue/60 leading-tight block">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
