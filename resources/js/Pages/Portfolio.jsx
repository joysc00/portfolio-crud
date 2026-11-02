import { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import SectionTitle from '@/Components/SectionTitle';
import SkillCard from '@/Components/SkillCard';
import ProjectCard from '@/Components/ProjectCard';
import ProjectModal from '@/Components/ProjectModal';
import ContactForm from '@/Components/ContactForm';

const skills = [
    { title: 'Frontend Development', items: ['HTML', 'CSS', 'Tailwind CSS'] },
    { title: 'Programming', items: ['JavaScript', 'Java', 'PHP'] },
    { title: 'Database and Backend', items: ['MySQL', 'Firebase'] },
    { title: 'Tools and Platforms', items: ['VS Code', 'Git', 'GitHub'] },
    { title: 'Soft Skills', items: ['Problem-solving', 'Teamwork', 'Creativity', 'Willingness to Learn'] },
];

const filters = [
    ['all', 'All'], ['completed', 'Completed'], ['in progress', 'In progress'], ['planned', 'Planned'],
];

export default function Portfolio({ projects }) {
    const [filter, setFilter] = useState('all');
    const [selected, setSelected] = useState(null);

    const visible = filter === 'all' ? projects : projects.filter((p) => p.status === filter);

    return (
        <div className="bg-bg text-text font-body antialiased min-h-screen">
            <Head title="Joylene Saclayan | IT Portfolio" />
            <Navbar />

            <main id="main">
                {/* HERO */}
                <section id="home" className="max-w-6xl mx-auto px-5 md:px-8 pt-12 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-sm font-semibold tracking-wide text-accent">Aspiring IT professional</p>
                        <h1 className="font-heading font-bold text-5xl lg:text-7xl leading-tight mt-3">Hi, I'm Joylene.</h1>
                        <p className="font-heading text-xl md:text-2xl mt-4 text-muted leading-snug">Building thoughtful digital experiences through technology and creativity.</p>
                        <p className="mt-5 text-muted max-w-prose leading-relaxed">I'm an IT student developing my skills in web development and software projects.</p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a href="#projects" className="inline-flex justify-center items-center min-h-[44px] px-6 rounded-full bg-accent text-onaccent font-semibold hover:opacity-90 transition">Explore my work</a>
                            <a href="#contact" className="inline-flex justify-center items-center min-h-[44px] px-6 rounded-full border border-accent text-accent font-semibold hover:bg-sage transition">Get in touch</a>
                        </div>
                        <p className="mt-6 text-sm text-muted">Always learning, always building.</p>
                    </div>
                    <div className="relative mx-auto w-64 sm:w-72 md:w-full max-w-sm">
                        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-3xl bg-sage" aria-hidden="true" />
                        <figure className="relative aspect-[3/4] rounded-t-full rounded-b-3xl border border-line bg-card overflow-hidden">
                            <img src="/images/profile.jfif" alt="Photo of Joylene Saclayan" className="w-full h-full object-cover" />
                        </figure>
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="bg-sage/40 py-20 md:py-28">
                    <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-5 gap-12 items-center">
                        <img src="/images/about.jfif" alt="Photo of Joylene Saclayan" className="md:col-span-2 aspect-square w-full rounded-3xl object-cover border border-line" />
                        <div className="md:col-span-3">
                            <h2 className="font-heading font-bold text-3xl md:text-4xl">A little about me</h2>
                            <div className="mt-5 space-y-4 text-muted leading-relaxed max-w-prose">
                                <p>Hi! I'm Joylene Camara Saclayan, an IT student who is learning about technology, programming, and web development. I enjoy exploring how websites work and creating projects that help me improve my coding skills and creativity.</p>
                                <p>I'm interested in Information Technology because I want to understand how technology can solve problems and make everyday tasks easier. I enjoy web development because I can combine design and coding to create useful and attractive websites.</p>
                                <p>My goal is to become a skilled IT professional who can develop websites and applications, continue learning new technologies, and gain more experience through different projects. I know I still have a lot to learn, but I'm willing to improve my skills and challenge myself along the way.</p>
                            </div>
                            <blockquote className="mt-8 rounded-2xl bg-card border border-line border-l-4 border-l-accent p-5">
                                <p className="font-heading text-lg">"Learn something new, improve every day, and never stop growing."</p>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* SKILLS */}
                <section id="skills" className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
                    <SectionTitle title="Skills & Technologies">
                        Technologies I have practiced and skills I continue to develop as an IT student.
                    </SectionTitle>
                    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {skills.map((s) => <SkillCard key={s.title} {...s} />)}
                    </div>
                </section>

                {/* PROJECTS (dynamic: comes from the database) */}
                <section id="projects" className="bg-sage/40 py-20 md:py-28">
                    <div className="max-w-6xl mx-auto px-5 md:px-8">
                        <SectionTitle title="Selected projects" />
                        <div className="mt-8 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter projects by status">
                            {filters.map(([value, label]) => (
                                <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}
                                    className={`shrink-0 min-h-[44px] px-5 rounded-full border text-sm font-medium ${filter === value ? 'bg-accent text-onaccent border-accent' : 'border-line'}`}>
                                    {label}
                                </button>
                            ))}
                        </div>
                        {visible.length === 0 ? (
                            <p className="mt-8 text-muted">No projects to show yet.</p>
                        ) : (
                            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {visible.map((p) => <ProjectCard key={p.id} project={p} onDetails={setSelected} />)}
                            </div>
                        )}
                    </div>
                </section>

                {/* EDUCATION */}
                <section id="education" className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28">
                    <SectionTitle title="My learning journey" />
                    <ol className="mt-12 relative border-l-2 border-accent/60 ml-3 space-y-10">
                        <li className="pl-8 relative">
                            <span className="absolute -left-[13px] top-1 w-6 h-6 bg-accent rounded-tl-full rounded-br-full rounded-tr-md rounded-bl-md" aria-hidden="true" />
                            <h3 className="font-heading font-bold text-lg">BS Information Technology</h3>
                            <p className="text-sm text-muted">Urdaneta City University</p>
                            <p className="mt-2 text-muted">I am learning about programming, web development, databases, and other IT skills that help me build useful and creative applications.</p>
                        </li>
                    </ol>
                </section>

                {/* CONTACT */}
                <section id="contact" className="bg-sage/40 py-20 md:py-28">
                    <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12">
                        <div>
                            <SectionTitle title="Let's connect">
                                I'm happy to talk about web development, school projects or learning opportunities. Send me a message.
                            </SectionTitle>
                            <ul className="mt-8 space-y-3 text-muted">
                                <li>Email: <a href="mailto:camarajoylene2@gmail.com" className="hover:text-accent">camarajoylene2@gmail.com</a></li>
                                <li>GitHub: <a href="https://github.com/joysc00" className="hover:text-accent">joysc00</a></li>
                            </ul>
                        </div>
                        <ContactForm />
                    </div>
                </section>
            </main>

            <Footer />
            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </div>
    );
}
