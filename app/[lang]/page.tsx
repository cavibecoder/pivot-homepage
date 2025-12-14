import { Suspense } from 'react';
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import SocialLinks from "@/components/SocialLinks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getDictionary } from '@/lib/constants';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = getDictionary(lang);

    return (
        <main className="min-h-screen bg-white">
            <Hero dict={dict} />
            <About dict={dict} />
            <WhatIDo dict={dict} />
            <SocialLinks dict={dict} />
            <Suspense fallback={<div className="py-20 text-center">...</div>}>
                <Contact dict={dict} />
            </Suspense>
            <Footer dict={dict} />
        </main>
    );
}
