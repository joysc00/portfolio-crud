import { Head, Link, useForm } from '@inertiajs/react';
import ProjectForm from '@/Components/ProjectForm';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '', description: '', tech_stack: '', project_url: '',
        repo_url: '', image: null, date_completed: '', status: 'planned',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('projects.store'), { forceFormData: true });
    };

    return (
        <div className="bg-bg text-text font-body min-h-screen">
            <Head title="Add project" />
            <main className="max-w-2xl mx-auto px-5 md:px-8 py-10">
                <h1 className="font-heading font-bold text-3xl mb-2">Add project</h1>
                <Link href={route('projects.index')} className="text-sm text-accent underline underline-offset-4">← Back to list</Link>
                <div className="mt-6">
                    <ProjectForm data={data} setData={setData} errors={errors} processing={processing} onSubmit={submit} submitLabel="Create project" />
                </div>
            </main>
        </div>
    );
}
