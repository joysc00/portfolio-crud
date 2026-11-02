import { Head, Link, useForm } from '@inertiajs/react';
import ProjectForm from '@/Components/ProjectForm';

export default function Edit({ project }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'put', // file uploads need POST, so Laravel reads this as PUT
        title: project.title,
        description: project.description,
        tech_stack: project.tech_stack,
        project_url: project.project_url ?? '',
        repo_url: project.repo_url ?? '',
        image: null,
        date_completed: project.date_completed ?? '',
        status: project.status,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('projects.update', project.id), { forceFormData: true });
    };

    return (
        <div className="bg-bg text-text font-body min-h-screen">
            <Head title="Edit project" />
            <main className="max-w-2xl mx-auto px-5 md:px-8 py-10">
                <h1 className="font-heading font-bold text-3xl mb-2">Edit project</h1>
                <Link href={route('projects.index')} className="text-sm text-accent underline underline-offset-4">← Back to list</Link>
                <div className="mt-6">
                    <ProjectForm data={data} setData={setData} errors={errors} processing={processing} onSubmit={submit}
                        submitLabel="Save changes" currentImage={project.image} />
                </div>
            </main>
        </div>
    );
}
