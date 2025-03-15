"use client";
import { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    window.location.href = `mailto:randy.as.a.freelancer@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
  };

  return (
    <main className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="bg-white/10 rounded-lg p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-[#d19a53] mb-8">Contact Us</h1>

        <div className="mb-8 text-gray-200">
          <p>Have a question or feedback? We'd love to hear from you. Fill out the form below to get in touch with us.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-200 mb-2">Name</label>
            <input
              type="text"
              id="name"
              required
              className="w-full p-3 rounded bg-black/30 border border-gray-700 text-gray-200 focus:outline-none focus:border-[#d19a53]"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
            <input
              type="email"
              id="email"
              required
              className="w-full p-3 rounded bg-black/30 border border-gray-700 text-gray-200 focus:outline-none focus:border-[#d19a53]"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-200 mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              required
              className="w-full p-3 rounded bg-black/30 border border-gray-700 text-gray-200 focus:outline-none focus:border-[#d19a53]"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-200 mb-2">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full p-3 rounded bg-black/30 border border-gray-700 text-gray-200 focus:outline-none focus:border-[#d19a53]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#d19a53] text-white font-bold py-3 px-6 rounded hover:bg-[#b88544] transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>You can also reach us directly at:</p>
          <a 
            href="mailto:randy.as.a.freelancer@gmail.com" 
            className="text-[#d19a53] hover:underline"
          >
            randy.as.a.freelancer@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a href="/" className="text-[#d19a53] hover:underline">
          ← Back to Home
        </a>
      </div>
    </main>
  );
} 