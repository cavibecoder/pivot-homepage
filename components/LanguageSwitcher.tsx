'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    // Helper to switch language
    const handleSwitch = (newLang: string) => {
        if (!pathname) return;

        // Split pathname to get segments. ['', 'en', 'contact']
        const segments = pathname.split('/');

        // Assume second segment is always locale if we have middleware setup correctly.
        // If we are at root /, segments is ['', '']

        if (segments.length > 1 && (segments[1] === 'en' || segments[1] === 'ja')) {
            segments[1] = newLang;
        } else {
            // Fallback if structure is unexpected, though middleware should enforce /en or /ja
            segments.splice(1, 0, newLang);
        }

        const newPath = segments.join('/');
        router.push(newPath);
    };

    const currentLang = pathname?.split('/')[1] === 'ja' ? 'ja' : 'en';

    return (
        <div className="absolute top-6 right-6 z-50">
            <div className="bg-white/90 backdrop-blur-sm shadow-sm border border-gray-200 rounded-full p-1 flex items-center text-sm font-medium">
                <button
                    onClick={() => handleSwitch('en')}
                    className={`px-3 py-1 rounded-full transition-colors ${currentLang === 'en'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                >
                    EN
                </button>
                <button
                    onClick={() => handleSwitch('ja')}
                    className={`px-3 py-1 rounded-full transition-colors ${currentLang === 'ja'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                >
                    JP
                </button>
            </div>
        </div>
    );
}
