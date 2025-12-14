import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';

type Dictionary = {
    social: {
        title: string;
    };
};

export default function SocialLinks({ dict }: { dict: Dictionary }) {
    return (
        <section id="social" className="py-20 px-6 text-center">
            <h2 className="text-2xl font-bold mb-12 text-gray-800">{dict.social.title}</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {SOCIAL_LINKS.map((link) => {
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                                <Icon size={28} strokeWidth={1.5} />
                            </div>
                            <span className="text-sm text-gray-500 group-hover:text-gray-900 transition-colors">
                                {link.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
