import Link from 'next/link';

type Dictionary = {
    hero: {
        name: string;
        tagline: string;
        contactBtn: string;
        socialBtn: string;
    };
};

export default function Hero({ dict }: { dict: Dictionary }) {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gray-800">
                {dict.hero.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 font-light">
                {dict.hero.tagline}
            </p>

            <div className="flex gap-4">
                <Link
                    href="#contact"
                    className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 font-medium"
                >
                    {dict.hero.contactBtn}
                </Link>
                <Link
                    href="#social"
                    className="px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors duration-300 font-medium shadow-sm hover:shadow-md"
                >
                    {dict.hero.socialBtn}
                </Link>
            </div>
        </section>
    );
}
