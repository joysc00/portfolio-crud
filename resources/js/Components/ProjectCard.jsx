const statusLabel = { planned: 'Planned', 'in progress': 'In progress', completed: 'Completed' };

export default function ProjectCard({ project, onDetails }) {
    const tech = project.tech_stack.split(',').map((t) => t.trim()).filter(Boolean);

    return (
        <article className="rounded-2xl bg-card border border-line overflow-hidden flex flex-col">
            {project.image ? (
                <img src={`/storage/${project.image}`} alt={`Screenshot of ${project.title}`} className="aspect-video w-full object-cover" />
            ) : (
                <div className="aspect-video w-full bg-sage grid place-items-center text-muted text-sm">No image</div>
            )}
            <div className="p-6 flex flex-col grow">
                <h3 className="font-heading font-bold text-lg">{project.title}</h3>
                <p className="mt-2 text-sm text-muted grow line-clamp-3">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs">
                    {tech.map((t) => <li key={t} className="px-2.5 py-1 rounded-full bg-sage">{t}</li>)}
                </ul>
                <p className="mt-4 text-xs text-muted">Status: {statusLabel[project.status] ?? project.status}</p>
                <button type="button" onClick={() => onDetails(project)}
                    className="mt-4 self-start min-h-[44px] text-sm font-semibold text-accent underline underline-offset-4">
                    View details
                </button>
            </div>
        </article>
    );
}
