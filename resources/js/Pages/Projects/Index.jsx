import { Head, Link, router } from '@inertiajs/react';
import FlashMessage from '@/Components/FlashMessage';

export default function Index({ projects }) {
    const destroy = (project) => {
        if (window.confirm(`Delete "${project.title}"? This cannot be undone.`)) {
            router.delete(route('projects.destroy', project.id));
        }
    };

    return (
        <div className="bg-bg text-text font-body min-h-screen">
            <Head title="Manage projects" />
            <main className="max-w-5xl mx-auto px-5 md:px-8 py-10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="font-heading font-bold text-3xl">Manage projects</h1>
                        <Link href={route('home')} className="text-sm text-accent underline underline-offset-4">← Back to portfolio</Link>
                    </div>
                    <Link href={route('projects.create')} className="inline-flex items-center min-h-[44px] px-6 rounded-full bg-accent text-onaccent font-semibold">
                        + Add project
                    </Link>
                </div>

                <FlashMessage />

                {projects.length === 0 ? (
                    <p className="text-muted">No projects yet. Add your first one.</p>
                ) : (
                    <div className="overflow-x-auto rounded-2xl border border-line bg-card">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-sage">
                                <tr>
                                    <th className="p-3">Title</th>
                                    <th className="p-3">Tech stack</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Completed</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((p) => (
                                    <tr key={p.id} className="border-t border-line">
                                        <td className="p-3 font-medium">{p.title}</td>
                                        <td className="p-3 text-muted">{p.tech_stack}</td>
                                        <td className="p-3 capitalize">{p.status}</td>
                                        <td className="p-3">{p.date_completed ?? '-'}</td>
                                        <td className="p-3">
                                            <div className="flex gap-3">
                                                <Link href={route('projects.edit', p.id)} className="text-accent underline underline-offset-4">Edit</Link>
                                                <button type="button" onClick={() => destroy(p)} className="text-red-700 dark:text-red-300 underline underline-offset-4">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
}
