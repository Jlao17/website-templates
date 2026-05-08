"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import type { ContactConfig } from "@/config/types";

interface ContactProps {
  config: ContactConfig;
  id?: string;
}

export default function Contact({ config, id = "contact" }: ContactProps) {
  const { heading, subheading, contact, openingHours, showContactForm } = config;
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, send the form data to a backend or email service
    setSubmitted(true);
  };

  return (
    <section id={id} className="py-20 lg:py-28 bg-muted" aria-label="Contact section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading heading={heading} subheading={subheading} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h3 className="font-heading font-semibold text-foreground text-xl mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground text-sm">{contact.address}</p>
                    {contact.mapUrl && (
                      <a
                        href={contact.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:text-primary-dark transition-colors font-medium"
                      >
                        Get Directions →
                      </a>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a href={`tel:${contact.phone}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            {openingHours.length > 0 && (
              <div>
                <h3 className="font-heading font-semibold text-foreground text-xl mb-4">
                  Opening Hours
                </h3>
                <dl className="space-y-2">
                  {openingHours.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <dt className="text-foreground font-medium">{item.day}</dt>
                      <dd className="text-muted-foreground">{item.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          {/* Contact Form */}
          {showContactForm && (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-secondary/60">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Thank you for reaching out. We&apos;ll get back to you shortly.
                  </p>
                  <button
                    className="mt-6 text-primary text-sm font-medium hover:text-primary-dark transition-colors"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading font-semibold text-foreground text-xl mb-6">
                    Send a Message
                  </h3>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-secondary bg-white text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-secondary bg-white text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-secondary bg-white text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full justify-center rounded-xl">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
