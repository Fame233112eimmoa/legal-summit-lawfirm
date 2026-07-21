'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { practiceAreaItems } from '../lib/site-data';

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  practiceArea: string;
  message: string;
};

const initialValues: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  practiceArea: practiceAreaItems[0]?.title ?? '',
  message: '',
};

export default function ContactForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'We could not send your message. Please try again.');
      }

      setFormValues(initialValues);
      setFeedback({
        type: 'success',
        message: result.message || 'Thank you. Your consultation request has been received.',
      });
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="site-card-solid rounded-[2rem] p-8 text-left sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[#3d3128]">Full Name</span>
          <input
            required
            autoComplete="name"
            name="fullName"
            type="text"
            value={formValues.fullName}
            onChange={handleChange}
            className="site-input"
            placeholder="Your full name"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-[#3d3128]">Email Address</span>
          <input
            required
            autoComplete="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            className="site-input"
            placeholder="name@example.com"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-[#3d3128]">Phone Number</span>
          <input
            autoComplete="tel"
            name="phone"
            type="tel"
            value={formValues.phone}
            onChange={handleChange}
            className="site-input"
            placeholder="+1 (702) 000-0000"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-[#3d3128]">Practice Area</span>
          <select
            required
            name="practiceArea"
            value={formValues.practiceArea}
            onChange={handleChange}
            className="site-input"
          >
            {practiceAreaItems.map((practiceArea) => (
              <option key={practiceArea.title} value={practiceArea.title}>
                {practiceArea.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-6 block space-y-2">
        <span className="text-sm font-semibold text-[#3d3128]">How can we help?</span>
        <textarea
          required
          name="message"
          rows={6}
          value={formValues.message}
          onChange={handleChange}
          className="site-input min-h-[168px] rounded-[1.6rem]"
          placeholder="Briefly describe your matter, your priorities, and any timing concerns."
        />
      </label>

      <p className="site-text-soft mt-4 text-sm leading-6">
        By submitting this form, you agree to be contacted about your enquiry. All information is handled with care, discretion, and professional attention.
      </p>

      {feedback ? (
        <p
          className={`mt-4 rounded-2xl px-4 py-3 text-sm ${
            feedback.type === 'success'
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-rose-50 text-rose-700'
          }`}
        >
          {feedback.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="site-button-primary mt-6 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Sending Request...' : 'Schedule Consultation'}
      </button>
    </form>
  );
}
