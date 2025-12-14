type Dictionary = {
    about: {
        title: string;
        introduction: string;
        locationTitle: string;
        location: string;
        languagesTitle: string;
        languages: string;
    };
};

export default function About({ dict }: { dict: Dictionary }) {
    return (
        <section id="about" className="py-20 px-6 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">{dict.about.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {dict.about.introduction}
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-gray-500 text-sm">
                <div>
                    <span className="block font-semibold text-gray-400 mb-1">{dict.about.locationTitle}</span>
                    {dict.about.location}
                </div>
                <div>
                    <span className="block font-semibold text-gray-400 mb-1">{dict.about.languagesTitle}</span>
                    {dict.about.languages}
                </div>
            </div>
        </section>
    );
}

