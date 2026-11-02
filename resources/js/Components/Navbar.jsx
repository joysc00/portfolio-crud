import { useEffect, useState } from 'react';

const links = [
    ['Home', '#home'], ['About', '#about'], ['Skills', '#skills'],
    ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact'],
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        setDark(document.documentElement.classList.contains('dark'));
    }, []);

    const toggleTheme = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle('dark', next);
        try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (e) {}
    };

    return (
        <header className="sticky top-0 z-40 bg-bg/90 backdrop-blur border-b border-transparent">
            <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
                <a href="#home" className="flex items-center gap-3 font-heading font-bold">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-sage text-accent text-sm" aria-hidden="true">JCS</span>
                    <span className="hidden sm:inline">Joylene Saclayan</span>
                </a>

                <div className="flex items-center gap-2">
                    <nav aria-label="Main">
                        <ul className={`${open ? 'flex' : 'hidden'} md:flex items-center gap-1 text-sm font-medium
                            max-md:absolute max-md:left-0 max-md:right-0 max-md:top-16 max-md:flex-col max-md:items-stretch max-md:bg-bg max-md:border-b max-md:border-line max-md:p-4`}>
                            {links.map(([label, href]) => (
                                <li key={href}>
                                    <a href={href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:text-accent">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button type="button" onClick={toggleTheme} className="w-11 h-11 grid place-items-center rounded-full border border-line hover:border-accent"
                        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
                        <span aria-hidden="true">{dark ? '☀' : '☾'}</span>
                    </button>
                    <button type="button" onClick={() => setOpen(!open)} className="md:hidden w-11 h-11 grid place-items-center rounded-full border border-line"
                        aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
                        <span aria-hidden="true">{open ? '✕' : '≡'}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
