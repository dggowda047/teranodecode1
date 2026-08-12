import { useState, type FormEvent } from 'react';
import { Mail, Globe, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { supabase } from '../lib/supabase';

const industryOptions = [
  'Enterprise & Corporate',
  'Education',
  'Healthcare',
  'Manufacturing',
  'Government & Public Sector',
  'Smart Buildings',
  'Other',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: (formData.get('name') as string)?.trim(),
      company: (formData.get('company') as string)?.trim() || null,
      email: (formData.get('email') as string)?.trim(),
      phone: (formData.get('phone') as string)?.trim() || null,
      industry: (formData.get('industry') as string) || null,
      project_goals: (formData.get('project_goals') as string)?.trim() || null,
      message: (formData.get('message') as string)?.trim() || null,
    };

    if (!payload.name || !payload.email) {
      setStatus('error');
      setErrorMsg('Please provide at least your name and email.');
      return;
    }

    const { error } = await supabase.from('contact_submissions').insert(payload);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong submitting your request. Please try again or email us directly.');
      return;
    }

    setStatus('success');
    e.currentTarget.reset();
  };

  return (
    <div>
      <PageHero
        label="Contact"
        title={<>Let's Start the <span className="text-gradient">Conversation</span></>}
        subtitle="Whether you're exploring digital transformation, intelligent collaboration environments, AI adoption, or operational modernization, we're here to help."
      />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact info */}
            <Reveal className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-xl font-bold text-white">Contact Information</h2>
                  <p className="mt-2 text-sm text-ink-400">
                    Reach out directly or use the form — we typically respond within one business day.
                  </p>
                </div>

                <div className="card p-6 space-y-5">
                  {[
                    { icon: Mail, label: 'Email', value: 'info@teranode1.com', href: 'mailto:info@teranode1.com' },
                    { icon: Globe, label: 'Website', value: 'teranode1.com' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600/15 border border-brand-600/30 text-brand-400">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a href={item.href} className="mt-0.5 block text-sm text-ink-100 hover:text-brand-300 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <div className="mt-0.5 text-sm text-ink-100">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-ink-800 bg-gradient-to-br from-brand-950/40 to-ink-900 p-6">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-600/20 blur-[60px]" />
                  <div className="relative">
                    <h3 className="font-display text-base font-semibold text-white">
                      A Business Transformation & Intelligent Environments Company
                    </h3>
                    <p className="mt-2 text-sm text-ink-400 leading-relaxed">
                      Consulting, managed services, projects, and platforms — all under one integrated framework.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={150} className="lg:col-span-3">
              <div className="card p-7 sm:p-9">
                <h2 className="font-display text-xl font-bold text-white">Consultation Request Form</h2>
                <p className="mt-2 text-sm text-ink-400">
                  Tell us about your goals and we'll get back to you to schedule a consultation.
                </p>

                {status === 'success' ? (
                  <div className="mt-8 flex flex-col items-center justify-center text-center py-12">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600/15 border border-brand-600/30 text-brand-400">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mt-5">
                      Thank you for reaching out
                    </h3>
                    <p className="mt-2 text-sm text-ink-400 max-w-sm">
                      Your consultation request has been received. A member of our team will be in touch shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-secondary mt-8"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-ink-300 mb-2">
                          Name <span className="text-brand-400">*</span>
                        </label>
                        <input id="name" name="name" type="text" required className="input-field" placeholder="Your full name" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-medium text-ink-300 mb-2">
                          Company
                        </label>
                        <input id="company" name="company" type="text" className="input-field" placeholder="Your organization" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-ink-300 mb-2">
                          Email <span className="text-brand-400">*</span>
                        </label>
                        <input id="email" name="email" type="email" required className="input-field" placeholder="you@company.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-ink-300 mb-2">
                          Phone
                        </label>
                        <input id="phone" name="phone" type="tel" className="input-field" placeholder="+1 (000) 000-0000" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-xs font-medium text-ink-300 mb-2">
                        Industry
                      </label>
                      <select id="industry" name="industry" className="input-field" defaultValue="">
                        <option value="" disabled>Select your industry</option>
                        {industryOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="project_goals" className="block text-xs font-medium text-ink-300 mb-2">
                        Project Goals
                      </label>
                      <input id="project_goals" name="project_goals" type="text" className="input-field" placeholder="Brief summary of what you want to achieve" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-ink-300 mb-2">
                        Message
                      </label>
                      <textarea id="message" name="message" rows={5} className="input-field resize-none" placeholder="Tell us more about your project, timeline, and any specific requirements..." />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
                        <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-300">{errorMsg}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Submit Request
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
