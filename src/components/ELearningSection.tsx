import { motion } from "framer-motion";
import { Play, Award, BookOpen, TrendingUp } from "lucide-react";
import elearningImg from "@/assets/elearning.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";

const courses = [
  {
    icon: Award,
    title: "Inclusive Leadership Masterclass",
    level: "Executive",
    duration: "6 Weeks",
    description: "Build psychological safety, dismantle microaggressions, and lead teams that outperform by 35%.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: TrendingUp,
    title: "Compensation & Pay Equity Lab",
    level: "HR Professionals",
    duration: "4 Weeks",
    description: "Master the 2025 pay transparency laws. Audit your comp structure before your employees do it for you.",
    color: "bg-coral/20 text-coral"
  },
  {
    icon: BookOpen,
    title: "DEIB Strategy Bootcamp",
    level: "People Leaders",
    duration: "8 Weeks",
    description: "Move beyond performative DEI. Design programs with measurable outcomes that survive budget season.",
    color: "bg-gold/20 text-gold"
  },
  {
    icon: Play,
    title: "Resume & Interview Power Hour",
    level: "Job Seekers",
    duration: "Self-Paced",
    description: "Craft your career story with frameworks that land callbacks from companies like Nike, Google & beyond.",
    color: "bg-baby-blue/20 text-navy"
  },
];

const ELearningSection = () => {
  return (
    <section id="elearning" className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-3">She Learns ✨</p>
          <h2 className="display-heading text-foreground text-3xl md:text-5xl mb-4">
            Level Up Your <span className="italic text-primary">Career Game</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            On-demand courses built by HR practitioners, not academics. Real-world strategies that work at startups and Fortune 500s alike.
          </p>
        </motion.div>

        {/* Feature images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <img src={elearningImg} alt="Women learning together" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-navy-deep/40 group-hover:bg-navy-deep/30 transition-colors" />
            <div className="absolute bottom-6 left-6">
              <p className="text-primary-foreground font-display text-2xl font-semibold">Learn Together</p>
              <p className="text-baby-blue/80 text-sm">Cohort-based programs with peer accountability</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <img src={mentorshipImg} alt="Mentorship in action" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-navy-deep/40 group-hover:bg-navy-deep/30 transition-colors" />
            <div className="absolute bottom-6 left-6">
              <p className="text-primary-foreground font-display text-2xl font-semibold">Grow With Mentors</p>
              <p className="text-baby-blue/80 text-sm">1:1 mentorship matching with senior leaders</p>
            </div>
          </motion.div>
        </div>

        {/* Course cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <course.icon className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">{course.level}</span>
                  <span className="text-muted-foreground/40">•</span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-primary">{course.duration}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://sheexecutives.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:scale-105 transition-transform"
          >
            Browse All Courses →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ELearningSection;
