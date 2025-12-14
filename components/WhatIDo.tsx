type Dictionary = {
    whatIDo: {
        title: string;
        items: { title: string; description: string }[];
    };
};

export default function WhatIDo({ dict }: { dict: Dictionary }) {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">{dict.whatIDo.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {dict.whatIDo.items.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
