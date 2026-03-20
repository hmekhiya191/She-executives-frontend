import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Shield,
  CheckCircle,
  ArrowRight,
  FileText,
  Scale,
  TrendingUp,
  Calculator,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";


import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";

import servicesPlacement from "@/assets/hero1.jpg";
import servicesDirecthire from "@/assets/services-directhire.jpg";
import servicesConsulting from "@/assets/services-consulting.jpg";
import FooterSection from "./FooterSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* 🔷 HERO */}
      <section className="gradient-hero pt-32 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Lines of Business
            </p>

            <h1 className="font-display text-4xl md:text-6xl text-white mb-6">
              Our <span className="italic text-accent">Services</span>
            </h1>

            <p className="text-baby-blue/80 text-sm md:text-base leading-relaxed">
            We don’t just fill roles; we engineer inclusive talent ecosystems. From executive search to Diversity, Equity, Inclusion & Belonging (DEIB) strategy, She Executives is where Fortune 500 companies come to build their next great hire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔷 EXECUTIVE PLACEMENT */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <AnimatedSection direction="left">
<div className="relative rounded-2xl overflow-hidden group">
  <img
    src={servicesPlacement}
    className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90 brightness-90"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-navy-deep/20 transition-opacity duration-500 group-hover:opacity-0" />
</div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-accent" size={28} />
              <p className="text-xs tracking-[0.3em] uppercase text-accent">
                For Fortune 500 & Progressive Companies
              </p>
            </div>

            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Executive Placement
            </h2>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              We strategically place women leaders in C-suite and senior
              positions at organizations committed to gender diversity.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "C-suite & VP-level women leadership placement",
                "DEIB strategy alignment & consulting",
                "Wage gap negotiation advocacy",
                "Cultural fit & leadership assessment",
                "90-day onboarding support",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <CheckCircle className="text-accent mt-1" size={16} />
                  {item}
                </li>
              ))}
            </ul>

            <Button className="mt-8" asChild>
              <Link to="/contact">
                Partner With Us <ArrowRight size={16} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* 🔷 DIRECT HIRE */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-accent" size={28} />
              <p className="text-xs tracking-[0.3em] uppercase text-accent">
                For Growing Organizations
              </p>
            </div>

            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Direct Hire Roles
            </h2>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Permanent positions for growth-minded professionals. We connect
              exceptional talent with companies building diverse teams.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Permanent full-time placement",
                "Skills-based matching",
                "Industry-specific talent pools",
                "Interview preparation",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <CheckCircle className="text-accent mt-1" size={16} />
                  {item}
                </li>
              ))}
            </ul>

            <Button className="mt-8" asChild>
              <Link to="/shes-hired">
                Tell Us About Your Role <ArrowRight size={16} />
              </Link>
            </Button>
          </AnimatedSection>

          <AnimatedSection direction="right" className="order-1 lg:order-2">
<div className="relative rounded-2xl overflow-hidden group">
  <img
    src={servicesDirecthire}
    className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90 brightness-90"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-navy-deep/20 transition-opacity duration-500 group-hover:opacity-0" />
</div>
          </AnimatedSection>
        </div>
      </section>

      {/* 🔷 HR CONSULTING */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <AnimatedSection direction="left">
<div className="relative rounded-2xl overflow-hidden group">
  <img
    src={servicesConsulting}
    className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90 brightness-90"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-navy-deep/20 transition-opacity duration-500 group-hover:opacity-0" />
</div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-accent" size={28} />
              <p className="text-xs tracking-[0.3em] uppercase text-accent">
                For Small Businesses
              </p>
            </div>

            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              HR Consulting
            </h2>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Your complete HR department, outsourced. From compliance to culture
              building, we handle everything.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
  { icon: FileText, label: "Employee Handbooks" },      // ✅ Perfect
  { icon: Scale, label: "Compliance & Audits" },        // ✅ Legal balance
  { icon: TrendingUp, label: "Wage Strategy" },         // 🔥 better than DollarSign (more strategic)
  { icon: HeartHandshake, label: "Employee Relations" },         // 🔥 cleaner than HeartHandshake
  { icon: Calculator, label: "Payroll" },               // 🔥 MUCH better than GraduationCap
  { icon: ShieldCheck, label: "Benefits Admin" },       // 🔥 trust + protection vibe
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm">
                  <item.icon size={16} className="text-accent" />
                  {item.label}
                </div>
              ))}
            </div>

            <Button className="mt-8" asChild>
              <Link to="/contact">
                Get a Consultation <ArrowRight size={16} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Services;