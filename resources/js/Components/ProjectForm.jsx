import { Link } from '@inertiajs/react';
import InputError from '@/Components/InputError';

const inputCls = 'mt-1 w-full rounded-lg border border-line bg-bg px-3 min-h-[44px]';

function Field({ id, label, error, children }) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium">{label}</label>
            {children}
            <InputError message={error} />
        </div>
    );
}

// Shared by Create and Edit: one form, written once.
export default function ProjectForm({ data, setData, errors, processing, onSubmit, submitLabel, currentImage }) {
    return (
        <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl bg-card border border-line p-6 md:p-8">
            <Field id="title" label="Title *" error={errors.title}>
                <input id="title" type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} className={inputCls} />
            </Field>

            <Field id="description" label="Description *" error={errors.description}>
                <textarea id="description" rows="4" value={data.description} onChange={(e) => setData('description', e.target.value)} className={`${inputCls} py-2`} />
            </Field>

            <Field id="tech_stack" label="Tech stack * (comma separated)" error={errors.tech_stack}>
                <input id="tech_stack" type="text" value={data.tech_stack} onChange={(e) => setData('tech_stack', e.target.value)} className={inputCls} placeholder="HTML, Tailwind CSS, JavaScript" />
            </Field>

            <div className="grid md:grid-cols-2 gap-5">
                <Field id="project_url" label="Project URL" error={errors.project_url}>
                    <input id="project_url" type="text" value={data.project_url} onChange={(e) => setData('project_url', e.target.value)} className={inputCls} placeholder="https://" />
                </Field>
                <Field id="repo_url" label="Repository URL" error={errors.repo_url}>
                    <input id="repo_url" type="text" value={data.repo_url} onChange={(e) => setData('repo_url', e.target.value)} className={inputCls} placeholder="https://github.com/..." />
                </Field>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <Field id="date_completed" label="Date completed" error={errors.date_completed}>
                    <input id="date_completed" type="date" value={data.date_completed} onChange={(e) => setData('date_completed', e.target.value)} className={inputCls} />
                </Field>
                <Field id="status" label="Status *" error={errors.status}>
                    <select id="status" value={data.status} onChange={(e) => setData('status', e.target.value)} className={inputCls}>
                        <option value="planned">Planned</option>
                        <option value="in progress">In progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </Field>
            </div>

            <Field id="image" label="Image (JPG, PNG or WEBP, max 2 MB)" error={errors.image}>
                {currentImage && (
                    <img src={`/storage/${currentImage}`} alt="Current project" className="mt-2 h-24 rounded-lg border border-line object-cover" />
                )}
                <input id="image" type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0] ?? null)} className="mt-2 block w-full text-sm" />
            </Field>

            <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" disabled={processing}
                    className="min-h-[44px] px-6 rounded-full bg-accent text-onaccent font-semibold hover:opacity-90 disabled:opacity-50">
                    {processing ? 'Saving...' : submitLabel}
                </button>
                <Link href={route('projects.index')} className="inline-flex items-center min-h-[44px] px-6 rounded-full border border-line hover:border-accent">
                    Cancel
                </Link>
            </div>
        </form>
    );
}
