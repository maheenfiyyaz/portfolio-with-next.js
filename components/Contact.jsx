'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    language: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.projectType || !form.language || !form.budget) {
      setStatus('Please fill all required fields.');
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Message sent — thanks!');
        setForm({ fullName: '', email: '', phone: '', projectType: '', language: '', budget: '', message: '' });
      } else {
        setStatus('Failed to send (server).');
      }
    } catch {
      setStatus('Network error.');
    }
  }

  const inputClass =
    "w-full p-4 rounded-lg bg-[#0F172A] border border-[#6FA3B840] placeholder-[#9ED0E0]/60 text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#9ED0E0] focus:border-transparent transition";

  const selectClass =
    "w-full p-4 rounded-lg bg-[#0F172A] border border-[#6FA3B840] text-[#F8FAFC]/80 focus:outline-none focus:ring-2 focus:ring-[#9ED0E0] focus:border-transparent transition";

  return (
    <section id="contact" className="py-24 px-8 bg-[#0F172A] text-[#F8FAFC]">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Contact{' '}
        <span className="bg-gradient-to-r from-[#6FA3B8] via-[#9ED0E0] to-[#F8FAFC] bg-clip-text text-transparent">
          Me
        </span>
      </h2>

      <p className="text-[#9ED0E0] text-center text-lg mb-14">
        Got a project in mind? Let’s build something great together.
      </p>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto grid gap-6">

        <div className="flex flex-col md:flex-row gap-4">
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name *"
            className={inputClass}
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address *"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className={inputClass}
          />

          <select name="projectType" value={form.projectType} onChange={handleChange} className={selectClass}>
            <option value="">Select Project Type *</option>
            <option disabled>── Development ──</option>
            <option value="Personal Website">Personal Website</option>
            <option value="Business Website">Business Website</option>
            <option value="E-commerce / Online Store">E-commerce / Online Store</option>
            <option value="Portfolio Website">Portfolio Website</option>
            <option value="MERN Stack App">MERN Stack App</option>

            <option disabled>── Graphic Design ──</option>
            <option value="Logo & Brand Identity">Logo & Brand Identity</option>
            <option value="Social Media Design">Social Media Design</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Poster / Flyer Design">Poster / Flyer Design</option>
            <option value="Other Design Work">Other Design Work</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <select name="language" value={form.language} onChange={handleChange} className={selectClass}>
            <option value="">Service / Technology *</option>
            <option disabled>── Development ──</option>
            <option value="HTML, CSS, JS">HTML, CSS, JS</option>
            <option value="React / Next.js">React / Next.js</option>
            <option value="MERN Stack">MERN Stack</option>

            <option disabled>── Design ──</option>
            <option value="Adobe Illustrator">Adobe Illustrator</option>
            <option value="Adobe Photoshop">Adobe Photoshop</option>
            <option value="Figma (UI/UX)">Figma (UI/UX)</option>
            <option value="Canva">Canva</option>
          </select>

          <select name="budget" value={form.budget} onChange={handleChange} className={selectClass}>
            <option value="">Budget Range *</option>

            <option disabled>── Development ──</option>
            <option value="$20 - $50">$20 – $50 (Basic)</option>
            <option value="$50 - $100">$50 – $100 (Business Website)</option>
            <option value="$80 - $150">$80 – $150 (React / Next.js)</option>
            <option value="$120 - $250">$120 – $250 (E-commerce)</option>
            <option value="$200 - $400">$200 – $400 (MERN App)</option>

            <option disabled>── Graphic Design ──</option>
            <option value="$10 - $30">$10 – $30 (Logo)</option>
            <option value="$30 - $80">$30 – $80 (Brand Identity)</option>
            <option value="$20 - $60">$20 – $60 (Social Media)</option>
            <option value="$50 - $150">$50 – $150 (UI/UX)</option>
            <option value="Custom">Custom / Let’s Talk</option>
          </select>
        </div>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          rows="6"
          className={inputClass}
        />

        <button
          type="submit"
          className="self-center px-10 py-3 rounded-full bg-[#6FA3B8] text-white font-semibold
          hover:bg-[#88bfd6] hover:shadow-[0_0_25px_#6FA3B880] hover:scale-105 transition"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center mt-2 text-[#9ED0E0]">{status}</p>
        )}
      </form>
    </section>
  );
}