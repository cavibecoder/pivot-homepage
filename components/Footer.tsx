type Dictionary = {
    footer: {
        rights: string;
        builtWith: string;
    };
};

export default function Footer({ dict }: { dict: Dictionary }) {
    return (
        <footer className="py-10 text-center text-sm text-gray-400 border-t border-gray-100">
            <p className="mb-2">© {new Date().getFullYear()} Pivot. {dict.footer.rights}</p>
            <div className="flex justify-center gap-4 text-xs">
                <span>{dict.footer.builtWith}</span>
                {/* Placeholder for Privacy Policy */}
            </div>
        </footer>
    );
}
