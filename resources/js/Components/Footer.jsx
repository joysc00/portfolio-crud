import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
                <div>
                    <p className="font-heading font-bold">JCS · Joylene Camara Saclayan</p>
                    <p className="text-sm text-muted">Aspiring IT professional passionate about web development, learning new technologies, and creating useful digital solutions.</p>
                </div>
                <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm">
                    <a className="hover:text-accent" href="#about">About</a>
                    <a className="hover:text-accent" href="#skills">Skills</a>
                    <a className="hover:text-accent" href="#projects">Projects</a>
                    <a className="hover:text-accent" href="#contact">Contact</a>
                    <Link className="hover:text-accent" href={route('projects.index')}>Manage projects</Link>
                </nav>
                <a href="#home" className="inline-flex items-center min-h-[44px] px-5 rounded-full border border-line text-sm hover:border-accent">Back to top ↑</a>
            </div>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pb-8 text-sm text-muted">© {new Date().getFullYear()} Joylene Camara Saclayan</p>
        </footer>
    );
}
