export default function SkillCard({ title, items }) {
    return (
        <article className="rounded-2xl bg-card border border-line p-6 hover:border-accent transition-colors">
            <h3 className="font-heading font-bold text-lg">{title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                {items.map((item) => (
                    <li key={item} className="px-3 py-1 rounded-full bg-sage">{item}</li>
                ))}
            </ul>
        </article>
    );
}
