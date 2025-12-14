'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

type Dictionary = {
    contact: {
        title: string;
        successTitle: string;
        successMessage: string;
        sendAnother: string;
        nameLabel: string;
        emailLabel: string;
        messageLabel: string;
        submitButton: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        messagePlaceholder: string;
    };
};

export default function Contact({ dict }: { dict: Dictionary }) {
    const searchParams = useSearchParams();
    const [submitted, setSubmitted] = useState(false);
    const [nextUrl, setNextUrl] = useState('');

    useEffect(() => {
        // Set the redirect URL to the current page with a success query param
        if (typeof window !== 'undefined') {
            setNextUrl(`${window.location.origin}/?success=true#contact`);
        }

        // Check if we just returned from a successful submission
        if (searchParams.get('success') === 'true') {
            setSubmitted(true);
        }
    }, [searchParams]);

    return (
        <section id="contact" className="py-20 px-6 bg-gray-50">
            <div className="max-w-xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{dict.contact.title}</h2>

                {submitted ? (
                    <div className="text-center p-12 bg-white rounded-2xl shadow-sm border border-green-100 animate-fade-in">
                        <h3 className="text-2xl font-bold text-green-600 mb-4">{dict.contact.successTitle}</h3>
                        <p className="text-gray-600">
                            {dict.contact.successMessage}
                        </p>
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                window.history.replaceState({}, '', '/'); // Clear query param
                                setSubmitted(false);
                            }}
                            className="mt-8 inline-block px-6 py-2 text-sm text-gray-500 hover:text-gray-900 underline cursor-pointer"
                        >
                            {dict.contact.sendAnother}
                        </a>
                    </div>
                ) : (
                    <form
                        action="https://formsubmit.co/sugaharataisuke0518@gmail.com"
                        method="POST"
                        className="space-y-6"
                    >
                        {/* 
              Spam Protection & Usability Settings:
              1. _honey: Honeypot field (hidden) to trap bots.
              2. _captcha: Enable reCAPTCHA (default true) for robust spam protection.
              3. _template: 'table' for a clean, readable email format.
              4. _subject: Custom subject line for clear identification.
              5. _next: Redirect back to this page with success indicator.
            */}
                        <input type="text" name="_honey" style={{ display: 'none' }} />
                        <input type="hidden" name="_captcha" value="true" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New inquiry from Pivot website" />
                        <input type="hidden" name="_next" value={nextUrl} />

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                {dict.contact.nameLabel}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-colors"
                                placeholder={dict.contact.namePlaceholder}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                {dict.contact.emailLabel}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-colors"
                                placeholder={dict.contact.emailPlaceholder}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                {dict.contact.messageLabel}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-colors resize-none"
                                placeholder={dict.contact.messagePlaceholder}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            {dict.contact.submitButton}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
