'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  }

  return (
    <div className="max-w-screen-sm mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Contact</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          For inquiries regarding commissions, exhibitions, or general questions, please use the form below.
        </p>
      </div>

      {status === 'success' ? (
        <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 p-6 rounded-lg text-center">
          <h3 className="text-lg font-bold mb-2">Message Sent</h3>
          <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-4 text-sm underline hover:text-green-900 dark:hover:text-green-100"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">Name</label>
            <input
              type="text"
              id="name"
              required
              className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-sm focus:ring-neutral-500 focus:border-neutral-500 block w-full p-3 dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-400 dark:text-white"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">Email</label>
            <input
              type="email"
              id="email"
              required
              className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-sm focus:ring-neutral-500 focus:border-neutral-500 block w-full p-3 dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-400 dark:text-white"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">Message</label>
            <textarea
              id="message"
              rows={5}
              required
              className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-sm focus:ring-neutral-500 focus:border-neutral-500 block w-full p-3 dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-400 dark:text-white"
              placeholder="Your message..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex justify-center items-center px-5 py-3 text-sm font-medium text-center text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 rounded-sm focus:ring-4 focus:outline-none focus:ring-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'submitting' ? 'Sending...' : (
              <>
                Send Message <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
