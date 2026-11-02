import { useEffect, useRef } from 'react';

export default function ProjectModal({ project, onClose }) {
    const ref = useRef(null);

    useEffect(() => {
        const dialog = ref.current;
        if (project && !dialog.open) dialog.showModal();
        if (!project && dialog.open) dialog.close();
    }, [project]);

    return (
        <dialog ref={ref} onClose={onClose} aria-labelledby="modal-title"
            className="rounded-2xl bg-card text-text border border-line p-0 w-[90vw] max-w-lg">
            {project && (
                <div className="p-6 md:p-8">
                    <h3 id="modal-title" className="font-heading font-bold text-2xl">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted capitalize">Status: {project.status}</p>
                    <p className="mt-4 text-muted">{project.description}</p>
                    <p className="mt-4 text-sm"><span className="font-semibold">Technologies:</span> {project.tech_stack}</p>
                    {project.date_completed && (
                        <p className="mt-2 text-sm"><span className="font-semibold">Completed:</span> {project.date_completed}</p>
                    )}
                    <div className="mt-4 flex gap-4 text-sm font-semibold text-accent">
                        {project.project_url && <a href={project.project_url} target="_blank" rel="noreferrer" className="underline underline-offset-4">Live project</a>}
                        {project.repo_url && <a href={project.repo_url} target="_blank" rel="noreferrer" className="underline underline-offset-4">Repository</a>}
                    </div>
                    <button type="button" onClick={onClose} className="mt-6 min-h-[44px] px-6 rounded-full bg-accent text-onaccent font-semibold">Close</button>
                </div>
            )}
        </dialog>
    );
}
