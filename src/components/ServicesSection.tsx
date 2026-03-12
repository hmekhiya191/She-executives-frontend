import { motion } from "framer-motion";
import { Users, Search, BookOpen, BarChart3, Shield, Sparkles } from "lucide-react";
import consultingImg from "@/assets/consulting.jpg";

const services = [
  {
    icon: Users,
    title: "Direct-Hire Placements",
    description: "We don't fill seats — we build legacy teams. Our vetting process assesses culture-add, not just culture-fit, placing diverse talent in roles from operations to the C-suite.",
    tag: "Most Popular"
  },
  {
    icon: Search,
    title: "Executive Search",
    description: "Retained search for VP+ roles with an equity-first lens. We surface hidden talent pools your competitors overlook, delivering 40% more diverse candidate slates.",
    tag: null
  },
  {
    icon: Shield,
    title: "HR Consulting & Compliance",
    description: "From compensation audits and pay equity analysis to OSHA compliance, employee handbooks, and affirmative action plans — we keep you protected and progressive.",
    tag: null
  },
  {
    icon: BarChart3,
    title: "Workforce Analytics & Strategy",
    description: "Data-driven talent strategies: attrition modeling, engagement diagnostics, and succession planning that turns your people data into your competitive advantage.",
    tag: "New"
  },
  {
    icon: BookOpen,
    title: "Training & Development",
    description: "Sexual harassment prevention, inclusive leadership workshops, and unconscious bias training — built for the modern, multi-generational workplace.",
    tag: null
  },
  {
    icon: Sparkles,
    title: "DEIB Strategy & Implementation",
    description: "Beyond the checkbox. We design measurable diversity, equity, inclusion, and belonging programs that move the needle — and make the business case to your board.",
    tag: "High Impact"
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-3">Lines of Business</p>
          <h2 className="display-heading text-foreground text-3xl md:text-5xl mb-4">
            Enterprise-Grade HR Solutions
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            The HR consulting market is projected to hit $53B by 2028. The firms winning aren't the biggest — they're the most human. Here's how we deliver.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="contents"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={item}
                className="group relative p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {service.tag && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase">
                    {service.tag}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Visual break with consulting image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img src={consultingImg} alt="HR consulting session" className="w-full h-64 md:h-96 object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-baby-blue text-sm tracking-[3px] uppercase mb-2">Why Choose She Executives?</p>
              <p className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground">
                Listen. Fit. <span className="text-primary italic">Deliver.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
