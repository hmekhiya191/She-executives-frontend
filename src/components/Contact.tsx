import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Paperclip, Instagram, Facebook, Linkedin  } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useEffect } from "react";
import "@/components/Hero.css"



const Contact = () => {
const [service, setService] = useState("");
const [fileName, setFileName] = useState("");
const [resumeName, setResumeName] = useState("");
const [course, setCourse] = useState("");
const [date, setDate] = useState("");
const [time, setTime] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [customSubject, setCustomSubject] = useState("");
const [pledge, setPledge] = useState("");
const [company, setCompany] = useState("");
const [attachment, setAttachment] = useState(null);
const [resume, setResume] = useState(null);
const [amount, setAmount] = useState("");

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [submittedName, setSubmittedName] = useState("");

useEffect(() => {
  if (success) {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 10000);

    return () => clearTimeout(timer);
  }
}, [success]);

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    setFileName(e.target.files[0].name);
  }
};



const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  

  try {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("company", company);
    formData.append("service", service);
    formData.append("course", course);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("pledge", pledge);
    formData.append("customSubject", customSubject);
    formData.append("amount", amount);
    

    if (attachment) formData.append("attachment", attachment);
    if (resume) formData.append("resume", resume);

const res = await fetch("https://sheexecutives-backend.onrender.com/send-email", {
  method: "POST",
  body: formData,
});

const text = await res.text();
console.log(text);

    if (!res.ok) throw new Error("Failed request");

    const result = await res.json();

    if (result.success) {
      setSubmittedName(name);
      setSuccess(true);

      // reset
      setName("");
      setEmail("");
      setMessage("");
      setService("");
      setCourse("");
      setCompany("");
      setDate("");
      setTime("");
      setPledge("");
      setCustomSubject("");
      setFileName("");
      setAmount("");
      setResumeName("");
      setAttachment(null);
      setResume(null);
    } else {
      alert("Failed to send message");
    }

  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  } finally {
    setLoading(false); // ✅ always stops spinner
  }
};
  

  return (
    <div className=" bg-white">


      {/* <section className="py-24 bg-gradient-to-br from-[#0f172a] to-[#164e63]"> */}
      <section className="py-24 gradient-hero relative overflow-hidden">   
        <div className="pt-10 max-w-4xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Let's <span className="text-sky-400">Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/80"
          >
            Ready to transform your team? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4">

          {/* LEFT INFO */}
          {/* LEFT INFO */}
<ScrollReveal direction="left">
  <div>
    
    {/* Premium faded divider */}
    <div className="w-24 h-[2px] mb-6 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-80"></div>

    <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
      Get in Touch
    </h2>

    <p className="text-gray-600 leading-relaxed mb-10">
      Whether you're looking for executive talent, need HR consulting, 
      or want to join the She's Hired movement—reach out today.
    </p>

    {/* CONTACT INFO */}
    <div className="space-y-6 mb-10">

      {/* Address */}
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-sky-100 flex items-center justify-center text-sky-500">
          <MapPin size={20} />
        </div>
        <div>
          <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-1">
            Address
          </p>
          <p className="text-gray-800 font-medium">
            El Segundo, California, United States
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-sky-100 flex items-center justify-center text-sky-500">
          <Mail size={20} />
        </div>
        <div>
          <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-1">
            Email
          </p>
          <p className="text-gray-800 font-medium">
            hrsolutions@sheexecutives.com
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-sky-100 flex items-center justify-center text-sky-500">
          <Phone size={20} />
        </div>
        <div>
          <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-1">
            Phone
          </p>
          <p className="text-gray-800 font-medium">
            866-568-0773
          </p>
        </div>
      </div>

    </div>

    {/* COVERAGE */}
    <div className="mb-10">
      <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-2">
        Coverage
      </p>
      <p className="text-gray-800 font-medium">
        All US States & Canada
      </p>
    </div>

    {/* BUSINESS HOURS */}
    <div className="mb-10">
      <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-3">
        Business Hours
      </p>

      <div className="text-sm text-gray-800 space-y-1">
        <p>
          Monday – Friday: <span className="font-medium">9:00 AM – 5:00 PM</span>
        </p>
        <p>
          Saturday – Sunday: <span className="text-gray-500">Closed</span>
        </p>
      </div>
    </div>

    {/* BOOKING */}
    {/* <a
      href="https://sheexecutives.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sky-500 font-medium text-sm hover:underline mb-10"
    >
      Schedule a free consultation →
    </a> */}

    {/* SOCIAL */}
    <div>
      <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-4">
        Connect With Us
      </p>

      <div className="flex gap-5">
        
        <a href="https://www.instagram.com/sheexecutives/" target="_blank" className="text-gray-500 hover:text-sky-500 transition">
          <Instagram size={24} />
        </a>

        <a href="https://www.facebook.com/Sheexecutives/#" target="_blank" className="text-gray-500 hover:text-sky-500 transition">
          <Facebook size={24} />
        </a>

        <a href="https://www.linkedin.com/company/she-executives/" target="_blank" className="text-gray-500 hover:text-sky-500 transition">
          <Linkedin size={24} />
        </a>

      </div>
    </div>

  </div>
</ScrollReveal>

          {/* RIGHT FORM */}
<ScrollReveal direction="right">
  <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-sky-100 shadow-xl p-8">


{success ? (
  <div className="relative text-center py-16 px-6 animate-fadeIn scale-100">

    {/* CLOSE BUTTON */}
    <button
      onClick={() => setSuccess(false)}
      className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
    >
      ✕
    </button>

    {/* ICON */}
    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sky-100 flex items-center justify-center">
      <span className="text-sky-500 text-2xl">✓</span>
    </div>

    {/* MESSAGE */}
    <h2 className="text-2xl font-semibold text-gray-900 mb-3">
      Hello {submittedName || "there"} 👋
    </h2>

    <p className="text-gray-600 mb-2">
      Thank you for contacting <span className="font-medium">She's Executives</span>.
    </p> <br />
 
    <p className="text-gray-600">
      We’ve received your request and our team will get in touch with you shortly.
    </p><br />

    <p className="text-gray-600 mb-2">
      Team <span className="font-medium">She's Executives</span>.
    </p> <br />
  </div>
) : (
  <>
    {/* STATE */}
    <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Row */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <label className="text-sm text-gray-700 mb-2 block">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
              />
            </div>

            {/* Company (optional) */}
            <div>
              <label className="text-sm text-gray-700 mb-2 block">
                Company <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your company"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-700 mb-2 block">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
            />
          </div>

          {/* Select */}
          <div>
            <label className="text-sm text-gray-700 mb-2 block">
              How Can We Help?
            </label>
            <select
              value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  setCourse("");
                  setResumeName("");
                  setDate("");
                  setTime("");
                }}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
            >
              <option value="">Select an option</option>
              <option>Schedule a Free Consultation</option>
              <option>Executive Placement</option>
              <option>Direct Hire</option>
              <option>HR Consulting</option>
              <option>E-Learning</option>
              <option>She's Hired Campaign</option>
              <option>SHE Cares</option>
              <option>Other</option>
            </select>
          </div>

          {/* 👇 SHOW ONLY WHEN "OTHER" */}
          {service === "Other" && (
            <div className="animate-fadeIn">
              <label className="text-sm text-gray-700 mb-2 block">
                Subject / Details
              </label>
              <input
                  type="text"
                value={customSubject}
                onChange={(e) => setCustomSubject(e.target.value)}
                placeholder="Please specify your request..."
                className="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
              />
            </div>
          )}

          {/* 👇 SHOW ONLY WHEN "OTHER" */}
          {service === "Schedule a Free Consultation" && (
            <div className="space-y-4 animate-fadeIn">

              {/* Date */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">
                  Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
                />
              </div>

              {/* Time */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">
                  Select Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
                />
              </div>

            </div>
          )}

          {/* 👇 SHOW ONLY WHEN E-LEARNING */}
          {service === "E-Learning" && (
              <div className="animate-fadeIn">
                <label className="text-sm text-gray-700 mb-2 block">
                  Select Course
                </label>

                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
                >
                  <option value="">Choose a course</option>
                  <option>Women Learning Together</option>
                  <option>Learn Together, Grow With Mentors</option>
                  <option>Inclusive Leadership Masterclass</option>
                  <option>Compensation & Pay Equity Lab</option>
                  <option>DEIB Strategy Bootcamp</option>
                  <option>Resume & Interview Power Hour</option>
                </select>
              </div>
            )}


          {/* 👇 SHOW ONLY WHEN SHE's HIRED */}
          {service === "She's Hired Campaign" && (
            <div className="space-y-4 animate-fadeIn">

             
             {/* Pledge */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">
                  Take the Pledge
                </label>
                <textarea
                    rows={2}
                  value={pledge}
                  onChange={(e) => setPledge(e.target.value)}
                  placeholder="Write your pledge..."
                  className="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition resize-none"
                />
              </div>
            </div>
          )}


          {/* Message */}
          <div>
            <label className="text-sm text-gray-700 mb-2 block">
              Message
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your needs..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition resize-none"
            />
          </div>
            

          {/* 👇 SHOW ONLY WHEN SHE's HIRED */}
          {service === "She's Hired Campaign" && (
            <div className="space-y-4 animate-fadeIn">
              
            {/* 💰 Donation Amount */}
            <div>
              <label className="text-sm text-gray-700 mb-2 block">
                Share Your Support for She’s Hired Campaign. (USD)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount (USD)"
                className="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
              />
            </div>
                        

              {/* Resume Upload */}
              <div>
                <label className="text-sm text-gray-700 mb-2 block">
                  Upload Resume
                </label>

                <label className="flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-sky-300 rounded-lg cursor-pointer hover:bg-sky-50 transition">
                  <Paperclip size={16} className="text-sky-500" />
                  <span className="text-sm text-gray-600">
                    {resumeName || "Upload resume"}
                  </span>

                  <input
                    type="file"
                      key={fileName} // 👈 forces reset
                    className="hidden"
                    onChange={(e: any) => {
                      if (e.target.files[0]) {
                        setResumeName(e.target.files[0].name);
                        setResume(e.target.files[0]);
                      }
                    }}
                  />
                </label>
              </div>

            </div>
          )}

          {/* FILE UPLOAD */}
          <div>
            <label className="text-sm text-gray-700 mb-2 block">
              Attachment (optional)
            </label>

            <label className="flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-sky-300 rounded-lg cursor-pointer hover:bg-sky-50 transition">
              <Paperclip size={16} className="text-sky-500" />
              <span className="text-sm text-gray-600">
                {fileName || "Upload file"}
              </span>

              <input
                type="file"
                  key={fileName} // 👈 forces reset
                className="hidden"
                onChange={(e: any) => {
                  if (e.target.files[0]) {
                    setFileName(e.target.files[0].name);
                    setAttachment(e.target.files[0]);
                  }
                }}
              />
            </label>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-600 transition disabled:opacity-50"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </form>
 </>
    )}
  </div>
</ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;