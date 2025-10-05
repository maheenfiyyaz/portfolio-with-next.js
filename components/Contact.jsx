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
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setStatus('Message sent — thanks!');
        setForm({
          fullName: '',
          email: '',
          phone: '',
          projectType: '',
          language: '',
          budget: '',
          message: '',
        });
      } else {
        setStatus('Failed to send (server).');
      }
    } catch (err) {
      setStatus('Network error.');
    }
  }

  return (
    <section id="contact" className="py-24 px-8 bg-[var(--second-bg-color)] text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Contact <span className="text-blue-500">Me</span>
      </h2>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto grid gap-6">
        
        {/* Name & Email: Mobile par ek column, Desktop par do columns */}
        <div className="flex flex-col md:flex-row gap-4"> 
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name *"
            // Updated: w-full for small screens, md:flex-1 for large screens
            className="w-full md:flex-1 p-4 rounded-lg bg-[var(--bg-color)] border border-blue-500 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address *"
            // Updated: w-full for small screens, md:flex-1 for large screens
            className="w-full md:flex-1 p-4 rounded-lg bg-[var(--bg-color)] border border-blue-500 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone & Project Type: Mobile par ek column, Desktop par do columns */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            // Updated: w-full for small screens, md:flex-1 for large screens
            className="w-full md:flex-1 p-4 rounded-lg bg-[var(--bg-color)] border border-blue-500 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            // Updated: w-full for small screens, md:flex-1 for large screens
            className="w-full md:flex-1 p-4 rounded-lg bg-[var(--bg-color)] border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Project Type *</option>
            <option value="Personal Website">Personal Website</option>
            <option value="Business Website">Business Website</option>
            <option value="E-commerce / Online Store">E-commerce / Online Store</option>
            <option value="Portfolio / Resume Website">Portfolio / Resume Website</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Language & Budget: Mobile par ek column, Desktop par do columns */}
        <div className="flex flex-col md:flex-row gap-4">
          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            // Updated: w-full for small screens, md:flex-1 for large screens
            className="w-full md:flex-1 p-4 rounded-lg bg-[var(--bg-color)] border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Preferred Technology / Language *</option>
            <option value="HTML, CSS, JS">HTML, CSS, JS</option>
            <option value="React / React Native">React / React Native</option>
            <option value="Next.js">Next.js</option>
            <option value="MERN Stack">MERN Stack</option>
            <option value="WordPress / Digital Marketing">WordPress / Digital Marketing</option>
          </select>

          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            // Updated: w-full for small screens, md:flex-1 for large screens
            className="w-full md:flex-1 p-4 rounded-lg bg-[var(--bg-color)] border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Budget Range *</option>

            {/* Portfolio / Personal Website */}
            <option value="$20 - $50">$20 - $50 (Portfolio / Resume - Basic)</option>
            <option value="$30 - $70">$30 - $70 (Personal Website - Simple)</option>

            {/* Business Website */}
            <option value="$50 - $100">$50 - $100 (Business Website - Basic)</option>
            <option value="$80 - $150">$80 - $150 (Business Website - React/Next.js)</option>

            {/* E-commerce */}
            <option value="$80 - $150">$80 - $150 (E-commerce - Basic Store)</option>
            <option value="$120 - $250">$120 - $250 (E-commerce - React/Next.js)</option>
            <option value="$200 - $400">$200 - $400 (E-commerce - MERN Stack)</option>

            {/* Other / Custom */}
            <option value="$30 - $300">$30 - $300 (Custom Project - Depends)</option>
          </select>
        </div>

        {/* Message: Full Width */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="6"
          className="p-4 rounded-lg bg-[var(--bg-color)] border border-blue-500 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* Submit */}
        <button
          type="submit"
          className="self-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-900 via-sky-600 to-blue-400 text-white font-semibold hover:scale-105 transition duration-300"
        >
          Submit
        </button>

        {/* Status */}
        {status && <p className="text-center mt-2 text-blue-300">{status}</p>}
      </form>
    </section>
  );
}