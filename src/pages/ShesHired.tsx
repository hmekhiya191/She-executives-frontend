import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  ArrowRight,
  Upload,
  Heart,
  Users,
  Sparkles,
  BookOpen,
  Brain, Briefcase, DollarSign, ShieldCheck, TrendingUp,  Star,  HandHeart, Building2, Handshake, Phone, UserCheck, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { fadeUp } from "@/components/ui/animations"
import pinImg from "@/assets/pin.png";
import shesHiredHero from "@/assets/shes-hired-hero.jpg";
import FooterSection from "@/components/FooterSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";







const tiers = [
  {
    number: "01",
    name: "The Pledge",
    desc: "Commit to hire one qualified professional from our network at absolutely no cost to you. We source, screen, and present candidates. You make the hire. We handle everything else.",
    cta: "Take the Pledge",
    featured: true,
  },
  {
    number: "02",
    name: "Post-Hire Contribution",
    desc: "After a successful placement, we will show you what the waived recruiting fee would have been and invite a voluntary contribution to the campaign. Pay it forward, on your terms.",
    cta: "Learn More",
  },
  {
    number: "03",
    name: "Mission Sponsorship",
    desc: "No open roles? No problem. Make a direct donation to the She's Hired initiative and help fund outreach, resources, and candidate support for displaced professionals.",
    cta: "Become a Sponsor",
  },
  {
    number: "04",
    name: "Strategic Hiring Partnership",
    desc: "For organizations ready to commit at scale. Includes a flat fee structure, onsite hiring events at your location, branded campaigns, and comprehensive partnership support.",
    cta: "Partner With Us",
  },
];

const processSteps = [
  {
    icon: Phone,
    title: "You Make the Pledge",
    desc: "Reach out via email or our website. We will schedule a brief call to understand your team's needs and timeline.",
  },
  {
    icon: Users,
    title: "We Source and Screen",
    desc: "Our team identifies qualified candidates from our network of Black women and women of color professionals.",
  },
  {
    icon: UserCheck,
    title: "You Meet the Candidates",
    desc: "We present pre-vetted professionals aligned to your requirements. You interview and select.",
  },
  {
    icon: Award,
    title: "She's Hired.",
    desc: "A career is restored, your team gains exceptional talent, and the ripple effect begins. No invoices. No friction.",
  },
];


const stats = [
  { value: "$0", label: "Cost to pledge a hire" },
  { value: "100%", label: "Handled by our team" },
  { value: "4", label: "Ways to get involved" },
];


const pledgedCompanies = [
  "Nike", "Google", "Target", "Microsoft", "Salesforce",
  "Deloitte", "Accenture", "IBM", "Amazon", "Meta",
];

const ShesHired = () => {
  const [pledgeEmail, setPledgeEmail] = useState("");
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);

   // ✅ INSIDE component
  const pinRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start end", "end start"],
  });

  const pinY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const pinRotate = useTransform(scrollYProgress, [0, 1], [-8, 8]); 

  const handlePledge = (e: React.FormEvent) => {
    e.preventDefault();
    setPledgeSubmitted(true);
    setPledgeEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
    

      {/* 🔷 HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${shesHiredHero})` }}
        />
        <div className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm" />

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* <span className="text-sm uppercase tracking-[0.3em] text-baby-blue font-semibold">
              Campaign 2026
            </span> */}

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 leading-tight">
              She's Hired
            </h1>

            {/* <p className="font-display text-2xl md:text-3xl text-accent italic mt-2">
              One Movement
            </p> */}

            <p className="mt-6 text-lg text-baby-blue/80 max-w-2xl leading-relaxed">
              Pledge to hire a Successful High Earner and join the companies
              transforming leadership. Upload your resume to be part of the
              next cohort of intentional leaders.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* 🔥 Blooming Button (kept) */}
              <Button size="lg" className="pledge-pulse bg-accent text-white hover:scale-105" asChild>
                <a href="#pledge">
                  <Target size={18} /> Take the Pledge
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="
                  border-blue-400 
                  text-blue-400 
                  bg-transparent 
                  hover:bg-transparent 
                  hover:text-white 
                  hover:border-white 
                  transition-all duration-300
                "
                asChild
              >
                <a href="#resume">
                  <Upload size={18} /> Upload Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>



{/* Quote */}
<section className="bg-secondary py-16 md:py-18 relative overflow-hidden">
  <div className="container mx-auto px-6 text-center relative z-10">

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >

      {/* Decorative Quote */}
      <div className="font-display text-[80px] md:text-[100px] text-secondary-foreground/10 leading-none ">
        “
      </div>

      {/* Quote Text */}
      <blockquote
        className="
          font-display 
          text-2xl md:text-[32px] 
          italic 
          text-secondary-foreground 
          leading-relaxed 
          max-w-2xl mx-auto
        "
      >
        Finding a job is work. Finding other people jobs is a{" "}
        <span className="text-accent not-italic font-semibold">
          labor of love
        </span>.
      </blockquote>

      {/* Divider (faded edges) */}
      <div className="w-40 h-[1px] mx-auto bg-gradient-to-r from-transparent via-accent/50 to-transparent my-6"></div>

      {/* Brand */}
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary-foreground/70">
        She Executives
      </p>

    </motion.div>
  </div>

  {/* 🔷 Soft Background Glow */}
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
    <div className="w-[350px] h-[350px] bg-accent/10 blur-3xl rounded-full opacity-30"></div>
  </div>
</section>



{/* 🔷 Mission */}
<section className="py-20 md:py-24 bg-background">
  <div className="container mx-auto px-6">

    {/* Content */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={0}
      className="max-w-3xl mx-auto text-center"
    >
      {/* Eyebrow */}
      <span className="text-xs tracking-[0.35em] uppercase text-accent font-semibold">
        Our Mission
      </span>

      {/* Title */}
      <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
        Re-employing{" "}
        <span className="text-accent italic">
          Black Women and Women of Color
        </span>
      </h2>

      {/* Body */}
      <p className="mt-6 text-muted-foreground leading-relaxed">
        Following the DEI rollbacks of recent years, thousands of qualified Black
        women and women of color were displaced from careers they had built.
        She Executives created the <span className="text-accent font-medium">She's Hired</span> campaign to reconnect
        these professionals with companies still committed to building diverse,
        high-performing teams.
      </p>

      {/* Highlight Line */}
      <p className="mt-5 font-semibold text-foreground">
        This is not charity.{" "}
        <span className="text-accent">
          This is a strategic investment in overlooked talent.
        </span>
      </p>

      {/* Divider */}
      <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mt-8"></div>
    </motion.div>

    {/* 🔷 Stats */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  custom={1}
  className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto"
>
  {stats.map((s, i) => (
    <div
      key={i}
      className="
        relative
        bg-card
        border border-border
        rounded-xl
        py-6 px-4
        text-center
        shadow-sm
        hover:shadow-md hover:-translate-y-1
        transition-all duration-300
        overflow-hidden
      "
    >
      {/* 🔷 Top Blue Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-accent rounded-t-xl"></div>

      {/* Value */}
      <span className="font-display text-4xl md:text-5xl font-bold text-foreground block leading-none mb-2">
        {s.value}
      </span>

      {/* Label */}
      <span className="text-sm text-muted-foreground">
        {s.label}
      </span>
    </div>
  ))}
</motion.div>
   

  </div>
</section>



{/* Tiers */}
<section className="py-16 md:py-20 bg-navy">
  <div className="container mx-auto px-6 max-w-3xl">

    {/* Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-center mb-12"
    >
      <span className="text-accent text-xs tracking-[0.3em] uppercase">
        How to Participate
      </span>

      <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
        Four Ways to Make an Impact
      </h2>
    </motion.div>

    {/* Cards */}
    <div className="flex flex-col gap-6">

      {tiers.map((tier, i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={i}
          className={`group relative rounded-xl p-7 md:p-8 border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
            tier.featured
              ? "bg-white/5 border-accent/40 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              : "bg-white/5 border-white/20 hover:border-accent/30"
          }`}
        >

          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 blur-xl" />

          {/* Badge */}
          {tier.featured && (
            <span className="absolute top-4 right-4 bg-accent text-white text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-full shadow-md">
              Start Here
            </span>
          )}

          {/* Tier Label */}
          <div className="text-[10px] font-semibold tracking-[3px] uppercase mb-2 text-accent">
            Tier {tier.number}
          </div>

          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
            {tier.name}
          </h3>

          {/* Description */}
          <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
            {tier.desc}
          </p>

          {/* CTA */}
          <a
            href="https://sheexecutives.com"
            className={`inline-flex items-center justify-center px-6 py-3 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 ${
              tier.featured
                ? "bg-accent text-white hover:bg-accent/90 shadow-md hover:shadow-lg"
                : "border border-white/30 text-white hover:bg-white hover:text-navy"
            }`}
          >
            {tier.cta}
            <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>

        </motion.div>
      ))}

    </div>
  </div>
</section>




{/* 🔷 Process Steps */}
<section className="py-24 bg-background">
  <div className="container mx-auto px-6 max-w-4xl">

    {/* Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={0}
      className="text-center mb-16"
    >
      <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-semibold">
        The Process
      </span>

      <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
        Simple. Seamless. <span className="italic text-accent">Handled for You.</span>
      </h2>
    </motion.div>

    {/* Timeline */}
    <div className="flex flex-col relative">

      {processSteps.map((step, i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={i}
          className="relative flex gap-8 items-start pb-12 group"
        >

          {/* 🔷 Vertical Line */}
          {i < processSteps.length - 1 && (
            <div className="absolute left-8 top-16 w-[2px] h-[calc(100%-20px)] 
              bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />
          )}

          {/* 🔷 Icon */}
          <div className="
            w-16 h-16 flex-shrink-0
            rounded-full
            bg-gradient-to-br from-white to-sky-50
            border border-accent/20
            flex items-center justify-center
            shadow-sm
            group-hover:shadow-md
            group-hover:scale-105
            transition-all duration-300
            relative z-10
          ">
            <img
              src={pinImg}
              alt=""
              className="w-100  object-contain opacity-80 group-hover:opacity-100 transition"
            />
          </div>

          {/* 🔷 Content */}
          <div className="pt-1 max-w-lg">

            <h4 className="font-display text-2xl md:text-2xl font-bold text-foreground mb-2 tracking-wide group-hover:text-accent transition">
              {step.title}
            </h4>

            <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed">
              {step.desc}
            </p>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>







{/* 🔷 Pin Section */}
<section
  ref={pinRef}
  className="relative py-24 md:py-28 overflow-hidden gradient-hero relative overflow-hidden"
>
  {/* 🔷 Background Glow Effects */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-sky-400/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300/20 blur-[140px] rounded-full"></div>

  <div className="container mx-auto px-6 text-center max-w-2xl relative z-10">

    {/* Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={0}
    >
      <span className="text-xs tracking-[0.4em] uppercase text-sky-300 font-semibold">
        The Symbol
      </span>

      <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
        Wear It. Share It.{" "}
        <span className="text-sky-400 italic">Mean It.</span>
      </h2>
    </motion.div>

    {/* Pin Image */}
    <motion.div
      style={{ y: pinY, rotate: pinRotate }}
      className="flex justify-center my-12"
    >
      <div className="relative">
        {/* glow behind pin */}
        <div className="absolute inset-0 bg-sky-400/30 blur-3xl rounded-full"></div>

        <img
          src={pinImg}
          alt="She's Hired enamel pin"
          className="relative w-64 md:w-72 drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        />
      </div>
    </motion.div>

    {/* Content */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={1}
    >
      <p className="text-white/80 text-base md:text-lg leading-relaxed">
        The She's Hired pin represents more than a campaign. it's a commitment.
        Every pin worn is a signal to displaced professionals that they are
        <span className="text-white font-medium"> seen, valued, and worth investing in.</span>
      </p>

      <p className="text-sky-300 font-semibold text-sm tracking-[0.3em] uppercase mt-8">
        Every Hire Changes a Life
      </p>
    </motion.div>

  </div>
</section>
      
      {/* <section className="bg-navy section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Campaign <span className="text-accent italic">Progress</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection className="max-w-2xl mx-auto mb-12">
            <div className="flex justify-between text-sm text-baby-blue/60 mb-2">
              <span>37 Hired</span>
              <span>100 Goal</span>
            </div>

            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "37%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="h-full bg-accent rounded-full"
              />
            </div>
          </AnimatedSection>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value="37" label="Women Hired" delay={0} />
            <StatCounter value="28" label="Companies Pledged" delay={0.1} />
            <StatCounter value="450+" label="Resumes Received" delay={0.2} />
            <StatCounter value="63" label="Positions Left" delay={0.3} />
          </div> 
        </div>
      </section> */}

      {/* 🔷 PLEDGE WALL */}
      <section id="pledge" className="section-padding bg-background">
  <div className="container mx-auto">

    {/* 🔷 Heading */}
    <AnimatedSection className="text-center mb-16">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
        The <span className="text-accent italic">Pledge Wall</span>
      </h2>

      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Companies we are calling on to take the pledge. Add your organization to the wall.
      </p>
    </AnimatedSection>

    {/* 🔷 Companies */}
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {pledgedCompanies.map((company, i) => (
        <motion.div
          key={company}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.08, y: -3 }}
          className="
            px-6 py-3 
            rounded-full 
            bg-card 
            border border-border 
            text-sm font-semibold text-foreground
            shadow-sm hover:shadow-md
            transition-all duration-300 cursor-pointer
          "
        >
          {company}
        </motion.div>
      ))}

      {/* ➕ Add Company */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="
          px-6 py-3 
          rounded-full 
          border-2 border-dashed border-accent/40 
          text-accent font-semibold text-sm
          hover:bg-accent/10 
          transition-all duration-300 
          cursor-pointer
        "
      >
        + Add Your Company
      </motion.div>
    </div>

    {/* 🔷 Form */}
    <AnimatedSection className="max-w-md mx-auto">
      {pledgeSubmitted ? (
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="
            text-center 
            bg-card 
            rounded-2xl 
            p-10 
            border border-border
            shadow-lg
          "
        >
          <Sparkles className="text-accent mx-auto mb-4" size={42} />
          <h3 className="font-display text-xl font-bold text-foreground">
            You're In 🚀
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Thank you for taking the pledge. We’ll connect with you shortly.
          </p>
        </motion.div>
      ) : (
        <form
          className="
            bg-card 
            rounded-2xl 
            p-8 
            border border-border 
            shadow-md
          "
          onSubmit={handlePledge}
        >
          <h3 className="font-display text-xl text-center font-semibold mb-6">
            Take The Pledge
          </h3>

          <input
            type="email"
            value={pledgeEmail}
            onChange={(e) => setPledgeEmail(e.target.value)}
            placeholder="your@company.com"
            required
            className="
              w-full px-4 py-3 
              rounded-lg 
              border border-border 
              bg-background 
              text-foreground text-sm
              focus:outline-none 
              focus:ring-2 focus:ring-accent/40
              transition-all
            "
          />

          <Button
            className="
              w-full mt-5 
              bg-accent text-white 
              hover:scale-105 
              transition-all duration-300
            "
          >
            <Target size={16} /> Take the Pledge
          </Button>
        </form>
      )}
    </AnimatedSection>

  </div>
</section>

      {/* 🔷 RESUME CTA */}
<section id="resume" className="bg-navy section-padding relative overflow-hidden">
  <div className="container mx-auto text-center max-w-3xl relative z-10">

    {/* 🔷 Icon */}
    <Upload className="mx-auto text-accent mb-6" size={50} />

    {/* 🔷 Heading */}
    <h2 className="font-display text-3xl md:text-5xl text-white leading-tight">
      Upload Your <span className="text-accent italic">Resume</span>
    </h2>

    {/* 🔷 Subtext */}
    <p className="text-baby-blue/80 mt-5 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
      Join the SHE talent pool and get matched with companies actively hiring
      intentional, high-impact leaders like you.
    </p>

    {/* 🔷 CTA Button */}
 <Button
  size="lg"
  className="
    mt-10 px-8 py-4 
    bg-accent text-white 
    rounded-full 
    hover:bg-sky-600 hover:shadow-lg 
    hover:scale-105 
    transition-all duration-300 
    shadow-lg
  "
  asChild
>
  <Link to="/contact">
    <Upload size={16} /> Upload Resume
  </Link>
</Button>

    {/* 🔷 Micro trust line */}
    <p className="text-xs text-baby-blue/60 mt-4">
      Takes less than 2 minutes • Secure upload
    </p>
  </div>

  {/* 🔷 Background Glow Effect */}
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
    <div className="w-[400px] h-[400px] bg-accent/20 blur-3xl rounded-full opacity-30"></div>
  </div>
</section>

      
      {/* 🔷 SHE CARES */}
<section className="section-padding bg-background relative overflow-hidden">
  <div className="container mx-auto">

    {/* 🔷 Heading */}
    <AnimatedSection className="text-center mb-16">
      <Heart className="mx-auto text-accent mb-5" size={44} />

      <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
        SHE Cares <span className="text-accent italic">Nonprofit</span>
      </h2>

      <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
        Empowering women at every stage from career growth to mental wellness
        through meaningful support, mentorship, and community.
      </p>
    </AnimatedSection>

    {/* 🔷 Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {[
        {
          icon: BookOpen,
          title: "Resume Building",
          desc: "Professional resume workshops and 1-on-1 reviews to elevate your leadership story.",
        },
        {
          icon: Brain,
          title: "Mental Health",
          desc: "Access wellness resources, peer support, and guided sessions during transitions.",
        },
        {
          icon: Users,
          title: "Mentoring Cohorts",
          desc: "Grow alongside ambitious women, guided by experienced industry leaders.",
        },
      ].map((item, i) => (
        <AnimatedSection key={item.title} delay={i * 0.1}>
          <div
            className="
              h-full p-8 rounded-2xl 
              bg-card border border-border 
              text-center
              transition-all duration-300 
              hover:-translate-y-2 hover:shadow-xl
              group
            "
          >
            <item.icon
              className="
                mx-auto text-accent mb-5 
                transition-transform duration-300 
                group-hover:scale-110
              "
              size={34}
            />

            <h3 className="font-display text-lg font-semibold text-foreground">
              {item.title}
            </h3>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </div>
        </AnimatedSection>
      ))}
    </div>

    {/* 🔷 CTA */}
    <div className="text-center mt-14">
      <Button
        size="lg"
        className="
          px-8 py-4 
          bg-accent text-white 
          rounded-full 
          hover:bg-sky-600 hover:shadow-lg
          hover:scale-105 
          transition-all duration-300 
          shadow-lg
        "
      >
        <Heart size={16} /> Support SHE Cares
      </Button>

      <p className="text-xs text-muted-foreground mt-3">
        Support initiatives that create real impact
      </p>
    </div>

  </div>

  {/* 🔷 Subtle background glow */}
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
    <div className="w-[500px] h-[500px] bg-accent/10 blur-3xl rounded-full opacity-30"></div>
  </div>
</section>

<FooterSection/>

     
    </div>
  );
};

export default ShesHired;